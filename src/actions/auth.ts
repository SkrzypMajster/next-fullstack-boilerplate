'use server';
import { AuthError, CredentialsSignin } from 'next-auth';

import { signIn, signOut } from '@/auth';

type LoginCredentials = {
  email: string;
  password: string;
};

export const loginAction = async ({ email, password }: LoginCredentials) => {
  try {
    await signIn('credentials', { email, password, redirectTo: '/' });
    return {
      isSuccess: true,
      errors: {},
    };
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return {
        isSuccess: false,
        errors: { credentials: 'Incorrect email or password!' },
      };
    }

    if (error instanceof AuthError) {
      return {
        isSuccess: false,
        errors: { [error.type]: error.message },
      };
    }

    throw error;
  }
};

export async function logout() {
  await signOut();
}
