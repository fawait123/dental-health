'use client';

import dayjs from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import DetailsEvents from '@/app/shared/event-calendar/details-event';
import { useModal } from '@/app/shared/modal-views/use-modal';
import useEventCalendar from '@/hooks/use-event-calendar';
import cn from '@/utils/class-names';
import FormModal from './FormModal';
import { CalendarEventBrushingChecklist } from '../schema';
import httpRequest from '@/config/httpRequest';
import { useSession } from 'next-auth/react';
import moment from 'moment';
import DetailsEventsBrushingChecklist from './DetailEventBrushingChecklist';

const localizer = dayjsLocalizer(dayjs);

type TypeDataCalendar = {
  id: string;
  title: string;
  allDay: true;
  start: Date;
  end: Date;
  checkList: [];
};

type TypeListItem = {
  id: string;
  date: string;
  checklist: string;
};

const formatToDataCalendar = (data): [TypeDataCalendar] => {
  return data.map((item: TypeListItem) => {
    const parseString = JSON.parse(item.checklist) as [];
    return {
      id: item.id,
      title: parseString.join(', ') ?? '',
      allDay: true,
      start: moment(item.date).toDate(),
      end: moment(item.date).toDate(),
      checkList: JSON.parse(item.checklist),
    };
  });
};

// rbc-active -> black button active
const calendarToolbarClassName =
  '[&_.rbc-toolbar_.rbc-toolbar-label]:whitespace-nowrap [&_.rbc-toolbar_.rbc-toolbar-label]:my-2 [&_.rbc-toolbar]:flex [&_.rbc-toolbar]:flex-col [&_.rbc-toolbar]:items-center @[56rem]:[&_.rbc-toolbar]:flex-row [&_.rbc-btn-group_button:hover]:bg-gray-300 [&_.rbc-btn-group_button]:duration-200 [&_.rbc-btn-group_button.rbc-active:hover]:bg-gray-600 dark:[&_.rbc-btn-group_button.rbc-active:hover]:bg-gray-300 [&_.rbc-btn-group_button.rbc-active:hover]:text-gray-50 dark:[&_.rbc-btn-group_button.rbc-active:hover]:text-gray-900';

export default function CalendarEventBrusingChecklist() {
  const { events } = useEventCalendar();
  const { openModal } = useModal();
  const { data: session } = useSession();
  const [dataEvent, setDataEvent] = useState([]);

  const handleSelectSlot = useCallback(
    ({ start, end }: { start: Date; end: Date }) => {
      openModal({
        view: (
          <FormModal
            getData={onAfterSafeModal}
            startDate={start}
            endDate={end}
          />
        ),
        customSize: '650px',
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [openModal]
  );

  const onAfterSafeModal = () => {
    getData();
  };
  const handleSelectEvent = useCallback(
    (event: CalendarEventBrushingChecklist) => {
      console.log(event);
      openModal({
        view: <DetailsEventsBrushingChecklist event={event} />,
        customSize: '500px',
      });
    },
    [openModal]
  );

  const { views, scrollToTime, formats } = useMemo(
    () => ({
      views: {
        month: true,
        week: true,
        day: true,
        agenda: true,
      },
      scrollToTime: new Date(2023, 10, 27, 6),
      formats: {
        dateFormat: 'D',
        weekdayFormat: (date: Date, culture: any, localizer: any) =>
          localizer.format(date, 'ddd', culture),
        dayFormat: (date: Date, culture: any, localizer: any) =>
          localizer.format(date, 'ddd M/D', culture),
        timeGutterFormat: (date: Date, culture: any, localizer: any) =>
          localizer.format(date, 'hh A', culture),
      },
    }),
    []
  );

  const getData = () => {
    try {
      httpRequest({
        method: 'get',
        url: '/brushing-checklist',
        params: {
          userID: session.user['idUser'],
        },
      })
        .then((response) => {
          console.log('res');
          setDataEvent(
            formatToDataCalendar(response?.data?.data?.results?.data)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="@container">
      <Calendar
        localizer={localizer}
        events={dataEvent}
        views={views}
        formats={formats}
        startAccessor="start"
        endAccessor="end"
        dayLayoutAlgorithm="no-overlap"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        scrollToTime={scrollToTime}
        className={cn('h-[650px] md:h-[1000px]', calendarToolbarClassName)}
      />
    </div>
  );
}
