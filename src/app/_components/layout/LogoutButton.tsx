'use client';
import { logout } from '@/actions/auth';
import { LogOutIcon } from '@/components/icons';

export const LogoutButton = () => {
  const handleLogout = async () => {
    logout();
  };

  return (
    <button
      className="hover:bg-muted flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:cursor-pointer"
      onClick={handleLogout}
    >
      <LogOutIcon className="h-5 w-5" />
      <span>Logout</span>
    </button>
  );
};
