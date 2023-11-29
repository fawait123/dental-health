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
  title: 'Pemeriksaan Kesehatan Gigi & Mulut',
  breadcrumb: [
    {
      href: routes.dentalHealt.dashboard,
      name: 'Pemeriksaan Kesehatan Gigi & Mulut',
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
            href={routes.dentalHealt.createProduct}
            className="w-full @lg:w-auto"
          >
            <Button
              tag="span"
              className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
            >
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Tambah Pemeriksaan Gigi & Mulut
            </Button>
          </Link>
        </div>
      </PageHeader>

      <ControlDiabetesTable data={dentalHealthData} />
    </>
  );
}
