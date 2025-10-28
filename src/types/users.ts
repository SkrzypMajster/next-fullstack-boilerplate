export type UserRole = 'USER' | 'ADMINISTRATOR';

export type User = {
  id: string;
  name: string;
  image: Nullable<string>;
};

export type UserCredentials = {
  email: string;
  password: string;
};

export type UserAccount = {
  email: string;
  role: UserRole;
  user: User;
};
