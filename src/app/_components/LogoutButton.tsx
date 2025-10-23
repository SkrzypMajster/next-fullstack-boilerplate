'use client';
import { logout } from '@/actions/auth';

export const LogoutButton = () => {
  const handleLogout = async () => {
    logout();
  };

  return (
    <button className="rounded-sm border border-white px-4 py-2" onClick={handleLogout}>
      Logout
    </button>
  );
};
