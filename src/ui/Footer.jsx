/* eslint-disable no-unused-vars */

import { Link } from "react-router";
import { Facebook, Mail, Phone, Twitter, Youtube } from "lucide-react";

import Logo from "./Logo";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Products", path: "/products" },
  { title: "Contact", path: "/contact" },
];

const socialLinks = [
  { title: "Go to facebook", path: "https://facebook.com", icon: Facebook },
  { title: "Go to youtube", path: "https://youtube.com", icon: Youtube },
  { title: "Go to twitter", path: "https://twitter.com", icon: Twitter },
  { title: "Send an Mail", path: "mailto:info@perfumestore.com", icon: Mail },
  { title: "Call us", path: "tel:+123456789", icon: Phone },
];

export default function Footer() {
  return (
    <footer className="bg-black pb-4 px-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-8 sm:gap-16 py-4 border-y border-stone-600 *:flex-1">
        <div>
          <Logo />
          <p className="py-4 text-sm text-gray-200 text-pretty">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-2 items-center">
            {socialLinks.map(({ icon: Icon, path, title }) => (
              <a
                key={title}
                href={path}
                title={title}
                className="flex w-10 h-10 items-center justify-center rounded bg-stone-800 hover:bg-stone-700"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Navigation</h3>
          <nav>
            <ul className="flex flex-col gap-1">
              {links.map(({ title, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="inline-block py-0.5 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-200">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            vel veniam ab ipsum cumque.
          </p>
          <address className="*:block text-sm pt-4">
            <span>contact@perfumestore.com</span>
            <span>help@perfumestore.com</span>
          </address>
        </div>
      </div>

      <div className="container mx-auto pt-4">
        <p className="text-center text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Perfume Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
