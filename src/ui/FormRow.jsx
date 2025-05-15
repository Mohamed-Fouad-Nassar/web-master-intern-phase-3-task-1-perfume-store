export default function FormRow({ label, error, children }) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label htmlFor={children?.props.id} className="text-sm">
        {label}
      </label>
      {children}
      <span className="empty:hidden block text-red-800 text-sm">{error}</span>
    </div>
  );
}
