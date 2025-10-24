import { ComponentProps, ReactNode } from 'react';
import { FieldValues, ControllerProps, Controller } from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '@/components//ui/field';
import { Input } from '@/components/ui/input';

type InputFieldProps<T extends FieldValues> = Omit<ComponentProps<'input'>, 'name'> &
  Omit<ControllerProps<T>, 'render'> & {
    label: ReactNode;
  };

export const InputField = <T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  children,
  className,
  ...restProps
}: InputFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState }) => (
      <Field data-invalid={fieldState.invalid} className={className}>
        <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
        <Input {...field} id={field.name} aria-invalid={fieldState.invalid} type={type} {...restProps} />
        {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : children}
      </Field>
    )}
  />
);
