import { routes } from '@/config/routes';
import PersonalInfoView from '@/app/shared/account-settings/personal-info';
import PageHeader from '@/app/shared/page-header';
import ProfileSettingsNav from '@/app/shared/account-settings/navigation';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Pengaturan Akun'),
};

const pageHeader = {
  title: 'Profile Setting',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Profile Setting',
    },
    {
      href: routes.forms.profileSettings,
      name: 'index',
    },
  ],
};

export default function ProfileSettingsFormPage() {
  return <PersonalInfoView />;
}
