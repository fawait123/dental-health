'use client';

import Link from 'next/link';
import { HeaderCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { Progressbar } from '@/components/ui/progressbar';
import { Tooltip } from '@/components/ui/tooltip';
import { ActionIcon } from '@/components/ui/action-icon';
import { routes } from '@/config/routes';
import PencilIcon from '@/components/icons/pencil';
import { PiStarFill } from 'react-icons/pi';
import DeletePopover from '@/app/shared/delete-popover';
import { ControlDiabetesType } from '../data';
import { Tag } from 'rizzui';
import moment from 'moment';

// get status badge
function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case 'pending':
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case 'publish':
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

// get stock status
function getStockStatus(status: number) {
  if (status === 0) {
    return (
      <>
        <Progressbar
          value={status}
          color="danger"
          label={'out of stock'}
          className="h-1.5 w-24 bg-red/20"
        />
        <Text className="pt-1.5 text-[13px] text-gray-500">out of stock </Text>
      </>
    );
  } else if (status <= 20) {
    return (
      <>
        <Progressbar
          value={status}
          color="warning"
          label={'low stock'}
          className="h-1.5 w-24 bg-orange/20"
        />
        <Text className="pt-1.5 text-[13px] text-gray-500">
          {status} low stock
        </Text>
      </>
    );
  } else {
    return (
      <>
        <Progressbar
          value={status}
          color="success"
          label={'stock available'}
          className="h-1.5 w-24 bg-green/20"
        />
        <Text className="pt-1.5 text-[13px] text-gray-500">
          {status} in stock
        </Text>
      </>
    );
  }
}

// get rating calculation
function getRating(rating: number[]) {
  let totalRating = rating.reduce((partialSum, value) => partialSum + value, 0);
  let review = totalRating / rating?.length;

  return (
    <div className="flex items-center">
      <span className="me-1 shrink-0">{review.toFixed(1)}</span>
      {[...new Array(5)].map((arr, index) => {
        return index < Math.round(review) ? (
          <PiStarFill className="w-4 fill-orange text-orange" key={index} />
        ) : (
          <PiStarFill className="w-4 fill-gray-300 text-gray-300" key={index} />
        );
      })}{' '}
      <span className="ms-1 shrink-0">({totalRating})</span>
    </div>
  );
}
enum colors {
  'PRIMARY',
  'secondary',
  'danger',
}
function tagColor(index: number): string {
  const data = ['primary', 'secondary', 'danger'];

  return data[index];
}

function toArray(data: string) {
  return JSON.parse(data) as [];
}

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getColumnsControlDiabetes = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
}: Columns) => [
  {
    title: (
      <HeaderCell
        title="#"
        // sortable
        // ascending={
        //   sortConfig?.direction === 'asc' && sortConfig?.key === 'stock'
        // }
      />
    ),
    // onHeaderCell: () => onHeaderCellClick('stock'),
    dataIndex: 'id',
    key: 'id',
    width: 350,
    render: (_: string, row: ControlDiabetesType) => {
      return <span>{`${row.id}`}</span>;
    },
  },
  {
    title: (
      <HeaderCell
        title="Kadar Gula Darah"
        // sortable
        // ascending={
        //   sortConfig?.direction === 'asc' && sortConfig?.key === 'stock'
        // }
      />
    ),
    // onHeaderCell: () => onHeaderCellClick('stock'),
    dataIndex: 'bloodSugarPressure',
    key: 'bloodSugarPressure',
    width: 200,
    render: (_: string, row: ControlDiabetesType) => {
      return <span>{`${row.bloodSugarPressure} MG/DL`}</span>;
    },
  },
  {
    title: (
      <HeaderCell
        title="Tekanan Darah"
        // sortable
        // ascending={
        //   sortConfig?.direction === 'asc' && sortConfig?.key === 'bloodPressure'
        // }
      />
    ),
    // onHeaderCell: () => onHeaderCellClick('bloodPressure'),
    dataIndex: 'bloodPressure',
    key: 'bloodPressure',
    width: 200,
    render: (_: string, row: ControlDiabetesType) => {
      return <span>{`${row.bloodPressure} MM/HG`}</span>;
    },
  },
  {
    title: <HeaderCell title="Kontrol Konsumsi Obat" />,
    dataIndex: 'controlDrugConsumption',
    key: 'controlDrugConsumption',
    width: 120,
    render: (_: string, row: ControlDiabetesType) => {
      return toArray(row.controlDrugConsumption).map((item, index) => {
        return (
          <Tag color="primary" key={index} className="mb-1">
            {item}
          </Tag>
        );
      });
    },
  },
  {
    title: <HeaderCell title="Aktifitas Fisik Dalam Sehari" />,
    dataIndex: 'physicalActivity',
    key: 'physicalActivity',
    width: 120,
    render: (_: string, row: ControlDiabetesType) => {
      return (
        <Tag color={row.physicalActivity == true ? 'primary' : 'danger'}>
          {row.physicalActivity == true ? 'YES' : 'NO'}
        </Tag>
      );
    },
  },
  {
    title: <HeaderCell title="Dibuat" />,
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 160,
    render: (_: string, row: ControlDiabetesType) => {
      return <span>{moment(row.createdAt).format('DD MMMM YYYY')}</span>;
    },
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'action',
    key: 'action',
    width: 120,
    render: (_: string, row: ControlDiabetesType) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={() => 'Edit Product'}
          placement="top"
          color="invert"
        >
          <Link href={routes.controldiabetes.editData(row.id)}>
            <ActionIcon size="sm" variant="outline" aria-label={'Edit Product'}>
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`Delete the product`}
          description={`Are you sure you want to delete this #${row.id} product?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
