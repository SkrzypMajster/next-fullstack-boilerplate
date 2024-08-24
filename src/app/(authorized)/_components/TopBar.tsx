import { APP_NAME } from '@/lib/constants';
import { logoutAction } from '@/actions/auth';

export const TopBar = () => {
  return (
    <div className="sticky top-0 flex h-[3.75rem] justify-between bg-[#3b4863] px-4 text-white">
      <h1 className="inline-flex items-center text-2xl font-bold leading-relaxed">{APP_NAME}</h1>
      <form action={logoutAction} className="flex items-center">
        <button type="submit" className="rounded text-sm uppercase leading-[1.75]">
          Logout
        </button>
      </form>
    </div>
  );
};
