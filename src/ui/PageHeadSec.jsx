import bgImg from "../assets/background/contact-bg.png";

export default function PageHeadSec({ children }) {
  return (
    <div className={`bg-[url(${bgImg})] px-8 py-24 bg-no-repeat bg-cover`}>
      {children}
    </div>
  );
}
