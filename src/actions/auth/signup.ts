'use server';
import { userAuthRepository } from '@/repositories/UserAuth.repository';

import { loginAction } from './login';

type SignupActionPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const signupAction = async ({
  name,
  email,
  password,
  confirmPassword,
}: SignupActionPayload): ServerActionResponse => {
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
