import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';

type AdminPagesRootLayoutProps = {
  children: ReactNode;
};

export default async function AdminPagesRootLayout({ children }: AdminPagesRootLayoutProps) {
  const session = await auth();

  if (session?.user.role !== 'ADMINISTRATOR') {
    redirect('/');
  }

  return children;
}
