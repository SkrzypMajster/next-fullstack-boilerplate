'use client';
import { useContext } from 'react';

import { SidebarStateContext } from './SidebarStateContext';

export const useSidebarState = () => {
  const context = useContext(SidebarStateContext);

  if (context === undefined) {
    throw new Error('SidebarStateContext must be within SidebarStateContextProvider');
  }

  return context;
};
