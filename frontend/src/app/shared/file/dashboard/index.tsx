'use client';

import StorageReport from '@/app/shared/file/dashboard/storage-report';
import FileStats from '@/app/shared/file/dashboard/file-stats';
import StorageSummary from '@/app/shared/file/dashboard/storage-summary';
import ActivityReport from '@/app/shared/file/dashboard/activity-report';
import httpRequest from '@/config/httpRequest';
import { useEffect, useState } from 'react';

export default function FileDashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-2 @container">
      <FileStats data={data} className="mb-5 2xl:mb-8" />
      <div className="mb-6 grid grid-cols-1 gap-6 @4xl:grid-cols-12 2xl:mb-8 2xl:gap-8">
        <StorageReport className="@container @4xl:col-span-8 @[96.937rem]:col-span-9" />
        <StorageSummary
          row={data}
          loading={loading}
          className="@4xl:col-span-4 @[96.937rem]:col-span-3"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 @container lg:grid-cols-12 2xl:gap-8 ">
        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-12 2xl:gap-12 3xl:col-span-12">
          <ActivityReport />
        </div>
        {/* 
        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-4 2xl:gap-8 3xl:col-span-3">
          <RecentActivities />
        </div> */}
      </div>
    </div>
  );
}
