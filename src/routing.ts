import { UserRole } from '@/types/users';
import { Icon, LayoutDashboardIcon, SettingsIcon } from '@/components/icons';

type Route = {
  path: string;
  name: string;
  role: UserRole[];
  IconComponent: Icon;
  hidden?: boolean;
};

export const settingsPageRoute: Route = {
  path: '/settings',
  name: 'Settings',
  role: ['USER', 'ADMINISTRATOR'],
  IconComponent: SettingsIcon,
  hidden: true,
};

export const routes: Route[] = [
  settingsPageRoute,
  {
    path: '/',
    name: 'Dashboard',
    role: ['USER'],
    IconComponent: LayoutDashboardIcon,
  },
  {
    path: '/admin',
    name: 'Dashboard',
    role: ['ADMINISTRATOR'],
    IconComponent: LayoutDashboardIcon,
  },
];
