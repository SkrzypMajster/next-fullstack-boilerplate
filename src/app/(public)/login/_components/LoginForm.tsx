'use client';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';

import { loginAction } from '@/actions/auth';
import { useForm } from '@/hooks/useForm';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup } from '@/components/ui/field';
import { InputField } from '@/app/_components/fields/InputField';

import { loginFormDefaultValues, LoginFormSchema } from './LoginForm.schema';

export const LoginForm = () => {
  const { control, handleSubmit, formState } = useForm({
    formSchema: LoginFormSchema,
    defaultValues: loginFormDefaultValues,
  });

  const handleFormSubmit = handleSubmit(async ({ email, password }) => {
    const { isSuccess, errors } = await loginAction({ email, password });

    if (errors) {
      toast.error(String(Object.values(errors)[0]));
    }

    if (isSuccess) {
      redirect('/');
    }
  });

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">Enter your email below to login to your account</p>
        </div>
        <InputField control={control} name="email" label="Email" placeholder="john.doe@example.com" />
        <InputField control={control} name="password" type="password" label="Password" />
        <Field>
          <Button
            className="from-primary to-secondary bg-gradient-to-br hover:cursor-pointer"
            type="submit"
            disabled={!formState.isValid}
          >
            Login
          </Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline underline-offset-4">
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};
