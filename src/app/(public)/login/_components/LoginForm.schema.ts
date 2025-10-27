import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(1, { error: 'This field is required ' }),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

export const loginFormDefaultValues: LoginFormSchemaType = {
  email: '',
  password: '',
};
