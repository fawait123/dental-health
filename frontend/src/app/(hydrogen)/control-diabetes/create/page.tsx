import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import FormControlDiabetes from '../components/form';

export const metadata = {
  ...metaObject('Create Product'),
};

const pageHeader = {
  title: 'Tambah Kontrol Diabetes Melitus',
  breadcrumb: [
    {
      name: 'Kontrol Diabetes Melitus',
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

      <FormControlDiabetes />
    </>
  );
}
