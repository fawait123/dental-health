'use client';

import uniqueId from 'lodash/uniqueId';
import { PiXBold } from 'react-icons/pi';
import { SubmitHandler } from 'react-hook-form';
import { ActionIcon, Button, Switch, Text, Title } from 'rizzui';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { Form } from '@/components/ui/form';
import toast from 'react-hot-toast';
import cn from '@/utils/class-names';
import { CalendarEvent } from '@/types';
import useEventCalendar from '@/hooks/use-event-calendar';
import {
  EventFormInput,
  eventFormSchema,
} from '@/utils/validators/create-event.schema';
import moment from 'moment';

interface CreateEventProps {
  startDate?: Date;
  endDate?: Date;
  event?: CalendarEvent;
}

export default function EventForm({
  startDate,
  endDate,
  event,
}: CreateEventProps) {
  const { closeModal } = useModal();
  const { createEvent, updateEvent } = useEventCalendar();

  const isUpdateEvent = event !== undefined;

  const onSubmit: SubmitHandler<EventFormInput> = (data) => {
    console.log('data', data);
    const isNewEvent = data.id === '' || data.id === undefined;

    console.log('event_data', data);

    toast.success(
      <Text as="b">
        Event {isNewEvent ? 'Created' : 'Updated'} Successfully
      </Text>
    );

    if (isNewEvent) {
      createEvent({
        id: uniqueId(),
        start: data.startDate ?? startDate,
        end: data.endDate ?? endDate,
        title: data.title,
        description: data.description,
        location: data.location,
      });
    } else {
      // updateEvent({
      //   ...data,
      //   start: data.startDate,
      //   end: data.endDate,
      // });
      console.log('update event');
    }
    closeModal();
  };

  return (
    <div className="m-auto p-4 md:px-7 md:py-10">
      <div className="mb-6 flex items-center justify-between">
        <Title as="h3" className="text-lg">
          Ceklis Menggosok Gigi
        </Title>
        <ActionIcon
          size="sm"
          variant="text"
          onClick={() => closeModal()}
          className="p-0 text-gray-500 hover:!text-gray-900"
        >
          <PiXBold className="h-[18px] w-[18px]" />
        </ActionIcon>
      </div>

      <Form<EventFormInput>
        validationSchema={eventFormSchema}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: {
            title: event?.title ?? '',
            description: event?.description ?? '',
            location: event?.location ?? '',
            startDate: startDate ?? event?.start,
            endDate: endDate ?? event?.end,
          },
        }}
        className="grid grid-cols-1 gap-5 @container md:grid-cols-2 [&_label]:font-medium"
      >
        {({ register, control, watch, formState: { errors } }) => {
          const startDate = watch('startDate');
          const endDate = watch('endDate');
          console.log(startDate, 'date');
          console.log('format', moment(startDate).format('YYYY-MM-DD'));
          return (
            <>
              <input type="hidden" {...register('id')} value={event?.id} />
              <label className="font-medium">
                {moment(startDate).format('DD MMMM YYYY')}
              </label>
              <br />
              <Switch label="Siang" />
              <Switch label="Malam" />
              <div className={cn('col-span-full grid grid-cols-2 gap-4 pt-5')}>
                <Button
                  variant="outline"
                  className="w-full @xl:w-auto dark:hover:border-gray-400"
                  onClick={() => closeModal()}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="hover:gray-700 w-full hover:bg-gray-700 @xl:w-auto dark:bg-gray-200 dark:text-white dark:hover:bg-gray-300 dark:active:enabled:bg-gray-300"
                >
                  Save
                </Button>
              </div>
            </>
          );
        }}
      </Form>
    </div>
  );
}
