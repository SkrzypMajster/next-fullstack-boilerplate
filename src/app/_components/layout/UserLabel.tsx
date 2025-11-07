'use client';
import { useSession } from '@/auth';
import { UserAvatar } from '@/app/_components/UserAvatar';

export const UserLabel = () => {
  const { data } = useSession();

  const userName = data?.user?.name || '';
  const userImageSrc = data?.user.id ? `assets/users/${data.user.id}/avatar` : undefined;

  return (
    <div className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium">
      <UserAvatar name={userName} imageSrc={userImageSrc} />
      <span>{userName}</span>
    </div>
  );
};
