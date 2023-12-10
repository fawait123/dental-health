import { metaObject } from '@/config/site.config';
import ExportButton from '@/app/shared/export-button';
import ModalButton from '@/app/shared/modal-button';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import { eventData } from '@/data/event-data';
import EventForm from '@/app/shared/event-calendar/event-form';
import RecentAppList from '../widgets/cards/recent-app-list';

export const metadata = {
  ...metaObject('Event Calendar'),
};

const pageHeader = {
  title: 'Edukasi Kesehatan Gigi',
  breadcrumb: [
    {
      href: routes.file.dashboard,
      name: 'Edukasi Kesehatan Gigi',
    },
    {
      href: routes.eventCalendar,
      name: 'index',
    },
  ],
};

export default function ApplicationUsePage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <RecentAppList />
    </>
  );
}
