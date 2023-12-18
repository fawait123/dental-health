'use client';

import StorageReport from '@/app/shared/file/dashboard/storage-report';
import FileStats from '@/app/shared/file/dashboard/file-stats';
import StorageSummary from '@/app/shared/file/dashboard/storage-summary';
import ActivityReport from '@/app/shared/file/dashboard/activity-report';
import httpRequest from '@/config/httpRequest';
import { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { ActionIcon, Button, Modal, NativeSelect, Text } from 'rizzui';
import { IoClose } from 'react-icons/io5';

function toDataSelect(data: any) {
  return data.map((item) => {
    return {
      label: item?.name,
      value: item?.id,
    };
  });
}

export default function FileDashboard() {
  const [data, setData] = useState({});
  const [grapich, setGrapich] = useState([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [modalState, setModalState] = useState(false);
  const getData = () => {
    try {
      setLoading(true);
      httpRequest({
        url: '/dashboard/card',
        method: 'get',
      })
        .then((response) => {
          setData(response?.data?.data?.results?.data);
          setLoading(false);
        })
        .catch((er) => {
          console.log(er);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getChart = () => {
    try {
      httpRequest({
        url: '/dashboard/grapich',
        method: 'get',
      })
        .then((response) => {
          setGrapich(response?.data?.data?.results?.data);
        })
        .catch((er) => {
          console.log(er);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = () => {
    try {
      httpRequest({
        url: '/user/all',
        method: 'get',
        params: {
          role: 'user',
        },
      })
        .then((response) => {
          console.log(
            'users',
            toDataSelect(response?.data?.data?.results?.data)
          );
          setUsers(toDataSelect(response?.data?.data?.results?.data));
        })
        .catch((er) => {
          console.log(er);
        });
    } catch (error) {}
  };

  useEffect(() => {
    getData();
    getChart();
    getUser();
  }, []);

  return (
    <div className="mt-2 @container">
      <FileStats data={data} className="mb-5 2xl:mb-8" />
      <div className="mb-6 grid grid-cols-1 gap-6 @4xl:grid-cols-12 2xl:mb-8 2xl:gap-8">
        <StorageReport
          rows={grapich}
          className="@container @4xl:col-span-8 @[96.937rem]:col-span-9"
        />
        <StorageSummary
          row={data}
          loading={loading}
          className="@4xl:col-span-4 @[96.937rem]:col-span-3"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 @container lg:grid-cols-12 2xl:gap-8 ">
        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-12 2xl:gap-12 3xl:col-span-12">
          <ActivityReport rows={grapich} />
        </div>
      </div>

      <div
        className="sticky bottom-96 right-0 float-right flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-sm bg-gray-600 shadow backdrop-blur-md dark:bg-gray-700 md:h-9 md:w-9"
        onClick={() => setModalState(true)}
      >
        <FaFilter className="h-[18px] w-auto text-gray-50" />
      </div>

      <Modal isOpen={modalState} onClose={() => setModalState(false)}>
        <div className="m-auto px-7 pb-8 pt-6">
          <div className="mb-7 flex items-center justify-between">
            <Text as="b">Filter Chart</Text>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState(false)}
            >
              <IoClose className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 [&_label>span]:font-medium">
            <NativeSelect
              className="col-span-2"
              label="Pilih Pasien"
              options={users}
            />
            <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2"
              onClick={() => setModalState(false)}
            >
              TERAPKAN
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
