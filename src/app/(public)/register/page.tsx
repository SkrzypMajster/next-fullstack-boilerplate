import Link from 'next/link';

import { registerAction } from '@/actions/auth';
import { Input } from '@/components/Input';

export default async function RegisterPage() {
  return (
    <>
      <form action={registerAction} className="flex flex-col justify-center gap-6">
        <Input placeholder="Username*" name="name" className="h-[56px] w-full" required />
        <Input type="email" placeholder="Email*" name="email" className="h-[56px] w-full" required />
        <Input type="password" placeholder="Password*" name="password" className="h-[56px] w-full" required />
        <Input
          type="password"
          placeholder="Confirm password*"
          name="confirm-password"
          className="h-[56px] w-full"
          required
        />
        <button type="submit" className="rounded bg-[#3b4863] px-4 py-1.5 text-sm uppercase leading-[1.75] text-white">
          Register
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link href="/login" className="text-sm leading-[1.43] text-[#3b4863] underline ">
          Already have an account? Log in
        </Link>
      </div>
    </>
  );
}
