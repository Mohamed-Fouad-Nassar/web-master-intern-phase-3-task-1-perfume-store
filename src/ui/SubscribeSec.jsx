import Button from "./Button";
import Heading from "./Heading";

export default function SubscribeSec() {
  return (
    <section className="px-2 py-20">
      <div className="container mx-auto">
        <Heading>Subscribe to Our Newsletter</Heading>
        <p className="-mt-2 text-sm text-white/90 text-center">
          Receive Updates on New Arrivals and Special Promotions!
        </p>

        <div className="mt-10 w-[80%] max-w-[600px] mx-auto p-2 border border-stone-400 rounded-lg">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2 flex-col sm:flex-row items-center"
          >
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full py-2 px-4 rounded outline-none bg-stone-600 sm:bg-transparent focus:placeholder:text-transparent"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
