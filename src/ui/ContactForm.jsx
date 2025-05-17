import Input from "./Input";
import Button from "./Button";
import FormRow from "./FormRow";

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormRow label="Name" error={""}>
        <Input id="name" type="text" />
      </FormRow>
      <FormRow label="Email" error={""}>
        <Input id="email" type="email" />
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
