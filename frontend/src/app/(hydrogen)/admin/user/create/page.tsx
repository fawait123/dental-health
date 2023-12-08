import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import FormDentalHealth from '../components/form';

export const metadata = {
  ...metaObject('Create Product'),
};

const pageHeader = {
  title: 'Form Pengguna',
  breadcrumb: [
    {
      href: routes.eCommerce.products,
      name: 'Form Pengguna',
    },
    {
      name: 'Page',
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
