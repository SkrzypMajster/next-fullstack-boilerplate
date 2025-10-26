import { ReactNode } from 'react';

import { ThemeProvider } from './theme/ThemeProvider';

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => <ThemeProvider>{children}</ThemeProvider>;
