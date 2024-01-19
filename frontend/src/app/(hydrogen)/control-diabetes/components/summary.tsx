import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import { Checkbox, NativeSelect, Radio } from 'rizzui';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import httpRequest from '@/config/httpRequest';

export default function ControlDiabetesSummary({
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
        url: '/user/all',
        params: {
          role: 'user',
        },
      })
        .then((response) => {
          const result = response?.data?.data?.results?.data as [];
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
        label="Kadar Gula Darah"
        className="w-full"
        placeholder="Kadar Gula Darah"
        {...register('bloodSugarPressure')}
        error={errors.bloodSugarPressure?.message as string}
      />
      <br />
      <Input
        type="number"
        label="Systole"
        placeholder="Systole"
        {...register('systole')}
        error={errors.systole?.message as string}
      />
      <Input
        type="number"
        label="Diastole"
        placeholder="Diastole"
        {...register('diastole')}
        error={errors.diastole?.message as string}
      />
      <div className="block">
        <label className="mb-2 block font-medium">Kontrol Konsumsi Obat</label>
        <div className="flex w-full justify-between">
          <Checkbox
            className="col-span-1"
            label="Pagi"
            color="primary"
            value={'morning'}
            variant="flat"
            {...register('controlDrugConsumption')}
            error={errors.controlDrugConsumption?.message as string}
          />
          <Checkbox
            className="col-span-1"
            label="Siang"
            color="primary"
            value={'afternoon'}
            variant="flat"
            {...register('controlDrugConsumption')}
            error={errors.controlDrugConsumption?.message as string}
          />
          <Checkbox
            className="col-span-1"
            label="Malam"
            value={'night'}
            color="primary"
            variant="flat"
            {...register('controlDrugConsumption')}
            error={errors.controlDrugConsumption?.message as string}
          />
        </div>
      </div>
      <br />
      <div className="w-full">
        <label className="mb-2 block font-medium">
          Aktifitas Fisik Dalam Sehari
        </label>
        <div className="flex w-full justify-between">
          <Radio
            className="col-span-1"
            label="YA"
            value={'YES'}
            color="primary"
            variant="flat"
            {...register('physicalActivity')}
            error={errors.physicalActivity?.message as string}
          />

          <Radio
            className="col-span-1"
            label="TIDAK"
            value={'NO'}
            color="primary"
            variant="flat"
            {...register('physicalActivity')}
            error={errors.physicalActivity?.message as string}
          />
        </div>
      </div>
    </FormGroup>
  );
}
