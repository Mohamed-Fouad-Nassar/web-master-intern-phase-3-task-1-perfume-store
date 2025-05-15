import { Outlet } from "react-router";

import Logo from "../ui/Logo";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm ">
        <Logo />
      </div>

      <Outlet />
    </div>
  );
}
