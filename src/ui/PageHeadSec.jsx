export default function PageHeadSec({ children }) {
  return (
    <div
      className={`bg-[url(/src/assets/background/contact-bg.png)] px-8 py-24 bg-no-repeat bg-cover`}
    >
      {children}
    </div>
  );
}
