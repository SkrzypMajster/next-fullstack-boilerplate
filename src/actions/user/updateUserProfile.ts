'use server';
import { revalidatePath } from 'next/cache';

import { updateSession } from '@/auth';
import { userAuthRepository } from '@/repositories/UserAuth.repository';
import { userRepository } from '@/repositories/User.repository';

type UpdateUserProfileActionPayload = {
  email: string;
  name: string;
  image: Nullable<string>;
};

export const updateUserProfileAction = async ({
  email,
  ...data
}: UpdateUserProfileActionPayload): ServerActionResponse => {
  const userAuth = await userAuthRepository.findUserAccountByEmail(email);

  if (!userAuth) {
    return {
      isSuccess: false,
      errors: {
        user_not_found: 'User not found!',
      },
    };
  }

  await userRepository.updateUserData(userAuth.user.id, data);

  // TODO: Handle uploading session data after update (user name)
  await updateSession({
    user: { name: data.name },
  });

  revalidatePath('/');

  return {
    isSuccess: true,
    errors: {},
  };
};
