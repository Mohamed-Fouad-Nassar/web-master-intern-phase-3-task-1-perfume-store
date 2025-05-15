/* eslint-disable no-unused-vars */
import {
  Boxes,
  Users,
  LogOut,
  ChartPie,
  Settings,
  ChartNoAxesCombined,
} from "lucide-react";
import { useLocation } from "react-router";

import Button from "./Button";

const links = [
  { title: "Dashboard", path: "/dashboard", icon: ChartPie },
  { title: "Products", path: "/dashboard/products", icon: Boxes },
  { title: "Users", path: "/dashboard/users", icon: Users },
  { title: "Orders", path: "/dashboard/orders", icon: ChartNoAxesCombined },
  { title: "Settings", path: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="sticky top-20 h-[calc(100dvh-100px)] w-20 md:w-60 px-2 md:px-6 py-4 border-e border-stone-700 flex flex-col justify-between gap-4">
      <nav className="flex-1">
        <ul className="space-y-2">
          {links.map(({ title, path, icon: Icon }) => (
            <li key={title}>
              <Button
                as="link"
                href={path}
                variation="secondary"
                className={`border-none py-3 md:py-1.5 flex justify-center md:justify-start items-center gap-2 text-white/90 hover:text-main ${
                  pathname === path ? "!text-main bg-main/15" : "'"
                }`}
              >
                <Icon className="size-5" />
                <span className="hidden md:block">{title}</span>
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <Button className="py-3 md:py-1.5 flex justify-center md:justify-start items-center gap-2">
        <LogOut className="size-4" />
        <span className="hidden md:block">Logout</span>
      </Button>
    </aside>
  );
}
