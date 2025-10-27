'use client';
import { useContext } from 'react';

import { MobileMenuStateContext } from './MobileMenuStateContext';

export const useMobileMenuState = () => {
  const context = useContext(MobileMenuStateContext);

  if (context === undefined) {
    throw new Error('MobileMenuStateContext must be within MobileMenuStateContextProvider');
  }

  return context;
};
