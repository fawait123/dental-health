import { routes } from '@/config/routes';
import Cookies from 'js-cookie';

// Note: do not add href in the label object, it is rendering as label

let pageLinks = [
  {
    label: 'HOME',
  },
  {
    name: 'Dashboard',
    href: routes.dashboard,
  },
];

function getMenu(role) {
  switch (true) {
    case role == 'user':
      return [
        {
          label: 'HOME',
        },
        {
          name: 'Dashboard',
          href: routes.dashboard,
        },
        {
          label: 'CORE',
        },
        {
          name: 'Kontrol Diabetes Melitus',
          href: routes.controldiabetes.dashboard,
        },
        {
          name: 'Pemeriksaan Kesehatan Gigi Dan Mulut',
          href: routes.dentalHealt.dashboard,
        },
        {
          name: 'Ceklis Menggosok Gigi',
          href: routes.brushingChecklist.dashboard,
        },
        {
          name: 'Edukasi Kesehatan Gigi',
          href: routes.dentalHealtEducationPage.dashboard,
        },
        {
          name: 'Panduan Penggunaan Aplikasi',
          href: routes.applicationUse.dashboard,
        },
      ];
    case role == 'doctor':
      return [
        {
          label: 'HOME',
        },
        {
          name: 'Dashboard',
          href: routes.dashboard,
        },
        {
          label: 'CORE',
        },
        {
          name: 'Kontrol Diabetes Melitus',
          href: '/doctor' + routes.controldiabetes.dashboard,
        },
        {
          name: 'Pemeriksaan Kesehatan Gigi Dan Mulut',
          href: '/doctor' + routes.dentalHealt.dashboard,
        },
        {
          name: 'Ceklis Menggosok Gigi',
          href: '/doctor' + routes.brushingChecklist.dashboard,
        },
        {
          name: 'Edukasi Kesehatan Gigi',
          href: '/doctor' + routes.dentalHealtEducationPage.dashboard,
        },
        {
          name: 'Panduan Penggunaan Aplikasi',
          href: '/doctor' + routes.applicationUse.dashboard,
        },
      ];
    case role == 'admin':
      return [
        {
          label: 'HOME',
        },
        {
          name: 'Dashboard',
          href: routes.dashboard,
        },
        {
          label: 'CORE',
        },
        {
          name: 'Kelola Pengguna',
          href: '/admin' + routes.admin.user.dashboard,
        },
        {
          name: 'Kontrol Diabetes Melitus',
          href: '/admin' + routes.controldiabetes.dashboard,
        },
        {
          name: 'Pemeriksaan Kesehatan Gigi Dan Mulut',
          href: '/admin' + routes.dentalHealt.dashboard,
        },
        {
          name: 'Ceklis Menggosok Gigi',
          href: '/admin' + routes.brushingChecklist.dashboard,
        },
        {
          name: 'Edukasi Kesehatan Gigi',
          href: '/admin' + routes.dentalHealtEducationPage.dashboard,
        },
        {
          name: 'Panduan Penggunaan Aplikasi',
          href: '/admin' + routes.applicationUse.dashboard,
        },
      ];
    default:
      return [
        {
          label: 'HOME',
        },
        {
          name: 'Dashboard',
          href: routes.dashboard,
        },
      ];
  }
}
const role = Cookies.get('role') ?? '';
pageLinks = getMenu(role);

export { pageLinks };
