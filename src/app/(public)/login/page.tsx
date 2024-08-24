import Link from "next/link";

import { loginAction } from "@/actions/auth";
import { Input } from "@/components/Input";

export default async function LoginPage() {
  return (
    <>
      <form action={loginAction} className="flex flex-col justify-center gap-6">
        <Input
          type="email"
          placeholder="Email*"
          name="email"
          className="w-full h-[56px]"
          required
        />
        <Input
          type="password"
          placeholder="Password*"
          name="password"
          className="w-full h-[56px]"
          required
        />
        <button
          type="submit"
          className="bg-[#3b4863] text-white uppercase rounded px-4 py-1.5 text-sm leading-[1.75]"
        >
          Log In
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link
          href="/register"
          className="text-sm leading-[1.43] text-[#3b4863] underline "
        >
          Don&apos;t have an account? Register
        </Link>
      </div>
    </>
  );
}
