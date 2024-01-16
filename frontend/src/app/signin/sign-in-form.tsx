'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { SubmitHandler } from 'react-hook-form';
import { PiArrowRightBold } from 'react-icons/pi';
import { Checkbox } from '@/components/ui/checkbox';
import { Password } from '@/components/ui/password';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form } from '@/components/ui/form';
import { Text } from '@/components/ui/text';
import { routes } from '@/config/routes';
import { loginSchema, LoginSchema } from '@/utils/validators/login.schema';
import httpRequest from '@/config/httpRequest';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const initialValues: LoginSchema = {
  username: '',
  password: '',
  rememberMe: true,
};

export default function SignInForm() {
  //TODO: why we need to reset it here
  const [reset, setReset] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      setLoading(true);
      const response = await httpRequest({
        url: '/auth/login',
        method: 'post',
        data,
      });
      if (response.status == 200) {
        const credentials = response.data?.data?.results?.data;
        localStorage.setItem('photo', credentials?.photo);
        Cookies.set('role', credentials?.role);
        signIn('credentials', {
          ...credentials,
        });
        setReset({ email: '', password: '', isRememberMe: true });
        toast.success(<Text as="b">Login berhasil</Text>);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(<Text as="b">{error?.response?.data?.message}</Text>);
    }
  };

  return (
    <>
      <Form<LoginSchema>
        validationSchema={loginSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
            <Input
              type="text"
              size="lg"
              label="Username atau Email"
              placeholder="Masukan username atau email anda"
              color="info"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('username')}
              error={errors.username?.message}
            />
            <Password
              label="Password"
              placeholder="Masukan password anda"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              {...register('password')}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between pb-2">
              <Checkbox
                {...register('rememberMe')}
                label="Ingat Saya"
                color="info"
                variant="flat"
                className="[&>label>span]:font-medium"
              />
              <Link
                href={routes.auth.forgotPassword1}
                className="h-auto p-0 text-sm font-semibold text-blue underline transition-colors hover:text-gray-900 hover:no-underline"
              >
                Lupa Password?
              </Link>
            </div>
            <Button
              className="w-full"
              type="submit"
              size="lg"
              color="info"
              isLoading={loading}
            >
              <span>Masuk</span>{' '}
              <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" />
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
        Tidak punya akun?{' '}
        <Link
          href={routes.auth.signUp1}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          Daftar Sekarang
        </Link>
      </Text>
    </>
  );
}
