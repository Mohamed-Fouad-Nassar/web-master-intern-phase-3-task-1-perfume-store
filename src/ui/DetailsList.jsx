export default function DetailsList({ children }) {
  return <dl className="divide-y divide-stone-400">{children}</dl>;
}

function Item({ title, description }) {
  return (
    <div className="px-2 py-4">
      <dt className="text-sm font-medium text-stone-200">{title}</dt>
      <dd className="text-sm text-stone-100">{description}</dd>
    </div>
  );
}

DetailsList.Item = Item;
