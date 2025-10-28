import { UserRole } from '@/types/users';
import { Icon, LayoutDashboardIcon } from '@/components/icons';

type Route = {
  path: string;
  name: string;
  role: UserRole[];
  IconComponent: Icon;
  hidden?: boolean;
};

export const routes: Route[] = [
  {
    path: '/dashboard',
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
