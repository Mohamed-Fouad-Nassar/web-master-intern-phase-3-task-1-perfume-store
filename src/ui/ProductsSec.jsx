import Button from "./Button";
import Heading from "./Heading";
import Spinner from "./Spinner";
import ProductCard from "../features/products/ProductCard";

import { useGetHomeProducts } from "../features/products/useProducts";

export default function ProductsSec() {
  const { isLoading, isError, homeProducts, error } = useGetHomeProducts();

  if (isLoading)
    return (
      <div className="py-20 flex justify-center items-center">
        <Spinner />
      </div>
    );

  if (isError) {
    return (
      <div className="py-20 flex flex-col justify-center items-center">
        <h4 className="text-2xl font-medium text-main">Something went wrong</h4>
        <p>{error?.message}</p>
      </div>
    );
  }

  return (
    <section className="px-2 py-20">
      <div className="container mx-auto">
        <Heading>Our Products</Heading>
        {homeProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {homeProducts.map((product) => (
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
