import Heading from "./Heading";

export default function OurStorySec() {
  return (
    <div className="bg-[url(/src/assets/background/hero-bg.png)] bg-no-repeat bg-cover">
      <div className="px-2 py-20 container mx-auto ">
        <Heading>Our Story</Heading>
        <p className="-mt-2 text-center text-white/80 max-w-[80%] mx-auto">
          Perfume store was founded by a group of perfume enthusiasts with a
          shared vision to create a haven for perfume lovers seeking authentic,
          locally-inspired fragrances. Inspired by the diversity and richness of
          cultures around the world, we set out on a journey to curate a
          collection of scents that capture the essence of each region. Our aim
          is to bring you closer to the heart and soul of different cultures
          through the art of perfumery.
        </p>
      </div>
    </div>
  );
}
