import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';

import { auth } from '@/auth';

type AuthorizedMainLayoutProps = {
  children: ReactNode;
};

export default async function AuthorizedPagesRootLayout({ children }: AuthorizedMainLayoutProps) {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <SessionProvider session={session}>
      <div className="min-h-screen">
        <div className="flex">{children}</div>
      </div>
    </SessionProvider>
  );
}
