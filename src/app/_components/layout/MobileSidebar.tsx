'use client';
import Link from 'next/link';

import { APP_NAME } from '@/lib/contants';
import { cn } from '@/utils/cn';
import { usePathname } from '@/hooks/usePathname';
import { useSidebarState } from '@/context/sidebarState';
import { useMobileMenuState } from '@/context/mobileMenuState';
import { XIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AppIcon } from '@/app/_components/AppIcon';

import { LogoutButton } from './LogoutButton';
import { UserLabel } from './UserLabel';

export const MobileSidebarOverlay = () => {
  const { mobileMenuOpen, handleMobileMenuOpen } = useMobileMenuState();

  if (!mobileMenuOpen) {
    return;
  }

  return <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => handleMobileMenuOpen(false)} />;
};

export const MobileSidebar = () => {
  const { isActivePath } = usePathname();
  const { sidebarItems } = useSidebarState();
  const { mobileMenuOpen, handleMobileMenuOpen } = useMobileMenuState();

  return (
    <div
      className={cn(
        'bg-background fixed inset-y-0 left-0 z-50 w-64 transform shadow-sm transition-transform duration-300 ease-in-out md:hidden',
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className="border-border flex h-full flex-col border-r">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <AppIcon classNames={{ icon: 'size-6' }} />
            <div>
              <h2 className="font-semibold">{APP_NAME}</h2>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => handleMobileMenuOpen(false)}>
            <XIcon className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-3 py-2">
          <div className="space-y-1">
            {sidebarItems.map(({ name, path, IconComponent }) => (
              <div key={name} className="mb-1">
                <Link
                  href={path}
                  className={cn(
                    'flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium',
                    isActivePath(path) ? 'bg-primary/10 text-primary' : 'hover:bg-muted',
                  )}
                  onClick={() => handleMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent />
                    <span>{name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="border-border border-t p-3">
          <div className="space-y-1">
            {/* TODO: Add Settings page link */}
            <LogoutButton />
            <UserLabel />
          </div>
        </div>
      </div>
    </div>
  );
};
