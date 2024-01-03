import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import CalendarEventBrusingChecklist from './components/CalendarEvent';

export const metadata = {
  ...metaObject('Event Calendar'),
};

const pageHeader = {
  title: 'Ceklist Menggosok Gigi',
  breadcrumb: [
    {
      name: 'Ceklist Menggosok Gigi',
    },
    {
      name: 'index',
    },
  ],
};

export default function BrushingChecklistPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <CalendarEventBrusingChecklist />
    </>
  );
}
