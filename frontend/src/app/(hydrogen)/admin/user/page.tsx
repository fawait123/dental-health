import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from '@/components/ui/button';
import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';
import { dentalHealthData } from './data';
import ControlDiabetesTable from './components/table';

export const metadata = {
  ...metaObject('Products'),
};

const pageHeader = {
  title: 'Kelola Pengguna',
  breadcrumb: [
    {
      href: 'admin' + routes.admin.user.dashboard,
      name: 'Kelola Pengguna',
    },
    {
      name: 'List',
    },
  ],
};

export default function DentalHealthPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <Link
            href={'/admin' + routes.admin.user.createProduct}
            className="w-full @lg:w-auto"
          >
            <Button
              tag="span"
              className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
            >
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Tambah Pengguna
            </Button>
          </Link>
        </div>
      </PageHeader>

      <ControlDiabetesTable data={dentalHealthData} />
    </>
  );
}
