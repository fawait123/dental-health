import { useModal } from '@/app/shared/modal-views/use-modal';
import { PiXBold } from 'react-icons/pi';
import { ActionIcon, Button, Text, Title } from 'rizzui';
import { MdNightlight } from 'react-icons/md';
import cn from '@/utils/class-names';
import useEventCalendar from '@/hooks/use-event-calendar';
import { formatDate } from '@/utils/format-date';
import EventForm from '@/app/shared/event-calendar/event-form';
import { FiSun } from 'react-icons/fi';
import { CalendarEventBrushingChecklist } from '../schema';
import FormModal from './FormModal';
import httpRequest from '@/config/httpRequest';
import toast from 'react-hot-toast';

function DetailsEventsBrushingChecklist({
  event,
  getData,
}: {
  event: CalendarEventBrushingChecklist;
  getData?: () => void;
}) {
  const { deleteEvent } = useEventCalendar();
  const { openModal, closeModal } = useModal();

  function handleEditModal() {
    closeModal(),
      openModal({
        view: <FormModal event={event} getData={getData} />,
        customSize: '650px',
      });
  }

  function handleDelete(eventID: string) {
    try {
      httpRequest({
        url: '/brushing-checklist',
        method: 'delete',
        params: {
          id: eventID,
        },
      })
        .then((response) => {
          console.log(response);
          closeModal();
          toast.success(<Text as="b">Berhasil menghapus data</Text>);
        })
        .catch((err) => {
          closeModal();
        });
    } catch (error) {}
    closeModal();
  }

  return (
    <div className="m-auto p-4 md:px-7 md:pb-10 md:pt-6">
      <div className="mb-6 flex items-center justify-between">
        <Title as="h3" className="text-xl xl:text-2xl">
          Detail List Menggosok Gigi
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

      <div>
        <span className="font-medium text-gray-1000">
          {formatDate(event.start, 'MMMM D, YYYY')}
        </span>

        <ul className="mt-7 flex flex-col gap-[18px] text-gray-600">
          <li className="flex gap-2">
            <FiSun className="h-5 w-5" />
            <span>Pagi:</span>
            <span className="font-extrabold text-gray-1000">
              {event.checkList.filter((el) => el == 'pagi').length > 0
                ? 'YA'
                : 'TIDAK'}
            </span>
          </li>
          <li className="flex gap-2">
            <MdNightlight className="h-5 w-5" />
            <span>Malam:</span>
            <span className="font-extrabold text-gray-1000">
              {event.checkList.filter((el) => el == 'malam').length > 0
                ? 'YA'
                : 'TIDAK'}
            </span>
          </li>
        </ul>
        <div className={cn('grid grid-cols-2 gap-4 pt-5 ')}>
          <Button
            variant="outline"
            onClick={() => handleDelete(event.id as string)}
            className="dark:hover:border-gray-400"
          >
            Hapus
          </Button>
          <Button
            className="hover:bg-gray-700 dark:bg-gray-200 dark:text-white dark:hover:bg-gray-300 dark:active:bg-gray-100"
            onClick={handleEditModal}
          >
            Ubah
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailsEventsBrushingChecklist;
