import { formatPrice } from "../../utils/helpers";

export default function ProductCard({ product }) {
  const { name, price, description, image, stock } = product;

  return (
    <div className="p-4 text-center flex flex-col gap-2 bg-radial-[at_50%_75%] from-main/50 via-main/60 to-main/30 to-90% rounded">
      <img src={image} alt={`${name}-image`} className="max-w-40 mx-auto" />
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-sm text-white/90">{description}</p>
      {stock > 0 ? (
        <span className="text-lg font-medium">{formatPrice(price)}</span>
      ) : (
        <span className="text-red-600">Out of stock</span>
      )}
    </div>
  );
}
