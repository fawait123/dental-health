import { metaObject } from '@/config/site.config';
import ExportButton from '@/app/shared/export-button';
import ModalButton from '@/app/shared/modal-button';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import { eventData } from '@/data/event-data';
import EventForm from '@/app/shared/event-calendar/event-form';
import CardApplicationUse from './components/card';

export const metadata = {
  ...metaObject('Event Calendar'),
};

const pageHeader = {
  title: 'Application Use',
  breadcrumb: [
    {
      name: 'Application Use',
    },
    {
      name: 'index',
    },
  ],
};

export default function DentalHealthEducationPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        {/* <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={eventData}
            fileName="event_data"
            header="ID,Title,Description,Location,Start,end"
          />
          <ModalButton
            label="Create Event"
            view={<EventForm />}
            customSize="900px"
            className="mt-0 w-full hover:bg-gray-700 @lg:w-auto dark:bg-gray-100 dark:text-white dark:hover:bg-gray-200 dark:active:bg-gray-100"
          />
        </div> */}
      </PageHeader>

      <CardApplicationUse />
    </>
  );
}
