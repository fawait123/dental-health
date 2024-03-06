'use client';

import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import { SubmitHandler, Controller } from 'react-hook-form';
import { PiEnvelopeSimple } from 'react-icons/pi';
import { Form } from '@/components/ui/form';
import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import Spinner from '@/components/ui/spinner';
import FormGroup from '@/app/shared/form-group';
import FormFooter from '@/components/form-footer';
import AvatarUpload from '@/components/ui/file-upload/avatar-upload';
import { signIn, useSession } from 'next-auth/react';
import { ProfileSchemaInput, profileSchema } from './personal-info-schema';
import UploadIcon from '@/components/shape/upload';
import UploadFIle from '@/app/(hydrogen)/forms/profile-settings/UploadFile';
import { useEffect, useState } from 'react';
import httpRequest from '@/config/httpRequest';

const gender = [
  {
    name: 'Laki Laki',
    value: 'L',
  },
  {
    name: 'Perempuan',
    value: 'P',
  },
];

const SelectBox = dynamic(() => import('@/components/ui/select'), {
  ssr: false,
  loading: () => (
    <div className="grid h-10 place-content-center">
      <Spinner />
    </div>
  ),
});
const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
});

export default function PersonalInfoView() {
  const [photo, setPhoto] = useState(null);
  const onSubmit: SubmitHandler<ProfileSchemaInput> = (data) => {
    try {
      httpRequest({
        method: 'put',
        url: '/user',
        data: {
          ...data,
          photo: photo,
        },
        params: {
          id: session.user['idUser'],
        },
      })
        .then((response) => {
          console.log(response?.data?.data?.results?.data, 'data');
          const credentials = response?.data?.data?.results?.data;
          toast.success(<Text as="b">Profile berhasil diperbarui</Text>);
          localStorage.setItem('photo', photo);
          signIn('credentials', {
            ...credentials,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPhoto(localStorage.getItem('photo'));
  }, []);

  const handleImage = (image) => {
    console.log(image, 'im');
  };

  const { data: session, update } = useSession();

  return (
    <Form<ProfileSchemaInput>
      validationSchema={profileSchema}
      onSubmit={onSubmit}
      className="@container"
      useFormProps={{
        mode: 'onChange',
        defaultValues: {
          address: session.user['address'] || '',
          email: session.user['email'] || '',
          birthdate: session.user['birthdate'] || '',
          gender: session.user['gender'] || '',
          image: session.user['image'] || '',
          name: session.user['name'] || '',
          phone: session.user['phone'] || '',
          placebirth: session.user['placebirth'] || '',
          username: session.user['username'] || '',
        },
      }}
    >
      {({ register, control, setValue, getValues, formState: { errors } }) => {
        return (
          <>
            <FormGroup
              title="Informasi Akun"
              description="Formulir untuk mengubah data akun anda"
              className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
            />

            <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
              <FormGroup
                title="Nama"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  className="col-span-full"
                  prefix={
                    <PiEnvelopeSimple className="h-6 w-6 text-gray-500" />
                  }
                  type="text"
                  placeholder="Nama"
                  {...register('name')}
                  error={errors.name?.message}
                />
              </FormGroup>
              <FormGroup
                title="Username"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  className="col-span-full"
                  prefix={
                    <PiEnvelopeSimple className="h-6 w-6 text-gray-500" />
                  }
                  type="text"
                  placeholder="Username"
                  {...register('username')}
                  error={errors.username?.message}
                />
              </FormGroup>

              <FormGroup
                title="Email Address"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  className="col-span-full"
                  prefix={
                    <PiEnvelopeSimple className="h-6 w-6 text-gray-500" />
                  }
                  type="email"
                  placeholder="georgia.young@example.com"
                  {...register('email')}
                  error={errors.email?.message}
                />
              </FormGroup>
              <FormGroup
                title="Tempat Lahir"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  className="col-span-full"
                  prefix={
                    <PiEnvelopeSimple className="h-6 w-6 text-gray-500" />
                  }
                  type="text"
                  placeholder="Tempat Lahir"
                  {...register('placebirth')}
                  error={errors.placebirth?.message}
                />
              </FormGroup>
              <FormGroup
                title="Tanggal Lahir"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  className="col-span-full"
                  prefix={
                    <PiEnvelopeSimple className="h-6 w-6 text-gray-500" />
                  }
                  type="date"
                  placeholder="Tanggal Lahir"
                  {...register('birthdate')}
                  error={errors.birthdate?.message}
                />
              </FormGroup>
              <FormGroup
                title="No HP"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  className="col-span-full"
                  prefix={
                    <PiEnvelopeSimple className="h-6 w-6 text-gray-500" />
                  }
                  type="number"
                  placeholder="NO HP"
                  {...register('phone')}
                  error={errors.phone?.message}
                />
              </FormGroup>

              <FormGroup
                title="Foto Profile"
                description="This will be displayed on your profile."
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <div className="flex flex-col gap-6 @container @3xl:col-span-2">
                  <UploadFIle setValue={setPhoto} getValue={photo} />
                </div>
              </FormGroup>

              <FormGroup
                title="Jenis Kelamin"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Controller
                  control={control}
                  name="gender"
                  render={({ field: { value, onChange } }) => (
                    <SelectBox
                      placeholder="Pilih Jenis Kelamin"
                      options={gender}
                      onChange={onChange}
                      value={value}
                      className="col-span-full"
                      getOptionValue={(option) => option.value}
                      displayValue={(selected) =>
                        gender?.find((r) => r.value === selected)?.name ?? ''
                      }
                      error={errors?.gender?.message as string}
                    />
                  )}
                />
              </FormGroup>

              <FormGroup
                title="Alamat"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Controller
                  control={control}
                  name="address"
                  render={({ field: { onChange, value } }) => (
                    <QuillEditor
                      value={value}
                      error={errors?.address?.message as string}
                      onChange={onChange}
                      className="@3xl:col-span-2 [&>.ql-container_.ql-editor]:min-h-[100px]"
                      labelClassName="font-medium text-gray-700 dark:text-gray-600 mb-1.5"
                    />
                  )}
                />
              </FormGroup>
            </div>
            <FormFooter
              // isLoading={isLoading}
              altBtnText="Cancel"
              submitBtnText="Save"
            />
          </>
        );
      }}
    </Form>
  );
}
