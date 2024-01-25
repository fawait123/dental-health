'use client';

import FileStats from '@/app/shared/file/dashboard/file-stats';
import ActivityReport from '@/app/shared/file/dashboard/activity-report';
import httpRequest from '@/config/httpRequest';
import { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { ActionIcon, Button, Modal, NativeSelect, Text } from 'rizzui';
import { IoClose } from 'react-icons/io5';
import { useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import { DatePicker } from '@/components/ui/datepicker';
import moment from 'moment';

function toDataSelect(data: any) {
  return data.map((item) => {
    return {
      label: item?.name,
      value: item?.id,
    };
  });
}

type TypeDataKey = {
  name?: string;
  slug?: string;
  bgcolor?: string;
  color?: string;
};

const dataKeyControlDiabetes: TypeDataKey[] = [
  {
    name: 'Kadar Gula Darah',
    slug: 'kadarguladarah',
    bgcolor: 'bg-[#8884d8]',
    color: '#8884d8',
  },
  {
    name: 'Systole',
    slug: 'systole',
    bgcolor: 'bg-[#52D3D8]',
    color: '#52D3D8',
  },
  {
    name: 'Diastole',
    slug: 'diastole',
    bgcolor: 'bg-[#FE7A36]',
    color: '#FE7A36',
  },
];

const dataKeyDentalHealth: TypeDataKey[] = [
  {
    name: 'Debris Index',
    slug: 'debrisindex',
    bgcolor: 'bg-[#8884d8]',
    color: '#8884d8',
  },
  {
    name: 'CPITN',
    slug: 'cpitn',
    bgcolor: 'bg-[#52D3D8]',
    color: '#52D3D8',
  },
  // {
  //   name: 'Jumlah Gigi',
  //   slug: 'jumlahgigi',
  //   bgcolor: 'bg-[#FE7A36]',
  //   color: '#FE7A36',
  // },
  // {
  //   name: 'Jumlah Gigi Goyang',
  //   slug: 'jumlahgigigoyang',
  //   bgcolor: 'bg-[#3872FA]',
  //   color: '#3872FA',
  // },
  // {
  //   name: 'Jumlah Gigi Berlubang',
  //   slug: 'jumlahgigiberlubang',
  //   bgcolor: 'bg-[#000000]',
  //   color: '#000000',
  // },
];

export default function FileDashboard() {
  const [data, setData] = useState({});
  const [grapich, setGrapich] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);
  const [users, setUsers] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [filter, setFilter] = useState(null);
  const [role] = useState(Cookies.get('role'));
  const { data: session } = useSession();
  const [datepiker, setDatePiker] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

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
      const payload = {
        startDate: moment(datepiker.startDate).format('YYYY-MM-DD'),
        endDate: moment(datepiker.endDate).format('YYYY-MM-DD'),
        userID: filter == undefined ? null : filter,
      };
      httpRequest({
        url: '/dashboard/chart',
        method: 'get',
        params: payload,
      })
        .then((response) => {
          console.log('chart', response?.data?.data);
          setGrapich(response?.data?.data?.results);
        })
        .catch((er) => {
          console.log(er);
        });
    } catch (error) {
      console.log(error);
    }
  };
  console.log('role', role);
  const getUser = async () => {
    try {
      await httpRequest({
        url: '/user/all',
        method: 'get',
        params: {
          role: 'user',
          id: role == 'user' ? session['user']['idUser'] : null,
        },
      })
        .then((response) => {
          const result = response?.data?.data?.results?.data;
          setUsers(toDataSelect(result));
          console.log(users);
          setFilter(result[0]?.id);
          setName(result[0]?.name);
        })
        .catch((er) => {
          console.log(er);
        });
    } catch (error) {}
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    console.log(start, end);
    setDatePiker({
      startDate: start,
      endDate: end,
    });
  };

  useEffect(() => {
    getUser();
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  return (
    <div className="mt-2 @container">
      <FileStats data={data} className="mb-5 2xl:mb-8" />
      <div className="mb-4 grid grid-cols-1 gap-6 @container lg:grid-cols-12 2xl:gap-8">
        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-12 2xl:gap-12 3xl:col-span-12">
          <ActivityReport
            desciption={`Data Pasien ${name}`}
            dataKey={dataKeyDentalHealth}
            rows={grapich.map((item) => {
              return {
                name: item?.name,
                ...item?.dentalHealth,
              };
            })}
            title="Diagram Garis Data Pemeriksaan Kesehatan Gigi dan Mulut"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 @container lg:grid-cols-12 2xl:gap-8 ">
        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-12 2xl:gap-12 3xl:col-span-12">
          <ActivityReport
            desciption={`Data Pasien ${name}`}
            dataKey={dataKeyControlDiabetes}
            rows={grapich.map((item) => {
              return {
                name: item?.name,
                ...item?.controlDiabetes,
              };
            })}
            title="Diagram Garis Data Kontrol Diabetes"
          />
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
              onChange={(event) => {
                setFilter(event.target.value);
                setName(
                  users.find((el) => el.value == event.target.value)?.label
                );
              }}
            />
            <DatePicker
              containerClassName="col-span-2"
              startDate={datepiker?.startDate}
              endDate={datepiker.endDate}
              onChange={onChange}
              selectsRange={true}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2"
              onClick={() => {
                getChart();
                setModalState(false);
              }}
            >
              TERAPKAN
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
