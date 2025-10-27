'use client';
import { createContext, ReactNode } from 'react';
import { ToastOptions } from 'react-toastify';

type AlertType = 'info' | 'error' | 'success' | 'warning';

type ShowToastProps = {
  message: ReactNode | string;
  options?: ToastOptions<unknown>;
  type: AlertType;
};

export type ShowToastFn = (props: ShowToastProps) => void;

type ToastContextValue = ShowToastFn;

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);
