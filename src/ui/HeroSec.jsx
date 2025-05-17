import Button from "./Button";

import landingImg from "../assets/images/hero-sec.png";

export default function HeroSec() {
  return (
    <section className="pt-40 px-2 pb-20 md:py-10 bg-[url(/src/assets/background/hero-bg.png)] bg-center bg-cover bg-no-repeat mx-auto">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <div className="flex-1 text-center md:text-start">
          <h1 className="text-3xl lg:text-4xl font-medium">
            Elevate Your Spirit with Victory Scented Fragrances!
          </h1>
          <p className="py-6 text-sm text-white/90">
            Shop now and embrace the sweet smell of victory with Local Face.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            veritatis, saepe vero rem aut perferendis quos rerum tempora beatae
            eligendi distinctio sunt quae alias, eos voluptatem velit, expedita
            voluptate! Hic.
          </p>
          <Button as="link" href="/products">
            Shop Now
          </Button>
        </div>

        <div className="hidden md:block flex-[0.75]">
          <img
            src={landingImg}
            alt="landing-image-perfume"
            className="max-w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
