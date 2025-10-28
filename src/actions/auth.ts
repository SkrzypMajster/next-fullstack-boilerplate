'use server';
import { AuthError, CredentialsSignin } from 'next-auth';

import { signIn, signOut } from '@/auth';
import { userAuthRepository } from '@/repositories/UserAuth.repository';

type LoginCredentials = {
  email: string;
  password: string;
};

type SignupPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
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

export const signupAction = async ({ name, email, password, confirmPassword }: SignupPayload) => {
  // Check if all required fields exist in payload
  if (!name || !email || !password || !confirmPassword) {
    return {
      isSuccess: false,
      errors: {
        missing_fields: 'Some required fields are missing! Please check form again',
      },
    };
  }

  // Check password confirmation
  if (password !== confirmPassword) {
    return {
      isSuccess: false,
      errors: {
        password_confirmation: "Passwords doesn't match! Please provide it again",
      },
    };
  }

  // Check if user with provided email address already exist in database
  const userToRegister = await userAuthRepository.findUserAccountByEmail(email);
  if (userToRegister) {
    return {
      isSuccess: false,
      errors: {
        user_already_exists: 'User with provided email already exists. Please provide other email address',
      },
    };
  }

  // Create new user and login automatically
  await userAuthRepository.registerUser(email, password, name);

  return loginAction({ email, password });
};

export async function logout() {
  await signOut();
}
