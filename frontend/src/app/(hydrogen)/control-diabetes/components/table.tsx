'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTable } from '@/hooks/use-table';
import { useColumn } from '@/hooks/use-column';
import { Button } from '@/components/ui/button';
import ControlledTable from '@/components/controlled-table';
import { getColumnsControlDiabetes } from './columns';
import httpRequest from '@/config/httpRequest';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { Text } from 'rizzui';
import _ from 'lodash';
import { useSession } from 'next-auth/react';
const TableFooter = dynamic(() => import('@/app/shared/table-footer'), {
  ssr: false,
});

const filterState = {
  price: ['', ''],
  createdAt: [null, null],
  status: '',
};

type ParamsType = {
  page?: number;
  limit?: number;
  search?: string | null;
};

export default function ControlDiabetesTable({ data = [] }: { data: any[] }) {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
  const [role] = useState(Cookies.get('role'));
  const { data: session } = useSession();

  const getData = (params: ParamsType) => {
    try {
      setLoading(true);
      httpRequest({
        url: '/control-diabetes',
        method: 'get',
        params: {
          userID: role == 'user' ? session['user']['idUser'] : null,
        },
      })
        .then((response) => {
          setRows(response?.data?.data?.results?.data?.rows);
          setTotal(response?.data?.data?.results?.data?.count);
          setPage(response?.data?.data?.results?.data?.page);
          setPageSize(response?.data?.data?.results?.data?.limit);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const onDeleteData = (id) => {
    httpRequest({
      method: 'delete',
      url: '/control-diabetes',
      params: {
        id,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(<Text as="b">Data successfully deleted</Text>);
        getData({ limit: pageSize });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData({ limit: pageSize });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
      console.log(value);
    },
  });

  const onDeleteItem = useCallback((id: string) => {
    onDeleteData(id);

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
  } = useTable(rows, pageSize, filterState);

  const columns = useMemo(
    () =>
      getColumnsControlDiabetes({
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
          setPageSize: (value: number) => {
            getData({ page: 1, limit: value });
          },
          total: total,
          current: page,
          onChange: (page: number) => {
            getData({ page: page, limit: pageSize });
          },
        }}
        filterOptions={{
          searchTerm: search,
          onSearchClear: () => {
            setSearch(null);
            getData({ page: 1, limit: 10, search: null });
          },
          onSearchChange: (event) => {
            setSearch(event.target.value);
            setTimeout(() => {
              getData({ page: 1, limit: 10, search: event.target.value });
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
