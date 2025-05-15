import { formatPrice } from "../../utils/helpers";

export default function ProductCard({ product }) {
  const { name, price, description, image, stock } = product;

  return (
    <div className="p-2 flex flex-col gap-2">
      <img
        src={image}
        alt={`${name}-image`}
        className="rounded w-full object-cover"
      />
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-sm text-white/90">{description}</p>
      {stock > 0 ? (
        <span className="text-main text-lg">{formatPrice(price)}</span>
      ) : (
        <span className="text-red-600">Out of stock</span>
      )}
    </div>
  );
}
