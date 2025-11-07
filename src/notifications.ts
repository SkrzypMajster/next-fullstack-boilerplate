import { toast } from 'sonner';

export const showErrorNotification = (message: string) => {
  toast.error(message);
};

export const showSuccessNotification = (message: string) => {
  toast.success(message);
};
