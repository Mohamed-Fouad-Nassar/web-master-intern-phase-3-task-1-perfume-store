export default function ServiceCard({ service }) {
  const { title, description } = service;
  return (
    <div className="p-2">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-white/90 text-sm">{description}</p>
    </div>
  );
}
