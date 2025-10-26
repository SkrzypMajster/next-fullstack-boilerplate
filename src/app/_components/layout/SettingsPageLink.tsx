'use client';
import Link from 'next/link';

import { settingsPageRoute } from '@/routing';
import { cn } from '@/utils/cn';
import { usePathname } from '@/hooks/usePathname';
import { SettingsIcon } from '@/components/icons';

export const SettingsPageLink = () => {
  const { isActivePath } = usePathname();

  return (
    <Link
      href={settingsPageRoute.path}
      className={cn(
        'flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium',
        isActivePath(settingsPageRoute.path) ? 'bg-primary/10 text-primary' : 'hover:bg-muted',
      )}
    >
      <div className="flex items-center gap-3">
        <SettingsIcon className="h-5 w-5" />
        <span>{settingsPageRoute.name}</span>
      </div>
    </Link>
  );
};
