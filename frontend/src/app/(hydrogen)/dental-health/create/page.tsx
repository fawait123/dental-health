import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import { Button } from '@/components/ui/button';
import { routes } from '@/config/routes';
import FormDentalHealth from '../components/form';

export const metadata = {
  ...metaObject('Create Product'),
};

const pageHeader = {
  title: 'Tambah Pemeriksaan Kesehatan Gigi & Mulut',
  breadcrumb: [
    {
      href: routes.eCommerce.products,
      name: 'Pemeriksaan Kesehatan Gigi & Mulut',
    },
    {
      name: 'Create',
    },
  ],
};

export default function CreateProductPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <FormDentalHealth />
    </>
  );
}
