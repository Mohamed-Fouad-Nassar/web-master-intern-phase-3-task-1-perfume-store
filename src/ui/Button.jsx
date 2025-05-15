import { Link } from "react-router";

export default function Button({
  href,
  size,
  onClick,
  replace,
  children,
  disabled,
  className,
  variation,
  as = "button",
}) {
  const style = `cursor-pointer border rounded ${
    size === "sm"
      ? "text-sm px-2 py-1"
      : size === "lg"
      ? "text-lg px-4 py-2"
      : "px-3 py-1.5"
  } ${
    variation === "outline"
      ? "border-main text-main hover:text-white hover:bg-main/70"
      : variation === "secondary"
      ? "text-main border-transparent hover:bg-main/15 hover:border-main/40"
      : variation === "danger"
      ? "border-red-600 bg-red-600 hover:bg-red-700"
      : "border-main bg-main hover:bg-main/90"
  } ${className}`;

  if (as === "link")
    return (
      <Link replace={replace} className={style} to={href}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} disabled={disabled} className={style}>
      {children}
    </button>
  );
}
