import Button from "./Button";
import Heading from "./Heading";
import ProductCard from "../features/products/ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://placehold.co/600x400",
    stock: 10,
  },
  {
    id: 2,
    name: "Product 2",
    price: 50,
    description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://placehold.co/600x400",
    stock: 0,
  },
  {
    id: 3,
    name: "Product 3",
    price: 450,
    description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://placehold.co/600x400",
    stock: 4,
  },
];

export default function ProductsSec() {
  return (
    <section className="px-2 py-20">
      <div className="container mx-auto">
        <Heading>Our Products</Heading>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="italic text-center text-lg text-white/80">
            No products found at this moment
          </p>
        )}
        <Button
          as="link"
          href="/products"
          className="block w-fit mt-10 mx-auto"
        >
          Check All Products
        </Button>
      </div>
    </section>
  );
}
