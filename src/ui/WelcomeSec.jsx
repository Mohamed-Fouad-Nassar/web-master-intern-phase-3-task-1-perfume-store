import Heading from "./Heading";

export default function WelcomeSec() {
  return (
    <section className="px-2 py-20 bg-[url(/src/assets/background/welcome-bg.png)] bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto *:max-w-[80%] *:mx-auto">
        <Heading>Welcome to Perfume Store</Heading>
        <p className="text-white/90 text-center">
          Welcome to Perfume Store, where the spirit of victory and triumph come
          alive through scents that empower and inspire. Our curated collection,
          aptly named "Victory Scented," is a celebration of success and
          elegance, designed to unleash your victorious essence. Indulge in the
          sweet taste of triumph with captivating fragrances that tell the tale
          of your achievements. At Perfume Store, we believe that every victory
          deserves a signature scent, and we are dedicated to providing
          unforgettable fragrances that elevate your spirit and empower your
          journey.
        </p>
      </div>
    </section>
  );
}
