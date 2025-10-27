'use client';
import { createContext } from 'react';

type SidebarStateContextValue = {
  sidebarOpen: boolean;
  handleSidebarOpen: (open: boolean) => void;
};

export const SidebarStateContext = createContext<SidebarStateContextValue | undefined>(undefined);
