'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { PiArrowRightBold } from 'react-icons/pi';
import { Password } from '@/components/ui/password';
// import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Form } from '@/components/ui/form';
import { routes } from '@/config/routes';
import { SignUpSchema, signUpSchema } from '@/utils/validators/signup.schema';
import { NativeSelect, Textarea } from 'rizzui';
import httpRequest from '@/config/httpRequest';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  isAgreed: false,
};

export default function SignUpForm() {
  const navigation = useRouter();
  const [reset, setReset] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    try {
      setLoading(true);
      httpRequest({
        url: '/auth/register',
        method: 'post',
        data: data,
      })
        .then((response) => {
          setReset({ ...initialValues, isAgreed: false });
          setLoading(false);
          toast.success(<Text as="b">Registrasi berhasil</Text>);
          navigation.push('/signin');
        })
        .catch((err) => {
          setLoading(false);
          toast.error(<Text as="b">{err?.response?.data?.message}</Text>);
        });
    } catch (error) {
      setLoading(false);
      toast.error(<Text as="b">{error?.response?.data?.message}</Text>);
    }
  };

  return (
    <>
      <Form<SignUpSchema>
        validationSchema={signUpSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
            <Input
              type="text"
              size="lg"
              label="Nama"
              placeholder="Masukan nama anda"
              className="col-span-2 [&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('name')}
              error={errors.name?.message}
            />
            <Input
              type="email"
              size="lg"
              label="Email"
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Masukan email anda"
              {...register('email')}
              error={errors.email?.message}
            />
            <Input
              type="text"
              size="lg"
              label="Username"
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Masukan username anda"
              {...register('username')}
              error={errors.username?.message}
            />
            <Input
              type="text"
              size="lg"
              label="Nomor HP"
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Masukan Nomor HP anda"
              {...register('phone')}
              error={errors.phone?.message}
            />
            <NativeSelect
              {...register('gender')}
              error={errors.gender?.message}
              className="col-span-2 [&>label>span]:font-medium"
              label="Pilih Jenis Kelamin"
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
              placeholder="Masukan tempat lahir anda"
              {...register('placebirth')}
              error={errors.placebirth?.message}
            />
            <Input
              type="date"
              size="lg"
              label="Tanggal Lahir"
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Masukan tanggal lahir anda"
              {...register('birthdate')}
              error={errors.birthdate?.message}
            />
            <Textarea
              error={errors.address?.message}
              placeholder="Alamat"
              {...register('address')}
              label="Masukan alamat anda"
              className="col-span-2 [&>label>span]:font-medium"
            />
            <Password
              label="Password"
              placeholder="Masukan password anda"
              size="lg"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('password')}
              error={errors.password?.message}
            />
            <Password
              label="Konfirmasi Password"
              placeholder="Konfirmasi password anda"
              size="lg"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />

            <Button
              size="lg"
              color="info"
              type="submit"
              className="col-span-2 mt-2"
              isLoading={loading}
            >
              <span>Daftar</span>{' '}
              <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" />
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
        Sudah punya akun?{' '}
        <Link
          href={routes.signIn}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          Masuk
        </Link>
      </Text>
    </>
  );
}
