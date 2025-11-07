import { useForm as useBaseForm, FieldValues, UseFormProps as UseBaseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type UseFormProps<T extends FieldValues> = Pick<UseBaseFormProps<T>, 'defaultValues' | 'mode'> & {
  // TODO: Figure out how to use ZodType instead of any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formSchema: any;
};

export const useForm = <T extends FieldValues>({ defaultValues, mode = 'onBlur', formSchema }: UseFormProps<T>) => {
  const resolver = zodResolver(formSchema);

  const { watch, control, handleSubmit, formState, reset } = useBaseForm<T>({
    defaultValues,
    resolver,
    mode,
  });

  return { watch, control, handleSubmit, formState, reset };
};
