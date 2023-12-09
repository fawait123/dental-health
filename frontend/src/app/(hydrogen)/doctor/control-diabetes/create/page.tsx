import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import FormControlDiabetesDoctor from '../components/form';

export const metadata = {
  ...metaObject('Create Product'),
};

const pageHeader = {
  title: 'Create Kontrol Diabetes Melitus',
  breadcrumb: [
    {
      href: routes.eCommerce.products,
      name: 'Kontrol Diabetes Melitus',
    },
    {
      name: 'Create',
    },
  ],
};

export default function ControlDiabetesDoctorPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <FormControlDiabetesDoctor />
    </>
  );
}
