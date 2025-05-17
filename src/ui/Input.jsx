export default function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={`px-2.5 py-1.5 border border-stone-600 rounded outline-none focus:border-main disabled:opacity-50 ${className}`}
    />
  );
}
