'use client';
import Link from 'next/link';
import { toast } from 'sonner';

import { signupAction } from '@/actions/auth';
import { useForm } from '@/hooks/useForm';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup } from '@/components/ui/field';
import { InputField } from '@/app/_components/fields/InputField';

import { signupFormDefaultValues, SignupFormSchema } from './SignupForm.schema';

export const SignupForm = () => {
  const { control, handleSubmit, formState } = useForm({
    formSchema: SignupFormSchema,
    defaultValues: signupFormDefaultValues,
  });

  const handleFormSubmit = handleSubmit(async (values) => {
    const { errors } = await signupAction(values);

    if (Object.keys(errors).length) {
      toast.error(String(Object.values(errors)[0]));
    }
  });

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">Fill in the form below to create your account</p>
        </div>
        <InputField control={control} name="name" label="Full Name" placeholder="John Doe" />
        <InputField control={control} name="email" label="Email" placeholder="john.doe@example.com">
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email with anyone else.
          </FieldDescription>
        </InputField>
        <InputField control={control} name="password" type="password" label="Password">
          <FieldDescription>Must be at least 8 characters long.</FieldDescription>
        </InputField>
        <InputField control={control} name="confirmPassword" type="password" label="Confirm Password">
          <FieldDescription>Please confirm your password.</FieldDescription>
        </InputField>
        <Field>
          <Button
            className="from-primary to-secondary bg-gradient-to-br hover:cursor-pointer"
            type="submit"
            disabled={!formState.isValid}
          >
            Create Account
          </Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Already have an account?{' '}
            <Link href="/login" className="underline underline-offset-4">
              Sign in
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};
