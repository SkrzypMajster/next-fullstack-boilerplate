import { ZodType } from 'zod';
import { useForm as useBaseForm, FieldValues, UseFormProps as UseBaseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type UseFormProps<T extends FieldValues> = Pick<UseBaseFormProps<T>, 'defaultValues' | 'mode'> & {
  formSchema: ZodType<T, T>;
};

export const useForm = <T extends FieldValues>({ defaultValues, mode, formSchema }: UseFormProps<T>) => {
  const resolver = zodResolver(formSchema);

  const { watch, control, handleSubmit, formState, reset } = useBaseForm<T>({
    defaultValues,
    resolver,
    mode,
  });

  return { watch, control, handleSubmit, formState, reset };
};
