'use client';
import { createContext } from 'react';

import { Icon } from '@/components/icons';

type SidebarItem = {
  path: string;
  name: string;
  IconComponent: Icon;
};

type SidebarStateContextValue = {
  sidebarOpen: boolean;
  sidebarItems: SidebarItem[];
  handleSidebarOpen: (open: boolean) => void;
};

export const SidebarStateContext = createContext<SidebarStateContextValue | undefined>(undefined);
