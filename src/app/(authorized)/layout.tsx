import { ReactNode } from "react";

import { TopBar } from "./_components/TopBar";

type AuthorizedMainLayoutProps = {
  children: ReactNode;
};

export default async function AuthorizedMainLayout({
  children,
}: AuthorizedMainLayoutProps) {
  return (
    <main className="min-h-screen w-screen">
      <TopBar />
      <div className="p-4">{children}</div>
    </main>
  );
}
