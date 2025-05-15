export default function Heading({ children, className }) {
  return (
    <h2
      className={`mb-6 text-main text-center text-3xl font-medium ${className}`}
    >
      {children}
    </h2>
  );
}
