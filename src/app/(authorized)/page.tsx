import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect('/login');
    return;
  }

  const { user } = session;

  return (
    <>
      <h1 className="text-2xl">Welcome, {user?.name}!</h1>
    </>
  );
}
