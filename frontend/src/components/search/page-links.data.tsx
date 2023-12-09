import { routes } from '@/config/routes';
import Cookies from 'js-cookie';
import { BiCheckCircle, BiHealth } from 'react-icons/bi';
import { BsUiChecks } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { MdDashboard, MdOutlineCastForEducation } from 'react-icons/md';

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
          icon: <FiSettings />,
        },
        {
          name: 'Pemeriksaan Kesehatan Gigi Dan Mulut',
          href: routes.dentalHealt.dashboard,
          icon: <BiHealth />,
        },
        {
          name: 'Ceklis Menggosok Gigi',
          href: routes.brushingChecklist.dashboard,
          icon: <BiCheckCircle />,
        },
        {
          name: 'Edukasi Kesehatan Gigi',
          href: routes.dentalHealtEducationPage.dashboard,
          icon: <MdOutlineCastForEducation />,
        },
        {
          name: 'Panduan Penggunaan Aplikasi',
          href: routes.applicationUse.dashboard,
          icon: <BsUiChecks />,
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
          icon: <FiSettings />,
        },
        {
          name: 'Pemeriksaan Kesehatan Gigi Dan Mulut',
          href: routes.dentalHealt.dashboard,
          icon: <BiHealth />,
        },
        {
          name: 'Edukasi Kesehatan Gigi',
          href: routes.dentalHealtEducationPage.dashboard,
          icon: <MdOutlineCastForEducation />,
        },
        {
          name: 'Panduan Penggunaan Aplikasi',
          href: routes.applicationUse.dashboard,
          icon: <BsUiChecks />,
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
          icon: <MdOutlineCastForEducation />,
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
