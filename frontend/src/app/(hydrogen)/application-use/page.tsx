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
  title: 'Panduan Penggunaan Aplikasi',
  breadcrumb: [
    {
      name: 'Panduan Penggunaan Aplikasi',
    },
    {
      name: 'index',
    },
  ],
};

export default function DentalHealthEducationPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <CardApplicationUse />
    </>
  );
}
