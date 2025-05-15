import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import Button from "./Button";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Products", path: "/products" },
  { title: "Contact", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full top-0 pt-4 px-2 ${
        scrolled ? "!bg-black/80" : "bg-transparent"
      }`}
    >
      {/* <header className="bg-black sticky top-0 pt-4 px-2"> */}
      <div className="relative container mx-auto flex items-center justify-between gap-4 pb-4 border-b border-stone-600">
        <Logo />
        <nav
          className={`${
            open
              ? "p-4 bg-stone-800 rounded shadow absolute top-14 left-0 w-full"
              : "hidden"
          } sm:block sm:bg-transparent sm:p-0 sm:w-auto sm:static sm:shadow-none sm:rounded-none`}
        >
          <ul className="flex flex-col sm:flex-row gap-4">
            {links.map(({ title, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setOpen(false)}
                  className="block px-2 hover:underline"
                >
                  {title}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="block px-2 hover:underline"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          {/* <button className="px-3 py-1 border rounded cursor-pointer">
            Sign Up
          </button> */}
          <Button as="link" href="/login">
            Log In
          </Button>
          <Button
            className="sm:hidden"
            variation="outline"
            onClick={() => setOpen((cur) => !cur)}
          >
            <Menu className="size-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
