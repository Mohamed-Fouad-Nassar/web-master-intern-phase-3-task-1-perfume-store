import Heading from "../ui/Heading";
import Breadcrumb from "../ui/Breadcrumb";
import CreateUpdateProductForm from "../features/products/CreateUpdateProductForm";

export default function CreateProduct() {
  return (
    <>
      <Breadcrumb
        cur="Create Product"
        links={[
          { title: "Home", href: "/dashboard" },
          { title: "Products", href: "/dashboard/products" },
        ]}
      />
      <Heading className="mt-2 text-2xl text-start">Create Product</Heading>
      <CreateUpdateProductForm />
    </>
  );
}
