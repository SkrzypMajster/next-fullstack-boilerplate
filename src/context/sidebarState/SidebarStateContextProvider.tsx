'use client';
import { ReactNode, useState } from 'react';

import { SidebarStateContext } from './SidebarStateContext';

type SidebarStateContextProviderProps = {
  children: ReactNode;
};

export const SidebarStateContextProvider = ({ children }: SidebarStateContextProviderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarOpen = (open: boolean) => {
    setSidebarOpen(open);
  };

  return (
    <SidebarStateContext.Provider value={{ sidebarOpen, handleSidebarOpen }}>{children}</SidebarStateContext.Provider>
  );
};
