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

export type ListData = {
  CPITN: number;
  countTeeth: number;
  countTeethLoose: number;
  createdAt: string;
  debrisIndex: number;
  deletedAt: string;
  gingivitisConditions: boolean;
  id: string;
  updatedAt: string;
  userID: string;
  user: TypeUser;
};

type TypeUser = {
  name: string;
};

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getColumnsDentalHealth = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
}: Columns) => [
  {
    title: <HeaderCell title="Pasien" />,
    dataIndex: 'userID',
    key: 'userID',
    width: 150,
    render: (_: string, row: ListData) => (
      <Text className="text-sm">{row.user?.name}</Text>
    ),
  },
  {
    title: <HeaderCell title="Debris Index" />,
    dataIndex: 'debrisIndex',
    key: 'debrisIndex',
    width: 150,
    render: (_: string, row: ListData) => (
      <Text className="text-sm">{row.debrisIndex}</Text>
    ),
  },
  {
    title: <HeaderCell title="CPITN" />,
    dataIndex: 'CPITN',
    key: 'CPITN',
    width: 150,
    render: (_: string, row: ListData) => (
      <Text className="text-sm">{row.CPITN}</Text>
    ),
  },
  {
    title: <HeaderCell title="Jumlah Gigi" />,
    dataIndex: 'countTeeth',
    key: 'countTeeth',
    width: 200,
    render: (_: number, row: ListData) => (
      <Text className="text-sm">{row.countTeeth}</Text>
    ),
  },
  {
    title: <HeaderCell title="Jumlah Gigi Goyang" />,
    dataIndex: 'countTeethLoose',
    key: 'countTeethLoose',
    width: 200,
    render: (_: number, row: ListData) => (
      <Text className="text-sm">{row.countTeethLoose}</Text>
    ),
  },
  {
    title: <HeaderCell title="Kondisi Radang Gusi" />,
    dataIndex: 'gingivitisConditions',
    key: 'gingivitisConditions',
    width: 150,
    render: (_: string, row: ListData) => (
      <Text className="font-medium text-gray-700">
        {row?.gingivitisConditions == true ? 'YA' : 'TIDAK'}
      </Text>
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
        <Tooltip
          size="sm"
          content={() => 'Edit Product'}
          placement="top"
          color="invert"
        >
          <Link href={routes.dentalHealt.ediProduct(row.id)}>
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
