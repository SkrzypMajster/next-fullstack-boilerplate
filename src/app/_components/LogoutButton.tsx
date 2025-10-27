'use client';
import { logout } from '@/actions/auth';
import { Button } from '@/components/ui/button';

export const LogoutButton = () => {
  const handleLogout = async () => {
    logout();
  };

  return (
    <Button className="rounded-sm border border-white px-4 py-2" onClick={handleLogout}>
      Logout
    </Button>
  );
};
