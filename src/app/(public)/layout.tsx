import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';

type PublicRootLayoutProps = {
  children: ReactNode;
};

export default async function PublicRootLayout({ children }: PublicRootLayoutProps) {
  const session = await auth();

  if (session) {
    redirect('/');
  }

  return <>{children}</>;
}
