'use client';
import { createContext } from 'react';

type MobileMenuStateContextValue = {
  mobileMenuOpen: boolean;
  handleMobileMenuOpen: (open: boolean) => void;
};

export const MobileMenuStateContext = createContext<MobileMenuStateContextValue | undefined>(undefined);
