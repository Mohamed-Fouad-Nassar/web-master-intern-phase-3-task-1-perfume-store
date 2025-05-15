import FormRow from "./FormRow";
import Button from "./Button";

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormRow label="Name" error={""}>
        <input
          id="name"
          type="text"
          className="px-2.5 py-1.5 border border-stone-600 rounded outline-none focus:border-main"
        />
      </FormRow>
      <FormRow label="Email" error={""}>
        <input
          id="email"
          type="email"
          className="px-2.5 py-1.5 border border-stone-600 rounded outline-none focus:border-main"
        />
      </FormRow>
      <FormRow label="Message" error={""}>
        <textarea
          id="message"
          rows={5}
          className="px-2.5 py-1.5 border border-stone-600 rounded outline-none focus:border-main"
        />
      </FormRow>

      <Button type="submit" className="block ms-auto">
        Submit
      </Button>
    </form>
  );
}
