import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import FormDentalHealth from '../../components/form';

type Props = {
  params: {
    id: string;
  };
};
export const metadata = {
  ...metaObject('Create Product'),
};

const pageHeader = {
  title: 'Edit Kontrol Diabetes Melitus',
  breadcrumb: [
    {
      href: routes.eCommerce.products,
      name: 'Kontrol Diabetes Melitus',
    },
    {
      name: 'Edit',
    },
  ],
};

export default function EditUserPage({ params }: Props) {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>
      <FormDentalHealth slug={params.id} />
    </>
  );
}
