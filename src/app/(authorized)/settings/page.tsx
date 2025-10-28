import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import { userAuthRepository } from '@/repositories/UserAuth.repository';

import { ProfileSettingsForm } from './_components/ProfileSettingsForm';

export default async function SettingsPage() {
  const session = await auth();

  if (!session || !session.user.email) {
    redirect('/');
  }

  const profileDataPromise = userAuthRepository.findUserAccountByEmail(session.user.email);

  return (
    <Suspense fallback={<p className="my-6 text-center">Loading...</p>}>
      <ProfileSettingsForm profileDataPromise={profileDataPromise} />
    </Suspense>
  );
}
