import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import dynamic from 'next/dynamic';
import SelectLoader from '@/components/loader/select-loader';
import { NativeSelect, Radio } from 'rizzui';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import httpRequest from '@/config/httpRequest';
const Select = dynamic(() => import('@/components/ui/select'), {
  ssr: false,
  loading: () => <SelectLoader />,
});

export default function DentalHealthSummary({
  className,
}: {
  className?: string;
}) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const [users, setUsers] = useState([]);

  const role = Cookies.get('role') ?? '';

  const getData = (search) => {
    try {
      httpRequest({
        method: 'get',
        url: '/user',
        params: {
          search,
          page: 1,
          limit: 1000,
        },
      })
        .then((response) => {
          const result = response?.data?.data?.results?.data?.rows as [];
          const filter = result
            .filter((el) => el['role'] == 'user')
            .map((item) => {
              return {
                label: item['name'],
                value: item['id'],
              };
            });
          setUsers(filter);
        })
        .catch((er) => {
          console.log(er);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (role == 'doctor') {
      getData('hans');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormGroup
      title="Summary"
      description="Create your control diabetes melitus here"
      className={cn(className)}
    >
      {role == 'doctor' ? (
        <NativeSelect
          className="col-span-2 [&>label>span]:font-medium"
          label="Pilih Pasien"
          {...register('userID')}
          error={errors.userID?.message as string}
          options={[
            {
              label: 'Pilih',
              value: '',
            },
            ...users,
          ]}
        />
      ) : null}
      <Input
        type="number"
        label="Debris Index"
        placeholder="Debris Index"
        {...register('debrisindex')}
        error={errors.debrisindex?.message as string}
      />
      <Input
        type="number"
        label="CPITN"
        placeholder="CPITN"
        {...register('CPITN')}
        error={errors.CPITN?.message as string}
      />
      <Input
        type="number"
        label="Jumlah Gigi"
        placeholder="Jumlah Gigi"
        {...register('countTeeth')}
        error={errors.countTeeth?.message as string}
      />
      <Input
        type="number"
        label="Jumlah Gigi Goyang"
        placeholder="Jumlah Gigi Goyang"
        {...register('countTeethLoose')}
        error={errors.countTeethLoose?.message as string}
      />
      <div className="block">
        <label className="mb-2 block font-medium">Kondisi Radang Gusi</label>
        <div className="flex w-full justify-between">
          <Radio
            className="col-span-1"
            label="YA"
            color="primary"
            variant="flat"
            value={'YA'}
            {...register('gingivitisConditions')}
            error={errors.gingivitisConditions?.message as string}
          />
          <Radio
            className="col-span-1"
            label="TIDAK"
            color="primary"
            variant="flat"
            {...register('gingivitisConditions')}
            error={errors.gingivitisConditions?.message as string}
            value={'TIDAK'}
          />
        </div>
      </div>
    </FormGroup>
  );
}
