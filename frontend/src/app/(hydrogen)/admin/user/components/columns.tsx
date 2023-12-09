'use client';

import Link from 'next/link';
import { HeaderCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { Progressbar } from '@/components/ui/progressbar';
import { Tooltip } from '@/components/ui/tooltip';
import { ActionIcon } from '@/components/ui/action-icon';
import { routes } from '@/config/routes';
import EyeIcon from '@/components/icons/eye';
import PencilIcon from '@/components/icons/pencil';
import AvatarCard from '@/components/ui/avatar-card';
import { PiStarFill } from 'react-icons/pi';
import DeletePopover from '@/app/shared/delete-popover';
import { DentalHealthType } from '../data';
import { Avatar, Switch } from 'rizzui';

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

export type ListData = {
  id: string;
  username: string;
  email: string;
  name: string;
  placebirth: string;
  birthdate: string;
  gender: string;
  address: string;
  phone: string;
  history_sicknes: string | null;
  photo: string;
  role: string;
  createdAt: string;
  isActive: boolean;
  updatedAt: string;
};

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
  onChangeStatus?: (id: string, status: boolean) => void;
};

export const getColumnsDentalHealth = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
  onChangeStatus,
}: Columns) => [
  {
    title: <HeaderCell title="Nama" />,
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: (_: string, row: ListData) => (
      <Text className="text-sm">{row.name}</Text>
    ),
  },
  {
    title: <HeaderCell title="Tempat, Tanggal Lahir" />,
    dataIndex: 'placebirth',
    key: 'placebirth',
    width: 150,
    render: (_: string, row: ListData) => (
      <Text className="text-sm">{row.placebirth + ', ' + row.birthdate}</Text>
    ),
  },
  {
    title: <HeaderCell title="Username" />,
    dataIndex: 'username',
    key: 'username',
    width: 150,
    render: (_: string, row: ListData) => (
      <Text className="text-sm">{row.username}</Text>
    ),
  },
  {
    title: <HeaderCell title="Email" />,
    dataIndex: 'email',
    key: 'email',
    width: 200,
    render: (_: number, row: ListData) => (
      <Text className="text-sm">{row.email}</Text>
    ),
  },
  {
    title: <HeaderCell title="NO HP" />,
    dataIndex: 'phone',
    key: 'phone',
    width: 200,
    render: (_: number, row: ListData) => (
      <Text className="text-sm">{row.phone}</Text>
    ),
  },
  {
    title: <HeaderCell title="Jenis Kelamin" />,
    dataIndex: 'gender',
    key: 'gender',
    width: 200,
    render: (_: number, row: ListData) => (
      <Text className="text-sm">{row.gender}</Text>
    ),
  },
  {
    title: <HeaderCell title="Alamat" />,
    dataIndex: 'address',
    key: 'address',
    width: 150,
    render: (_: string, row: ListData) => (
      <Text className="font-medium text-gray-700">{row?.address}</Text>
    ),
  },
  {
    title: <HeaderCell title="Role" />,
    dataIndex: 'role',
    key: 'role',
    width: 150,
    render: (_: string, row: ListData) => (
      <Text className="font-medium text-gray-700">{row?.role}</Text>
    ),
  },
  {
    title: <HeaderCell title="Gambar" />,
    dataIndex: 'photo',
    key: 'photo',
    width: 150,
    render: (_: string, row: ListData) => (
      <Avatar name={row?.name} src={row?.photo} />
    ),
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'isActive',
    key: 'isActive',
    width: 150,
    render: (_: string, row: ListData) =>
      row?.username == 'superadmin' ? (
        '-'
      ) : (
        <Switch
          defaultChecked={row?.isActive}
          onChange={() => onChangeStatus(row?.id, row?.isActive)}
        />
      ),
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'action',
    key: 'action',
    width: 120,
    render: (_: string, row: ListData) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        {row?.username == 'superadmin' ? (
          '-'
        ) : (
          <>
            <Tooltip
              size="sm"
              content={() => 'Edit Product'}
              placement="top"
              color="invert"
            >
              <Link href={'/admin' + routes.admin.user.editData(row?.id)}>
                <ActionIcon
                  size="sm"
                  variant="outline"
                  aria-label={'Edit Product'}
                >
                  <PencilIcon className="h-4 w-4" />
                </ActionIcon>
              </Link>
            </Tooltip>
            <DeletePopover
              title={`Delete the product`}
              description={`Are you sure you want to delete this #${row.id} product?`}
              onDelete={() => onDeleteItem(row.id)}
            />
          </>
        )}
      </div>
    ),
  },
];
