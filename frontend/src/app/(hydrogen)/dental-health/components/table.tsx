'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTable } from '@/hooks/use-table';
import { useColumn } from '@/hooks/use-column';
import { Button } from '@/components/ui/button';
import ControlledTable from '@/components/controlled-table';
import { ListData, getColumnsDentalHealth } from './columns';
import httpRequest from '@/config/httpRequest';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { Text } from 'rizzui';
import Cookies from 'js-cookie';
const FilterElement = dynamic(
  () => import('@/app/shared/ecommerce/product/product-list/filter-element'),
  { ssr: false }
);
const TableFooter = dynamic(() => import('@/app/shared/table-footer'), {
  ssr: false,
});

const filterState = {
  price: ['', ''],
  createdAt: [null, null],
  status: '',
};

type TypeJsonFormat = {
  CPITN: number;
  countTeeth: number;
  countTeethLoose: number;
  createdAt: string;
  debrisIndex: number;
  deletedAt: string;
  gingivitisConditions: string;
  id: string;
  updatedAt: string;
  userID: string;
};

type TypeParams = {
  page?: number;
  limit?: number;
  search?: string | null;
};

const formatDataJson = (data): TypeJsonFormat[] => {
  return data.map((item: ListData) => {
    return {
      id: item.id,
      CPITN: item?.CPITN,
      countTeeth: item?.countTeeth,
      countTeethLoose: item?.countTeethLoose,
      createdAt: item?.createdAt,
      updatedAt: item?.updatedAt,
      deletedAt: item?.deletedAt,
      debrisIndex: item?.debrisIndex,
      gingivitisConditions: item?.gingivitisConditions == true ? 'YA' : 'TIDAK',
      userID: item?.userID,
      user: item?.user,
    };
  });
};

export default function ControlDiabetesTable({ data = [] }: { data: any[] }) {
  const [pageSize, setPageSize] = useState(10);
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [role] = useState(Cookies.get('role'));

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const getData = (filter: TypeParams) => {
    try {
      setLoading(true);
      httpRequest({
        url: '/dental-health',
        method: 'get',
        params: {
          userID: role == 'user' ? session['user']['idUser'] : null,
          ...filter,
        },
      })
        .then((response) => {
          setRows(formatDataJson(response?.data?.data?.results?.data?.rows));
          setPageSize(response?.data?.data?.results?.data?.limit);
          setPage(response?.data?.data?.results?.data?.page);
          setCount(response?.data?.data?.results?.data?.count);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteData = (id: string) => {
    try {
      httpRequest({
        method: 'delete',
        url: '/dental-health',
        params: {
          id,
        },
      })
        .then((response) => {
          console.log(response);
          toast.success(<Text as="b">Data berhasil dihapus</Text>);
          getData({});
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDeleteItem = useCallback((id: string) => {
    deleteData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    isLoading,
    isFiltered,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    filters,
    updateFilter,
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    selectedRowKeys,
    setSelectedRowKeys,
    handleRowSelect,
    handleSelectAll,
    handleDelete,
    handleReset,
  } = useTable(data, pageSize, filterState);

  const columns = useMemo(
    () =>
      getColumnsDentalHealth({
        data: rows,
        sortConfig,
        checkedItems: selectedRowKeys,
        onHeaderCellClick,
        onDeleteItem,
        onChecked: handleRowSelect,
        handleSelectAll,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      selectedRowKeys,
      onHeaderCellClick,
      sortConfig.key,
      sortConfig.direction,
      onDeleteItem,
      handleRowSelect,
      handleSelectAll,
    ]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);

  return (
    <>
      <ControlledTable
        variant="modern"
        isLoading={loading}
        showLoadingText={true}
        data={rows}
        // @ts-ignore
        columns={
          Cookies.get('role') == 'doctor'
            ? visibleColumns
            : visibleColumns.filter((el) => el.key != 'userID')
        }
        paginatorOptions={{
          pageSize,
          setPageSize: (pageSize: number) => {
            getData({ page: 1, limit: pageSize });
          },
          total: count,
          current: page,
          onChange: (page: number) => {
            getData({ page: page });
          },
        }}
        filterOptions={{
          searchTerm,
          onSearchClear: () => {
            handleSearch('');
            getData({});
          },
          onSearchChange: (event) => {
            handleSearch(event.target.value);
            setTimeout(() => {
              getData({ search: event.target.value, page: 1, limit: 10 });
            }, 1500);
          },
          hasSearched: isFiltered,
          hideIndex: 1,
          columns,
          checkedColumns,
          setCheckedColumns,
          enableDrawerFilter: true,
        }}
        tableFooter={
          <TableFooter
            checkedItems={selectedRowKeys}
            handleDelete={(ids: string[]) => {
              setSelectedRowKeys([]);
              handleDelete(ids);
            }}
          >
            <Button size="sm" className="dark:bg-gray-300 dark:text-gray-800">
              Download {selectedRowKeys.length}{' '}
              {selectedRowKeys.length > 1 ? 'Products' : 'Product'}
            </Button>
          </TableFooter>
        }
        className="overflow-hidden rounded-md border border-gray-200 text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
      />
    </>
  );
}
