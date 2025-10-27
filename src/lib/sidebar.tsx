import { ReactNode } from 'react';

import { LayoutDashboardIcon } from '@/components/icons';

type SidebarItem = {
  title: string;
  path: string;
  icon: ReactNode;
};

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <LayoutDashboardIcon />,
  },
];
