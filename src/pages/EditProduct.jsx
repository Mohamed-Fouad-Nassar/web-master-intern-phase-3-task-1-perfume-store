import { useParams } from "react-router";

import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Breadcrumb from "../ui/Breadcrumb";
import CreateUpdateProductForm from "../features/products/CreateUpdateProductForm";

import { useGetSingleProduct } from "../features/products/useProducts";

// import { products } from "../data/products";

export default function EditProduct() {
  const { id } = useParams();
  const { isLoading, isError, data: product, error } = useGetSingleProduct(id);

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

  if (Object.keys(product).length === 0) {
    return (
      <div className="py-20 flex flex-col justify-center items-center">
        <h4 className="text-2xl font-medium text-main">Product not found</h4>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb
        cur="Update Product"
        links={[
          { title: "Home", href: "/dashboard" },
          { title: "Products", href: "/dashboard/products" },
        ]}
      />
      <Heading className="mt-2 text-2xl text-start">Update Product</Heading>
      <CreateUpdateProductForm
        key={id}
        product={product}
        // product={products[parseInt(id) - 1]}
      />
    </>
  );
}
