import Heading from "../ui/Heading";
import Breadcrumb from "../ui/Breadcrumb";
import Pagination from "../ui/Pagination";
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
  {
    id: 4,
    name: "Product 4",
    price: 400,
    description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://placehold.co/600x400",
    stock: 40,
  },
  {
    id: 5,
    name: "Product 5",
    price: 50,
    description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://placehold.co/600x400",
    stock: 200,
  },
  {
    id: 6,
    name: "Product 6",
    price: 450,
    description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://placehold.co/600x400",
    stock: 7,
  },
  // {
  //   id: 7,
  //   name: "Product 7",
  //   price: 700,
  //   description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
  //   image: "https://placehold.co/600x400",
  //   stock: 9,
  // },
  // {
  //   id: 8,
  //   name: "Product 8",
  //   price: 50,
  //   description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
  //   image: "https://placehold.co/600x400",
  //   stock: 0,
  // },
  // {
  //   id: 9,
  //   name: "Product 9",
  //   price: 450,
  //   description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
  //   image: "https://placehold.co/600x400",
  //   stock: 4,
  // },
  // {
  //   id: 10,
  //   name: "Product 10",
  //   price: 450,
  //   description: "Loream ipsum dolor sit amet consectetur adipisicing elit.",
  //   image: "https://placehold.co/600x400",
  //   stock: 4,
  // },
];

export default function Products() {
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

      <Pagination />
    </div>
  );
}
