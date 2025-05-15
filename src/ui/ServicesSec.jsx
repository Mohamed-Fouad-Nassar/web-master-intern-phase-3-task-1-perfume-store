import Heading from "./Heading";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Locally Inspired",
    description:
      "Our perfumes are meticulously crafted to reflect the cultural heritage, traditions, and landscapes of various regions. From the vibrant streets of Marrakech to the serene cherry blossom gardens of Kyoto, each fragrance tells a unique story that resonates with its origin",
  },
  {
    title: "High-Quality Ingredients",
    description:
      "We believe that the key to an extraordinary scent lies in the quality of ingredients. That's why we collaborate with expert perfumers who source the finest and ethically-sourced materials from around the world. We never compromise on the quality of our products, ensuring a long-lasting and luxurious experience.",
  },
  {
    title: "Personalized Service",
    description:
      "We understand that choosing the perfect scent is a deeply personal experience. Our team of fragrance experts is always ready to assist you in finding a fragrance that complements your personality and style. Whether you're exploring new scents or seeking to rediscover an old favorite, we're here to guide you every step of the way.",
  },
];

export default function ServicesSec() {
  return (
    <div className="px-2 py-20 container mx-auto">
      <Heading>Our Services</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service?.title} service={service} />
        ))}
      </div>
    </div>
  );
}
