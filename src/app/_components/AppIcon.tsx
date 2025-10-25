import { cn } from '@/utils/cn';
import { WorkflowIcon } from '@/components/icons';

type AppIconProps = {
  classNames?: {
    wrapper?: string;
    icon?: string;
  };
};

export const AppIcon = ({ classNames }: AppIconProps) => (
  <div
    className={cn(
      'from-primary to-secondary flex items-center justify-center rounded-2xl bg-gradient-to-br p-2 text-white',
      classNames?.wrapper,
    )}
  >
    <WorkflowIcon className={cn('size-4', classNames?.icon)} />
  </div>
);
