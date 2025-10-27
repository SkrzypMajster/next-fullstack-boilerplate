import { z } from 'zod';

export const SignupFormSchema = z.object({
  name: z.string().min(1, { error: 'This field is required' }),
  email: z.email(),
  password: z.string().min(1, { error: 'This field is required' }),
  confirmPassword: z.string().min(1, { error: 'This field is required' }),
});

export type SignupFormSchemaType = z.infer<typeof SignupFormSchema>;

export const signupFormDefaultValues: SignupFormSchemaType = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};
