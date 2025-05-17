import Table from "../../ui/Table";
import ProductRow from "./ProductRow";
import Spinner from "../../ui/Spinner";

import { useGetProducts } from "./useProducts";

export default function ProductsTable() {
  const { isLoading, isError, data: products, error } = useGetProducts();

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
    <div className="overflow-x-auto">
      <Table>
        <Table.Head
          actions={true}
          titles={["id", "image", "name", "price", "stock"]}
        />

        <Table.Body
          data={products}
          render={(product) => (
            <ProductRow key={product?.id} product={product} />
          )}
        />
      </Table>
    </div>
  );
}
