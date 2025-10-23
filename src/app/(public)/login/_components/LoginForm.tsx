'use client';
import { FormEventHandler, useState } from 'react';
import { redirect } from 'next/navigation';

import { useToast } from '@/context/toast';
import { loginAction } from '@/actions/auth';
import { APP_NAME } from '@/lib/contants';

export const LoginForm = () => {
  const showToast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const { isSuccess, errors } = await loginAction({ email, password });

    if (errors) {
      showToast({
        type: 'error',
        message: String(Object.values(errors)[0]),
      });
    }

    if (isSuccess) {
      redirect('/');
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="mx-4 flex w-full max-w-sm flex-col space-y-4 rounded-xl border border-white p-4"
    >
      <h1 className="text-center text-xl">Login to {APP_NAME}</h1>
      <input
        required
        name="email"
        placeholder="Email"
        autoComplete="email"
        className="rounded-sm border border-white p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        required
        name="password"
        type="password"
        placeholder="Password"
        className="rounded-sm border border-white p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-full rounded-sm border border-white py-1" type="submit">
        Submit
      </button>
    </form>
  );
};
