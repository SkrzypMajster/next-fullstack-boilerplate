import { usePathname as useBasePathname } from 'next/navigation';

export const usePathname = () => {
  const pathname = useBasePathname();

  const isActivePath = (path: string) => pathname === path;

  return { pathname, isActivePath };
};
