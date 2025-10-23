'use client';
import { useContext } from 'react';

import { ToastContext } from './ToastContext';

export const useToast = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('ToastContext must be within ToastContextProvider');
  }

  return context;
};
