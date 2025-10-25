import { auth } from '@/auth';
import { LogoutButton } from '@/app/_components/layout/LogoutButton';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    return (
      <main className="flex h-screen w-screen items-center justify-center">
        <h1 className="text-3xl">Hello World!</h1>
      </main>
    );
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Hello {session.user?.name}!</h1>
      <LogoutButton />
    </main>
  );
}
