export const getFirstErrorMessage = (errors: ServerActionErrors | undefined): Nullable<string> => {
  if (!errors || !Object.keys(errors).length) {
    return null;
  }

  return Object.values(errors)[0];
};
