import Button from "./Button";
import Heading from "./Heading";

export default function OffersSec() {
  return (
    <section className="px-2 py-40 bg-[url(/src/assets/background/sale-bg.png)] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="container mx-auto text-center md:text-start *:mx-auto *:md:mx-0 *:max-w-[80%] *:md:max-w-[50%]">
        <Heading className="text-center md:text-start">
          Perfume Year-End Sale! Up to 50% OFF
        </Heading>
        <p className="text-white/90 mb-10">
          Discover an exquisite collection of premium perfumes at unbelievable
          prices during our exclusive Perfume Sale!
        </p>
        <Button as="link" href="/products">
          Get The Offer
        </Button>
      </div>
    </section>
  );
}
