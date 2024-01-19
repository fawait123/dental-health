import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import dynamic from 'next/dynamic';
import SelectLoader from '@/components/loader/select-loader';
import { NativeSelect, Password, Textarea } from 'rizzui';
import { useCallback, useEffect, useState } from 'react';
import UploadFile from './upload';
import type { FileWithPath } from '@uploadthing/react';
const Select = dynamic(() => import('@/components/ui/select'), {
  ssr: false,
  loading: () => <SelectLoader />,
});

export default function DentalHealthSummary({
  className,
  slug,
}: {
  className?: string;
  slug?: string;
}) {
  const {
    register,
    control,
    getValues,
    setValue,
    unregister,
    formState: { errors },
  } = useFormContext();

  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFiles([
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
      const reader = new FileReader();
      reader.onloadend = () => {
        // Use a regex to remove data url part
        const base64String = reader.result;

        setValue('photo', base64String);
        // Logs wL2dvYWwgbW9yZ...
      };
      reader.readAsDataURL(acceptedFiles[0]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <FormGroup
      title="Form"
      description="Tambah Data Pengguna Disini"
      className={cn(className)}
    >
      <Input
        type="text"
        size="lg"
        label="Nama Pengguna"
        placeholder="Isi nama anda"
        className="col-span-2 [&>label>span]:font-medium"
        color="info"
        inputClassName="text-sm"
        {...register('name')}
        error={errors.name?.message as string}
      />
      <Input
        type="email"
        size="lg"
        label="Email"
        className="col-span-2 [&>label>span]:font-medium"
        inputClassName="text-sm"
        color="info"
        placeholder="Isi email anda"
        {...register('email')}
        error={errors.email?.message as string}
      />
      <Input
        type="text"
        size="lg"
        label="Username"
        className="col-span-2 [&>label>span]:font-medium"
        inputClassName="text-sm"
        color="info"
        placeholder="Isi username anda"
        {...register('username')}
        error={errors.username?.message as string}
      />
      <Input
        type="text"
        size="lg"
        label="Nomor HP"
        className="col-span-2 [&>label>span]:font-medium"
        inputClassName="text-sm"
        color="info"
        placeholder="Isi nomor hp anda"
        {...register('phone')}
        error={errors.phone?.message as string}
      />
      <NativeSelect
        {...register('gender')}
        error={errors.gender?.message as string}
        className="col-span-2 [&>label>span]:font-medium"
        label="Jenis Kelamin"
        options={[
          {
            value: '',
            label: 'Select',
          },
          {
            value: 'L',
            label: 'Laki Laki',
          },
          {
            value: 'P',
            label: 'Perempuan',
          },
        ]}
      />
      <Input
        type="text"
        size="lg"
        label="Tempat Lahir"
        className="col-span-2 [&>label>span]:font-medium"
        inputClassName="text-sm"
        color="info"
        placeholder="Isi tempat lahir anda"
        {...register('placebirth')}
        error={errors.placebirth?.message as string}
      />
      <Input
        type="date"
        size="lg"
        label="Tanggal Lahir"
        className="col-span-2 [&>label>span]:font-medium"
        inputClassName="text-sm"
        color="info"
        placeholder="Isi tanggal lahir anda"
        {...register('birthdate')}
        error={errors.birthdate?.message as string}
      />
      <Textarea
        error={errors.address?.message as string}
        placeholder="Isi alamat anda"
        {...register('address')}
        label="Alamat"
        className="col-span-2 [&>label>span]:font-medium"
      />
      {!slug ? (
        <>
          <Password
            label="Password"
            placeholder="Isi password anda"
            size="lg"
            className="[&>label>span]:font-medium"
            color="info"
            inputClassName="text-sm"
            {...register('password')}
            error={errors.password?.message as string}
          />
          <Password
            label="Konfirmasi Password"
            placeholder="Konfirmasi password anda"
            size="lg"
            className="[&>label>span]:font-medium"
            color="info"
            inputClassName="text-sm"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message as string}
          />
        </>
      ) : null}
      <NativeSelect
        {...register('role')}
        error={errors.role?.message as string}
        className="col-span-2 [&>label>span]:font-medium"
        label="Role"
        options={[
          {
            value: '',
            label: 'Select',
          },
          {
            value: 'admin',
            label: 'Admin',
          },
          {
            value: 'doctor',
            label: 'Tenaga Kesehatan',
          },
          {
            value: 'user',
            label: 'User',
          },
        ]}
      />
      <div className="@3xl:col-span-2">
        <UploadFile
          name="photo"
          getValues={getValues}
          setValue={setValue}
          onDrop={onDrop}
          files={files}
          setFiles={setFiles}
          error={errors?.photo?.message as string}
        />
      </div>
    </FormGroup>
  );
}
