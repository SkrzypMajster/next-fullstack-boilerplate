import { ChangeEventHandler, ComponentProps, ReactNode } from 'react';
import { FieldValues, ControllerProps, Controller } from 'react-hook-form';

import { convertFileToBase64 } from '@/utils/file';
import { Field, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UploadIcon } from '@/components/icons';
import { UserAvatar } from '@/app/_components/UserAvatar';

type InputFieldProps<T extends FieldValues> = Omit<ComponentProps<'input'>, 'name' | 'type'> &
  Omit<ControllerProps<T>, 'render'> & {
    label: ReactNode;
    userName: string;
  };

export const ProfilePhotoUploadField = <T extends FieldValues>({
  name,
  control,
  label,
  children,
  className,
  userName,
  ...restProps
}: InputFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { value, onChange, ...field }, fieldState }) => {
      const handleInputChange: ChangeEventHandler<HTMLInputElement> = async ({ target: { files } }) => {
        if (!files) {
          return;
        }

        const uploadedFile = files[0];
        const base64Image = await convertFileToBase64(uploadedFile);
        onChange(base64Image);
      };

      return (
        <Field data-invalid={fieldState.invalid}>
          <div className={className}>
            <Input
              {...field}
              onChange={handleInputChange}
              id={field.name}
              aria-invalid={fieldState.invalid}
              type="file"
              className="hidden"
              {...restProps}
            />
            <UserAvatar name={userName} imageSrc={value || undefined} size="lg" />
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <label htmlFor={field.name} className="cursor-pointer">
                  <Button type="button" variant="outline" className="pointer-events-none gap-2 bg-transparent">
                    <UploadIcon className="h-4 w-4" />
                    {label}
                  </Button>
                </label>
                {value && (
                  <Button
                    type="button"
                    variant="destructive"
                    className="gap-2 bg-transparent hover:cursor-pointer"
                    onClick={() => onChange('')}
                  >
                    Delete image
                  </Button>
                )}
              </div>
              <p className="text-sm text-gray-600">JPG, PNG or GIF. Max size 2MB.</p>
            </div>
          </div>
          {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : children}
        </Field>
      );
    }}
  />
);
