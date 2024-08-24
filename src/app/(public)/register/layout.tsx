import { ReactNode } from 'react';

import { APP_NAME } from '@/lib/constants';

type RegisterPageLayoutProps = {
  children: ReactNode;
};

export default function RegisterPageLayout({ children }: RegisterPageLayoutProps) {
  return (
    <>
      <div className="flex h-full w-1/3 flex-col items-center justify-center bg-[#3b4863] px-6 text-white">
        <p className="text-xl leading-normal">Sign up for</p>
        <p className="text-center text-5xl font-bold leading-normal">{APP_NAME}</p>
      </div>
      <div className="flex h-full w-2/3 flex-col items-center justify-center">
        <h1 className="text-center text-2xl leading-snug">Create a new account</h1>
        <div className="box-border flex w-full max-w-[444px] flex-col p-6">{children}</div>
      </div>
    </>
  );
}
