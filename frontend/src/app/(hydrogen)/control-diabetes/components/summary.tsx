import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import { Checkbox, CheckboxGroup, NativeSelect, Radio, Select } from 'rizzui';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import httpRequest from '@/config/httpRequest';

export default function ControlDiabetesSummary({
  className,
  slug
}: {
  className?: string;
  slug?:string
}) {
  const {
    register,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  const {userID} = getValues()
  console.log(getValues(), 'userID')
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
          value={userID?userID:null}
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
        type="date"
        label="Tanggal"
        className="w-full"
        placeholder="Tanggal"
        {...register('date')}
        error={errors.date?.message as string}
      />
      <NativeSelect
        className="col-span-1 [&>label>span]:font-medium"
        label="Jenis Pemeriksaan"
        {...register('types_of_checks')}
        error={errors.types_of_checks?.message as string}
        options={[
          {
            label: 'Pilih',
            value: '',
          },
          {
            label: 'Pemeriksaan Gula Darah Sewaktu',
            value: 'pemeriksaan gula darah sewaktu',
          },
          {
            label: 'Pemeriksaan Gula Darah Puasa',
            value: 'pemeriksaan gula darah puasa',
          },
        ]}
      />
      <Input
        type="number"
        label="Kadar Gula Darah"
        className="w-full"
        placeholder="Kadar Gula Darah"
        {...register('bloodSugarPressure')}
        error={errors.bloodSugarPressure?.message as string}
      />
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
      <Input
        type="text"
        label="Pemeriksaan HbA1C"
        className="w-full"
        placeholder="Pemeriksaan HbA1C"
        {...register('checkhba1c')}
        error={errors.checkhba1c?.message as string}
      />
      <div className="col-span-1">
        <label className="font-medium">Minum Obat Diabetes Melitus</label>
        <div className="mt-3 flex justify-between">
          {[
            { label: 'Pagi', value: 'pagi' },
            { label: 'Siang', value: 'siang' },
            { label: 'Malam', value: 'malam' },
            { label: 'Tidak Minum Obat', value: 'tidak minum obat' },
          ].map((item, index) => (
            <Checkbox
              {...register('controlDrugConsumption')}
              error={errors.controlDrugConsumption?.message as string}
              key={index}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </div>
      <NativeSelect
        className="col-span-1 [&>label>span]:font-medium"
        label="Aktifitas Fisik Dalam Sehari"
        {...register('physicalActivity')}
        error={errors.physicalActivity?.message as string}
        options={[
          {
            label: 'Pilih',
            value: '',
          },
          {
            label: 'Jalan Santai',
            value: 'jalan santai',
          },
          {
            label: 'Jalan Cepat',
            value: 'jalan cepat',
          },
          {
            label: 'Senam',
            value: 'senam',
          },
          {
            label: 'Bersepeda',
            value: 'bersepeda',
          },
          {
            label: 'Olahraga',
            value: 'olahraga',
          },
          {
            label: 'Lainnya',
            value: 'lainnya',
          },
        ]}
      />
    </FormGroup>
  );
}
