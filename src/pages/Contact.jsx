import Heading from "../ui/Heading";
import Breadcrumb from "../ui/Breadcrumb";
import PageHeadSec from "../ui/PageHeadSec";
import ContactForm from "../ui/ContactForm";
import ContactData from "../ui/ContactData";

export default function Contact() {
  return (
    <div className="pt-20 pb-10">
      <div className="px-2 pt-2 pb-6 container mx-auto">
        <Breadcrumb cur="Contact" links={[{ title: "Home", href: "/" }]} />
      </div>

      <PageHeadSec>
        <div className="container mx-auto">
          <Heading>Contact Us</Heading>
          <p className="-mt-2 text-center text-white/80 max-w-[600px] mx-auto">
            At Perfume Store, we believe that perfumes are more than just
            scents; they are expressions of one's individuality and style. Our
            passion for exquisite fragrances led us to curate a collection that
            captures the essence of diverse personalities, bringing you an
            unparalleled olfactory experience.
          </p>
        </div>
      </PageHeadSec>

      <div className="px-8 py-20 container mx-auto flex flex-col md:flex-row gap-10 *:flex-1">
        <ContactData />
        <ContactForm />
      </div>
    </div>
  );
}
