'use client';

import { RefObject, useEffect, useState } from 'react';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Popover } from '@/components/ui/popover';
import { Title } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { useMedia } from '@/hooks/use-media';
import SimpleBar from '@/components/ui/simplebar';
import { PiCheck } from 'react-icons/pi';
import httpRequest from '@/config/httpRequest';
import { useSession } from 'next-auth/react';
import { FaBell } from 'react-icons/fa';
import { Loader, Text } from 'rizzui';
import toast from 'react-hot-toast';
import socketClient from '@/socket/client';

dayjs.extend(relativeTime);

type TypeFormatJson = {
  content: string;
  createdAt: string;
  from: string;
  id: string;
  isRead: boolean;
  title: string;
  to: string;
  updatedAt: string;
};
const toJson = (data: any) => {
  return data.map((item: TypeFormatJson) => {
    return {
      content: item.content,
      createdAt: item.createdAt,
      from: item.from,
      id: item.id,
      isRead: item.isRead,
      title: item.title,
      to: item.to,
      updatedAt: item.updatedAt,
    };
  });
};

function NotificationsList({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { data: session } = useSession();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    try {
      setLoading(true);
      httpRequest({
        method: 'get',
        url: '/notification',
        params: {
          to: session.user['idUser'],
        },
      })
        .then((response) => {
          const result = toJson(response?.data?.data?.results?.data?.rows);
          setRows(result);
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const readAll = (event) => {
    httpRequest({
      method: 'put',
      url: '/notification',
      params: {
        id: rows.map((item) => item.id),
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(<Text as="b">Notifikasi berhasil dibaca</Text>);
        getData();
      })
      .catch((err) => {
        console.log(err);
        toast.error(<Text as="b">terjadi error</Text>);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-[320px] text-left rtl:text-right sm:w-[360px] 2xl:w-[420px]">
      <div className="mb-3 flex items-center justify-between ps-6">
        <Title as="h5">Notifikasi</Title>
        {loading ? null : (
          <Checkbox
            disabled={
              rows.filter((el) => el.isRead == true).length > 0 ||
              rows.length == 0
            }
            onChange={readAll}
            label="Baca Semua"
          />
        )}
      </div>
      <SimpleBar className="max-h-[420px]">
        <div className="grid cursor-pointer grid-cols-1 gap-1 ps-4">
          {loading ? (
            <div className="my-5 flex justify-center">
              <Loader />
            </div>
          ) : rows.length > 0 ? (
            rows.map((item: TypeFormatJson) => (
              <div
                key={item.id}
                className="group grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-md px-2 py-2 pe-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded bg-gray-100/70 p-1 dark:bg-gray-50/50 [&>svg]:h-auto [&>svg]:w-5">
                  <FaBell />
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center">
                  <div className="w-full">
                    <Title
                      as="h6"
                      className="mb-0.5 w-11/12 truncate text-sm font-semibold"
                    >
                      {item.title}
                    </Title>
                    <Text as="p">{item?.content}</Text>
                    <span className="ms-auto whitespace-nowrap pe-8 text-xs text-gray-500">
                      {/* @ts-ignore */}
                      {dayjs(item.createdAt).fromNow(true)}
                    </span>
                  </div>
                  <div className="ms-auto flex-shrink-0">
                    {!item.isRead ? (
                      <Badge
                        renderAsDot
                        size="lg"
                        color="primary"
                        className="scale-90"
                      />
                    ) : (
                      <span className="inline-block rounded-full bg-gray-100 p-0.5 dark:bg-gray-50">
                        <PiCheck className="h-auto w-[9px]" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Text className="pointer-events-none">Tidak ada notifikasi</Text>
          )}
        </div>
      </SimpleBar>
      {/* <Link
        href={'#'}
        onClick={() => setIsOpen(false)}
        className="-me-6 block px-6 pb-0.5 pt-3 text-center hover:underline"
      >
        View All Activity
      </Link> */}
    </div>
  );
}

export default function NotificationDropdown({
  children,
}: {
  children: JSX.Element & { ref?: RefObject<any> };
}) {
  const isMobile = useMedia('(max-width: 480px)', false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      content={() => <NotificationsList setIsOpen={setIsOpen} />}
      shadow="sm"
      placement={isMobile ? 'bottom' : 'bottom-end'}
      className="z-50 px-0 pb-4 pe-6 pt-5 dark:bg-gray-100 [&>svg]:hidden [&>svg]:dark:fill-gray-100 sm:[&>svg]:inline-flex"
    >
      {children}
    </Popover>
  );
}
