import { Plus } from "lucide-react";

import Button from "../ui/button";
import Heading from "../ui/Heading";
import ProductsTable from "../features/products/ProductsTable";

{
  /* <p className="italic text-center text-lg text-white/80">
  No products found at this moment
</p> */
}

export default function ProductsDash() {
  return (
    <>
      <div className="mb-6 flex justify-between items-center gap-2">
        <Heading className="!mb-0 text-2xl text-start">Products</Heading>
        <Button as="link" href="new" className="flex items-center gap-2">
          <Plus className="size-6 md:size-4" />
          <span className="hidden md:block">Add New Product</span>
        </Button>
      </div>

      <ProductsTable />
    </>
  );
}
