'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Password } from '@/components/ui/password';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Text } from '@/components/ui/text';
import { routes } from '@/config/routes';
import {
  resetPasswordSchema,
  ResetPasswordSchema,
} from '@/utils/validators/reset-password.schema';
import httpRequest from '@/config/httpRequest';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export default function ForgetPasswordForm() {
  const [reset, setReset] = useState({});
  const [loading, setLoading] = useState(false);
  const navigation = useRouter();

  const onSubmit: SubmitHandler<ResetPasswordSchema> = async (data) => {
    try {
      setLoading(true);
      const response = await httpRequest({
        url: '/forgot-password',
        method: 'post',
        data,
      });
      if (response.status == 200) {
        const credentials = response.data?.data?.results?.data;
        localStorage.setItem('photo', credentials?.photo);
        setReset({ email: '', password: '', isRememberMe: true });
        toast.success(<Text as="b">Berhasil mengubah password</Text>);
        navigation.push('/signin');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(<Text as="b">{error?.response?.data?.message}</Text>);
    }
  };

  return (
    <>
      <Form<ResetPasswordSchema>
        validationSchema={resetPasswordSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          defaultValues: initialValues,
        }}
        className="pt-1.5"
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-6">
            <Input
              type="email"
              size="lg"
              label="Email"
              placeholder="Masukan email anda"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('email')}
              error={errors.email?.message}
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
              className="mt-2 w-full"
              type="submit"
              size="lg"
              color="info"
              isLoading={loading}
            >
              Ubah Password
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 lg:mt-8 lg:text-start xl:text-base">
        Tidak ingin mengubah password?{' '}
        <Link
          href={routes.signIn}
          className="font-bold text-gray-700 transition-colors hover:text-blue"
        >
          Masuk
        </Link>
      </Text>
    </>
  );
}
