import { Outlet } from "react-router";

import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

export default function DashLayout() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-start pt-20 pb-4">
        <Sidebar />
        <main className="min-h-[300vh] flex-1 px-6 py-4 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </>
  );
}
