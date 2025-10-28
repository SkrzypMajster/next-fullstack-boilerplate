import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

import { UserRole } from '@/types/users';

interface CustomAuthFields {
  id?: string;
  role: UserRole;
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT, CustomAuthFields {}
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: CustomAuthFields & DefaultSession['user'];
  }

  interface User extends DefaultUser, CustomAuthFields {}
}
