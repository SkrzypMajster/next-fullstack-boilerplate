'use server';
import { AuthError, CredentialsSignin } from 'next-auth';

import { signIn } from '@/auth';

type LoginActionPayload = {
  email: string;
  password: string;
};

export const loginAction = async ({ email, password }: LoginActionPayload): ServerActionResponse => {
  try {
    await signIn('credentials', { email, password, redirectTo: '/' });
    return { isSuccess: true };
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
