type UnknownObject = Record<string, unknown>;

type Nullable<T> = T | null;

type ServerActionErrors = Record<string, string>;

type ServerActionSuccessResponse<D> = {
  isSuccess: true;
  data?: D;
};

type ServerActionErrorResponse = {
  isSuccess: false;
  errors: ServerActionErrors;
};

type ServerActionResponse<D = undefined> = Promise<{
  isSuccess: boolean;
  data?: D;
  errors?: ServerActionErrors;
}>;
