'use client';
import { ReactNode } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { Alert, AlertDescription } from '@/components/ui/alert';

import { ShowToastFn, ToastContext } from './ToastContext';

type ToastContextProviderProps = {
  children: ReactNode;
};

export const ToastContextProvider = ({ children }: ToastContextProviderProps) => {
  const showToast: ShowToastFn = ({ type, message, options }) => {
    toast(
      <div>
        <Alert variant={type === 'error' ? 'destructive' : 'default'}>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      </div>,
      options,
    );
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        closeButton={false}
        hideProgressBar
        closeOnClick
        className="min-h-auto max-w-[calc(100%-32px)] p-0"
      />
    </ToastContext.Provider>
  );
};
