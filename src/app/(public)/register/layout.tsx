import { ReactNode } from "react";

import { APP_NAME } from "@/lib/constants";

type RegisterPageLayoutProps = {
  children: ReactNode;
};

export default function RegisterPageLayout({
  children,
}: RegisterPageLayoutProps) {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-full w-1/3 bg-[#3b4863] px-6 text-white">
        <p className="text-xl leading-normal">Sign up for</p>
        <p className="text-5xl font-bold text-center leading-normal">
          {APP_NAME}
        </p>
      </div>
      <div className="h-full w-2/3 flex flex-col justify-center items-center">
        <h1 className="text-2xl leading-snug text-center">
          Create a new account
        </h1>
        <div className="flex flex-col max-w-[444px] w-full p-6 box-border">
          {children}
        </div>
      </div>
    </>
  );
}
