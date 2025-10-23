import { ReactNode } from 'react';

export type AlertType = 'info' | 'error' | 'success' | 'warning';

type AlertProps = {
  children: ReactNode;
  type?: AlertType;
};

const InfoAlert = ({ children }: AlertProps) => (
  <div
    className="mb-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-gray-800 dark:text-blue-400"
    role="alert"
  >
    {children}
  </div>
);

const ErrorAlert = ({ children }: AlertProps) => (
  <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400" role="alert">
    {children}
  </div>
);

const SuccessAlert = ({ children }: AlertProps) => (
  <div
    className="mb-4 rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-gray-800 dark:text-green-400"
    role="alert"
  >
    {children}
  </div>
);

const WarningAlert = ({ children }: AlertProps) => (
  <div
    className="mb-4 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-gray-800 dark:text-yellow-300"
    role="alert"
  >
    {children}
  </div>
);

export const Alert = ({ children, type }: AlertProps) => {
  if (type === 'info') {
    return <InfoAlert>{children}</InfoAlert>;
  }

  if (type === 'error') {
    return <ErrorAlert>{children}</ErrorAlert>;
  }

  if (type === 'success') {
    return <SuccessAlert>{children}</SuccessAlert>;
  }

  if (type === 'warning') {
    return <WarningAlert>{children}</WarningAlert>;
  }

  return (
    <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-300" role="alert">
      {children}
    </div>
  );
};
