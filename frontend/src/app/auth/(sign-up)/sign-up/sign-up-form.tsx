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
          navigation.push('/signin');
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
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
              label="Name"
              placeholder="Enter your first name"
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
              placeholder="Enter your email"
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
              placeholder="Enter your username"
              {...register('username')}
              error={errors.username?.message}
            />
            <Input
              type="text"
              size="lg"
              label="Phone Number"
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Enter your phone"
              {...register('phone')}
              error={errors.phone?.message}
            />
            <NativeSelect
              {...register('gender')}
              error={errors.gender?.message}
              className="col-span-2 [&>label>span]:font-medium"
              label="Gender"
              options={[
                {
                  value: '',
                  label: 'Select',
                },
                {
                  value: 'L',
                  label: 'Male',
                },
                {
                  value: 'P',
                  label: 'Female',
                },
              ]}
            />
            <Input
              type="text"
              size="lg"
              label="Placebirth"
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Enter your placebirth"
              {...register('placebirth')}
              error={errors.placebirth?.message}
            />
            <Input
              type="date"
              size="lg"
              label="Birthdate"
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Enter your birthdate"
              {...register('birthdate')}
              error={errors.birthdate?.message}
            />
            <Textarea
              error={errors.address?.message}
              placeholder="Address"
              {...register('address')}
              label="Address"
              className="col-span-2 [&>label>span]:font-medium"
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size="lg"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('password')}
              error={errors.password?.message}
            />
            <Password
              label="Confirm Password"
              placeholder="Enter confirm password"
              size="lg"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
            {/* <div className="col-span-2 flex items-start ">
              <Checkbox
                {...register('isAgreed')}
                className="[&>label>span]:font-medium [&>label]:items-start"
                error={errors.isAgreed?.message}
                label={
                  <>
                    By signing up you have agreed to our{' '}
                    <Link
                      href="/"
                      className="font-medium text-blue transition-colors hover:underline"
                    >
                      Terms
                    </Link>{' '}
                    &{' '}
                    <Link
                      href="/"
                      className="font-medium text-blue transition-colors hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </>
                }
              />
            </div> */}
            <Button
              size="lg"
              color="info"
              type="submit"
              className="col-span-2 mt-2"
              isLoading={loading}
            >
              <span>Get Started</span>{' '}
              <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" />
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
        Don’t have an account?{' '}
        <Link
          href={routes.signIn}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          Sign In
        </Link>
      </Text>
    </>
  );
}
