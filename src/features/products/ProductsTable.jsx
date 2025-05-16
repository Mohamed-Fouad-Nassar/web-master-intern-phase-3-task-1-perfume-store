import Table from "../../ui/Table";
import ProductRow from "./ProductRow";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://placehold.co/600x400/2d2d2d/00ff00",
    stock: 10,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://placehold.co/600x400/2d2d2d/ff0000",
    stock: 20,
    createdAt: new Date(),
  },
];

export default function ProductsTable() {
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
