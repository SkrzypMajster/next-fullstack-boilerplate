import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';

import { auth } from '@/auth';
import { MobileMenuStateContextProvider } from '@/context/mobileMenuState';
import { SidebarStateContextProvider } from '@/context/sidebarState';
import { MobileSidebar, MobileSidebarOverlay } from '@/app/_components/layout/MobileSidebar';
import { Sidebar } from '@/app/_components/layout/Sidebar';
import { MainContent } from '@/app/_components/layout/MainContent';

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
      <MobileMenuStateContextProvider>
        <SidebarStateContextProvider>
          <div className="bg-background relative min-h-screen overflow-hidden">
            <MobileSidebarOverlay />
            <MobileSidebar />
            <Sidebar />
            <MainContent>{children}</MainContent>
          </div>
        </SidebarStateContextProvider>
      </MobileMenuStateContextProvider>
    </SessionProvider>
  );
}
