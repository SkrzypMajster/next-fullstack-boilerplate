'use client';
import { ReactNode } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { Alert } from '@/components/Alert';

import { ShowToastFn, ToastContext } from './ToastContext';

type ToastContextProviderProps = {
  children: ReactNode;
};

export const ToastContextProvider = ({ children }: ToastContextProviderProps) => {
  const showToast: ShowToastFn = ({ type, message, options }) => {
    toast(<Alert type={type}>{message}</Alert>, options);
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
