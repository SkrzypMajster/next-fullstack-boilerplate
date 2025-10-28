import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';

type AdminPagesRootLayoutProps = {
  children: ReactNode;
};

export default async function UserPagesRootLayout({ children }: AdminPagesRootLayoutProps) {
  const session = await auth();

  if (session?.user.role !== 'USER') {
    redirect('/admin');
  }

  return children;
}
