import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import { AppIcon } from '../_components/AppIcon';
import { APP_NAME } from '@/lib/contants';

type PublicRootLayoutProps = {
  children: ReactNode;
};

export default async function PublicRootLayout({ children }: PublicRootLayoutProps) {
  const session = await auth();

  if (session) {
    redirect('/');
  }

  return (
    <main className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex items-center justify-center gap-2 font-medium md:justify-start">
          <AppIcon />
          {APP_NAME}
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <div className="from-primary to-secondary absolute inset-0 h-full w-full bg-gradient-to-br" />
      </div>
    </main>
  );
}
