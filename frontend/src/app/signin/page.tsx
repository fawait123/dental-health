import SignInForm from './sign-in-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import Image from 'next/image';
import UnderlineShape from '@/components/shape/underline';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Sign In'),
};

export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
          Selamat Datang{' '}
          <span className="relative inline-block">
            Masuk untuk
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36" />
          </span>{' '}
          melanjutkan.
        </>
      }
      description="Masuk untuk membuat sesi anda."
      isSocialLoginActive={true}
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}
