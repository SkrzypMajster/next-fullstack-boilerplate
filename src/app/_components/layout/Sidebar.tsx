'use client';
import Link from 'next/link';

import { APP_NAME } from '@/lib/contants';
import { sidebarItems } from '@/lib/sidebar';
import { cn } from '@/utils/cn';
import { usePathname } from '@/hooks/usePathname';
import { useSidebarState } from '@/context/sidebarState';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AppIcon } from '@/app/_components/AppIcon';

import { LogoutButton } from './LogoutButton';
import { UserLabel } from './UserLabel';

export const Sidebar = () => {
  const { isActivePath } = usePathname();
  const { sidebarOpen } = useSidebarState();

  return (
    <div
      className={cn(
        'bg-background border-border fixed inset-y-0 left-0 z-30 hidden w-72 transform border-r shadow-sm transition-transform duration-300 ease-in-out md:block',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className="flex h-full flex-col">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <AppIcon classNames={{ icon: 'size-6' }} />
            <div>
              <h2 className="font-semibold">{APP_NAME}</h2>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1 px-3 py-2">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <div key={item.title} className="mb-1">
                <Link
                  href={item.path}
                  className={cn(
                    'flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium',
                    isActivePath(item.path) ? 'bg-primary/10 text-primary' : 'hover:bg-muted',
                  )}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.title}</span>
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
