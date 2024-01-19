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
  title: 'Ubah Pemeriksaan Kesehatan Gigi & Mulut',
  breadcrumb: [
    {
      name: 'Pemeriksaan Kesehatan Gigi & Mulut',
    },
    {
      name: 'Edit',
    },
  ],
};

export default function EditDentalHealth({ params }: Props) {
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
