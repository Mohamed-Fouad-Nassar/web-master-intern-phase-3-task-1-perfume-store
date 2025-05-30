import Heading from "../ui/Heading";
import Breadcrumb from "../ui/Breadcrumb";
import PageHeadSec from "../ui/PageHeadSec";
import ServicesSec from "../ui/ServicesSec";
import OurStorySec from "../ui/OurStorySec";

import aboutImg from "../assets/images/about.png";

export default function About() {
  return (
    <div className="pt-20 pb-10">
      <div className="px-2 pt-2 pb-6 container mx-auto">
        <Breadcrumb cur="About" links={[{ title: "Home", href: "/" }]} />
      </div>

      <PageHeadSec>
        <div className="container mx-auto">
          <Heading>About Us</Heading>
          <p className="-mt-2 text-center text-white/80 max-w-[600px] mx-auto">
            At Perfume Store, we believe that perfumes are more than just
            scents; they are expressions of one's individuality and style. Our
            passion for exquisite fragrances led us to curate a collection that
            captures the essence of diverse personalities, bringing you an
            unparalleled olfactory experience.
          </p>
        </div>
      </PageHeadSec>

      <OurStorySec />
      <div className="">
        <img src={aboutImg} alt="about-us-image" className="w-full" />
      </div>
      <ServicesSec />
    </div>
  );
}
