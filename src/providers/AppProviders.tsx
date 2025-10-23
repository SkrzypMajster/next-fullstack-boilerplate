import { ReactNode } from 'react';

import { ToastContextProvider } from '@/context/toast';

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ToastContextProvider>
    {children}
  </ToastContextProvider>
);
