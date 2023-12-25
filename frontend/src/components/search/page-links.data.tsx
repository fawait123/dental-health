import { routes } from '@/config/routes';
import Cookies from 'js-cookie';
import { BsUiChecks } from 'react-icons/bs';
import { FaBookMedical, FaUser } from 'react-icons/fa';
import { GiToothbrush } from 'react-icons/gi';
import {
  MdDashboard,
  MdOutlineAppSettingsAlt,
  MdOutlineBloodtype,
} from 'react-icons/md';
import { TbDental } from 'react-icons/tb';

// Note: do not add href in the label object, it is rendering as label

let pageLinks = [
  {
    label: 'HOME',
  },
  {
    name: 'Dashboard',
    href: routes.dashboard,
    icon: <MdDashboard />,
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
          icon: <MdDashboard />,
        },
        {
          label: 'CORE',
        },
        {
          name: 'Kontrol Diabetes Melitus',
          href: routes.controldiabetes.dashboard,
          icon: <MdOutlineBloodtype />,
        },
        {
          name: 'Pemeriksaan Kesehatan Gigi Dan Mulut',
          href: routes.dentalHealt.dashboard,
          icon: <TbDental />,
        },
        {
          name: 'Ceklis Menggosok Gigi',
          href: routes.brushingChecklist.dashboard,
          icon: <GiToothbrush />,
        },
        {
          name: 'Edukasi Kesehatan Gigi',
          href: routes.dentalHealtEducationPage.dashboard,
          icon: <FaBookMedical />,
        },
        {
          name: 'Panduan Penggunaan Aplikasi',
          href: routes.applicationUse.dashboard,
          icon: <MdOutlineAppSettingsAlt />,
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
          icon: <MdDashboard />,
        },
        {
          label: 'CORE',
        },
        {
          name: 'Kontrol Diabetes Melitus',
          href: routes.controldiabetes.dashboard,
          icon: <MdOutlineBloodtype />,
        },
        {
          name: 'Pemeriksaan Kesehatan Gigi Dan Mulut',
          href: routes.dentalHealt.dashboard,
          icon: <TbDental />,
        },
        {
          name: 'Edukasi Kesehatan Gigi',
          href: routes.dentalHealtEducationPage.dashboard,
          icon: <FaBookMedical />,
        },
        {
          name: 'Panduan Penggunaan Aplikasi',
          href: routes.applicationUse.dashboard,
          icon: <MdOutlineAppSettingsAlt />,
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
          icon: <MdDashboard />,
        },
        {
          label: 'CORE',
        },
        {
          name: 'Kelola Pengguna',
          href: routes.admin.user.dashboard,
          icon: <FaUser />,
        },
        {
          name: 'Edukasi Kesehatan Gigi',
          href: routes.dentalHealtEducationPage.dashboard,
          icon: <MdOutlineAppSettingsAlt />,
        },
        {
          name: 'Panduan Penggunaan Aplikasi',
          href: routes.applicationUse.dashboard,
          icon: <BsUiChecks />,
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
          icon: <MdDashboard />,
        },
      ];
  }
}
const role = Cookies.get('role') ?? '';
pageLinks = getMenu(role);

export { pageLinks };
