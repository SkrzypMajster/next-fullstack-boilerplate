import { ReactNode } from 'react';

import { ToastContextProvider } from '@/context/toast';

import { ThemeProvider } from './theme/ThemeProvider';

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider>
    <ToastContextProvider>{children}</ToastContextProvider>
  </ThemeProvider>
);
