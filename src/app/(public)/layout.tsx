import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

type UnauthorizedMainLayoutProps = {
  children: ReactNode;
};

export default async function UnauthorizedMainLayout({
  children,
}: UnauthorizedMainLayoutProps) {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return <div className="flex items-center h-screen w-full">{children}</div>;
}
