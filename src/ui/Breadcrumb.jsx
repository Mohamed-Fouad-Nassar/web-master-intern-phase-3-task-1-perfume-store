import { Fragment } from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ cur, links }) {
  return (
    <nav className="mt-2">
      <ol className="flex items-center gap-1 capitalize text-gray-200">
        {links?.map(({ title, href }) => (
          <Fragment key={title}>
            <li className="flex items-center gap-1">
              <Link
                to={href}
                className="block transition-colors hover:text-white"
              >
                {title}
              </Link>
            </li>
            <li>
              <ChevronRight className="mt-0.5 size-5" />
            </li>
          </Fragment>
        ))}
        <li className="ms-1" aria-current="page">
          {cur}
        </li>
      </ol>
    </nav>
  );
}
