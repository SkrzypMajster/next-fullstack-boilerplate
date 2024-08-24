import Link from "next/link";

import { registerAction } from "@/actions/auth";
import { Input } from "@/components/Input";

export default async function RegisterPage() {
  return (
    <>
      <form
        action={registerAction}
        className="flex flex-col justify-center gap-6"
      >
        <Input
          placeholder="Username*"
          name="name"
          className="w-full h-[56px]"
          required
        />
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
        <Input
          type="password"
          placeholder="Confirm password*"
          name="confirm-password"
          className="w-full h-[56px]"
          required
        />
        <button
          type="submit"
          className="bg-[#3b4863] text-white uppercase rounded px-4 py-1.5 text-sm leading-[1.75]"
        >
          Register
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link
          href="/login"
          className="text-sm leading-[1.43] text-[#3b4863] underline "
        >
          Already have an account? Log in
        </Link>
      </div>
    </>
  );
}
