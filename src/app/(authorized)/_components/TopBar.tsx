import { APP_NAME } from "@/lib/constants";
import { logoutAction } from "@/actions/auth";

export const TopBar = () => {
  return (
    <div className="flex justify-between bg-[#3b4863] text-white sticky top-0 h-[3.75rem] px-4">
      <h1 className="text-2xl font-bold leading-relaxed inline-flex items-center">
        {APP_NAME}
      </h1>
      <form action={logoutAction} className="flex items-center">
        <button
          type="submit"
          className="uppercase rounded text-sm leading-[1.75]"
        >
          Logout
        </button>
      </form>
    </div>
  );
};
