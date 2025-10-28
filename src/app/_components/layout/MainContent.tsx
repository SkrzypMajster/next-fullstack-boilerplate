'use client';
import { ReactNode } from 'react';

import { cn } from '@/utils/cn';
import { useSidebarState } from '@/context/sidebarState';
import { useMobileMenuState } from '@/context/mobileMenuState';
import { MenuIcon, PanelLeftIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

import { ModeToggle } from './ModeToggle';
import { Breadcrumbs } from './Breadcrumbs';

type MainContentProps = {
  children: ReactNode;
};

export const MainContent = ({ children }: MainContentProps) => {
  const { sidebarOpen, handleSidebarOpen } = useSidebarState();
  const { handleMobileMenuOpen } = useMobileMenuState();

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
          <Breadcrumbs />
        </div>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </header>
      {children}
    </main>
  );
};
