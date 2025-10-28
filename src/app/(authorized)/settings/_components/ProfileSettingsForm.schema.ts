import { z } from 'zod';

import { UserAccount } from '@/types/users';

export const ProfileSettingsFormSchema = z.object({
  name: z.string().min(1, { error: 'This field is required' }),
  email: z.email(),
});

export type ProfileSettingsFormSchemaType = z.infer<typeof ProfileSettingsFormSchema>;

export const getProfileSettingsFormDefaultValues = (
  userData: Nullable<UserAccount>,
): ProfileSettingsFormSchemaType => ({
  name: userData?.user.name || '',
  email: userData?.email || '',
});
