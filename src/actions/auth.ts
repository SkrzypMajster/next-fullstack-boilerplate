'use server';
import { redirect } from 'next/navigation';

import { signIn, signOut } from '@/lib/auth';
import { userAuthRepository } from '@/repositories/UserAuth.repository';

export const loginAction = async (formData: FormData) => {
  try {
    await signIn('credentials', formData, { redirectTo: '/' });
  } catch {}
};

export const registerAction = async (formData: FormData) => {
  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();
  const confirmPassword = formData.get('confirm-password')?.toString();

  if (!name || !email || !password || !confirmPassword) {
    return;
  }

  if (password !== confirmPassword) {
    return;
  }

  await userAuthRepository.registerUser(email, password, { name });

  redirect('/login');
};

export const logoutAction = async () => {
  await signOut({ redirectTo: '/login' });
};
