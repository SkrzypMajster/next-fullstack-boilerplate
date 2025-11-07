import { NextRequest } from 'next/server';

import { userRepository } from '@/repositories/User.repository';

type GetUserAvatarParams = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: NextRequest, props: GetUserAvatarParams) {
  const params = await props.params;
  const { id } = params;

  const user = await userRepository.findUserById(id);

  if (!user || !user.image) {
    return new Response(null, { status: 404 });
  }

  const base64Response = await fetch(user.image);

  if (!base64Response.ok) {
    return new Response(null, { status: 404 });
  }

  const blob = await base64Response.blob();
  return new Response(blob, { headers: { 'Content-Type': 'image/jpeg' } });
}
