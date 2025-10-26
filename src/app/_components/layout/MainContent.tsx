'use client';
import { ReactNode } from 'react';

import { cn } from '@/utils/cn';
import { useSidebarState } from '@/context/sidebarState';
import { useMobileMenuState } from '@/context/mobileMenuState';
import { MenuIcon, PanelLeftIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { sidebarItems } from '@/lib/sidebar';
import { usePathname } from '@/hooks/usePathname';

import { ModeToggle } from './ModeToggle';

type MainContentProps = {
  children: ReactNode;
};

export const MainContent = ({ children }: MainContentProps) => {
  const { isActivePath } = usePathname();
  const { sidebarOpen, handleSidebarOpen } = useSidebarState();
  const { handleMobileMenuOpen } = useMobileMenuState();

  const activeSidebarItem = sidebarItems.find((item) => isActivePath(item.path));
  const isSettingsPage = isActivePath('/settings');

  return (
    <main className={cn('min-h-screen transition-all duration-300 ease-in-out', sidebarOpen ? 'md:pl-72' : 'md:pl-0')}>
      <header className="bg-background/95 border-border sticky top-0 z-10 flex h-16 items-center gap-3 border-b px-4 backdrop-blur">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => handleMobileMenuOpen(true)}>
          <MenuIcon className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => handleSidebarOpen(!sidebarOpen)}>
          <PanelLeftIcon className="h-5 w-5" />
        </Button>
        <div className="flex flex-1 items-center justify-between">
          {!!activeSidebarItem && <h1 className="text-xl font-semibold">{activeSidebarItem.title}</h1>}
          {!!isSettingsPage && <h1 className="text-xl font-semibold">Settings</h1>}
        </div>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </header>
      {children}
    </main>
  );
};
