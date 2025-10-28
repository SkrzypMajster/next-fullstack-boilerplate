'use client';
import { routes } from '@/routing';
import { usePathname } from '@/hooks/usePathname';

export const Breadcrumbs = () => {
  const { isActivePath } = usePathname();
  const activeRoute = routes.find((route) => isActivePath(route.path));

  if (!activeRoute) {
    return;
  }

  return <h1 className="text-xl font-semibold">{activeRoute.name}</h1>;
};
