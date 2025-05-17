import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Breadcrumb from "../ui/Breadcrumb";
// import Pagination from "../ui/Pagination";
import ProductCard from "../features/products/ProductCard";

// import { products } from "../data/products";

import { useGetProducts } from "../features/products/useProducts";

export default function Products() {
  const { isLoading, isError, data: products, error } = useGetProducts();

  if (isLoading)
    return (
      <div className="py-60 flex justify-center items-center">
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
    <div className="container mx-auto px-2 pt-20 pb-10">
      <Breadcrumb cur="Products" links={[{ title: "Home", href: "/" }]} />
      <Heading className="text-start">Our Products</Heading>

      {products.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </section>
      ) : (
        <p className="italic text-center text-lg text-white/80">
          No products found at this moment
        </p>
      )}

      {/* <Pagination /> */}
    </div>
  );
}
