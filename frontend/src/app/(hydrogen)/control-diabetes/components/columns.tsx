'use client';

import Link from 'next/link';
import { HeaderCell } from '@/components/ui/table';
import { Tooltip } from '@/components/ui/tooltip';
import { ActionIcon } from '@/components/ui/action-icon';
import { routes } from '@/config/routes';
import PencilIcon from '@/components/icons/pencil';
import DeletePopover from '@/app/shared/delete-popover';
import { ControlDiabetesType } from '../data';
import { Badge, Tag } from 'rizzui';
import moment from 'moment';

moment.updateLocale('en', {
  months: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ]
});

function toArray(data: string) {
  return JSON.parse(data) as [];
}

const convertControlConsumtionDrug = (value) => {
  switch (value) {
    case 'morning':
      return 'Pagi'.toLocaleUpperCase('id');
    case 'afternoon':
      return 'Siang'.toLocaleUpperCase('id');
    case 'night':
      return 'Malam'.toLocaleUpperCase('id');
    default:
      return value.toLocaleUpperCase('id');
  }
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
    title: <HeaderCell title="#" />,
    dataIndex: 'id',
    key: 'id',
    width: 350,
    render: (_: string, row: ControlDiabetesType) => {
      return <span>{`${row.id}`}</span>;
    },
  },
  {
    title: <HeaderCell title="Pasien" />,
    dataIndex: 'userID',
    key: 'userID',
    width: 350,
    hidden: 'userID',
    render: (_: string, row: ControlDiabetesType) => {
      return <span>{`${row?.user?.name}`}</span>;
    },
  },
  {
    title: <HeaderCell title="Kadar Gula Darah" />,
    dataIndex: 'bloodSugarPressure',
    key: 'bloodSugarPressure',
    width: 200,
    render: (_: string, row: ControlDiabetesType) => {
      return <span>{`${row.bloodSugarPressure} MG/DL`}</span>;
    },
  },
  {
    title: <HeaderCell title="Tekanan Darah" />,
    dataIndex: 'bloodPressure',
    key: 'bloodPressure',
    width: 200,
    render: (_: string, row: ControlDiabetesType) => {
      return <span>{`${row.systole}MM/${row.diastole}HG`}</span>;
    },
  },
  {
    title: <HeaderCell title="Kontrol Konsumsi Obat" />,
    dataIndex: 'controlDrugConsumption',
    key: 'controlDrugConsumption',
    width: 300,
    render: (_: string, row: ControlDiabetesType) => {
      return toArray(row.controlDrugConsumption).map((item, index) => {
        return (
          <Badge color="primary" key={index} className="mb-1 mr-1" variant='outline'>
            {convertControlConsumtionDrug(item)}
          </Badge>
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
        <span>{row.physicalActivity}</span>
      );
    },
  },
  {
    title: <HeaderCell title="Jenis Pemeriksaan Gula Darah" />,
    dataIndex: 'types_of_checks',
    key: 'types_of_checks',
    width: 120,
    render: (_: string, row: ControlDiabetesType) => {
      return (
        <span>{row.types_of_checks}</span>
      );
    },
  },
  {
    title: <HeaderCell title="Pemeriksaan HbA1c" />,
    dataIndex: 'checkhba1c',
    key: 'checkhba1c',
    width: 120,
    render: (_: string, row: ControlDiabetesType) => {
      return (
        <span>{row.checkhba1c}</span>
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
