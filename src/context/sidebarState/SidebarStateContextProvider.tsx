'use client';
import { ReactNode, useState } from 'react';

import { useSession } from '@/auth';
import { routes } from '@/routing';

import { SidebarStateContext } from './SidebarStateContext';

type SidebarStateContextProviderProps = {
  children: ReactNode;
};

export const SidebarStateContextProvider = ({ children }: SidebarStateContextProviderProps) => {
  const { data } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = routes
    .filter((route) => {
      if (route.hidden) {
        // Hiding routes specified to be hidden in sidebar
        return false;
      }

      if (!data?.user.role || !route.role.includes(data?.user.role)) {
        // Hiding routes not available for current user role;
        return false;
      }

      return true;
    })
    .map(({ name, path, IconComponent }) => ({ name, path, IconComponent }));

  const handleSidebarOpen = (open: boolean) => {
    setSidebarOpen(open);
  };

  return (
    <SidebarStateContext.Provider value={{ sidebarOpen, sidebarItems, handleSidebarOpen }}>
      {children}
    </SidebarStateContext.Provider>
  );
};
