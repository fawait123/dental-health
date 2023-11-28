import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from '@/components/ui/button';
import PageHeader from '@/app/shared/page-header';
import ProductsTable from '@/app/shared/ecommerce/product/product-list/table';
import { productsData } from '@/data/products-data';
import { metaObject } from '@/config/site.config';
import ExportButton from '@/app/shared/export-button';

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
          <ExportButton
            data={productsData}
            fileName="product_data"
            header="ID,Name,Category,Product Thumbnail,SKU,Stock,Price,Status,Rating"
          />
          <Link
            href={routes.controldiabetes.createProduct}
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

      <ProductsTable data={productsData} />
    </>
  );
}
