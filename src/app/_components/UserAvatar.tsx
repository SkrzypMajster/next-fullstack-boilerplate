import { cn } from '@/utils/cn';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type UserAvatarSize = 'sm' | 'lg';

type UserAvatarProps = {
  name: string;
  imageSrc: string | undefined;
  size?: UserAvatarSize;
};

export const UserAvatar = ({ name, imageSrc, size = 'sm' }: UserAvatarProps) => {
  const initials = (() => {
    const [firstName, lastName] = name.split(' ');
    const firstNameInitial = firstName[0].toUpperCase();
    const lastNameInitial = lastName ? lastName[0].toLocaleUpperCase() : '';

    return `${firstNameInitial}${lastNameInitial}`;
  })();

  return (
    <Avatar
      className={cn({
        'size-5': size === 'sm',
        'size-20': size === 'lg',
      })}
    >
      <AvatarImage src={imageSrc} alt={name} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};
