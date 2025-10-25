'use client';
import { ReactNode, useState } from 'react';

import { MobileMenuStateContext } from './MobileMenuStateContext';

type MobileMenuStateContextProps = {
  children: ReactNode;
};

export const MobileMenuStateContextProvider = ({ children }: MobileMenuStateContextProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = (open: boolean) => {
    setMobileMenuOpen(open);
  };

  return (
    <MobileMenuStateContext.Provider value={{ mobileMenuOpen, handleMobileMenuOpen }}>
      {children}
    </MobileMenuStateContext.Provider>
  );
};
