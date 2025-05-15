import Button from "./Button";
import FormRow from "./FormRow";

export default function LoginForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <FormRow label="Email" error={""}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="px-2.5 py-1.5 border border-stone-600 rounded outline-none focus:border-main"
        />
      </FormRow>
      <FormRow label="Password" error={""}>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          className="px-2.5 py-1.5 border border-stone-600 rounded outline-none focus:border-main"
        />
      </FormRow>
      <Button type="submit" className="block w-full">
        Log in
      </Button>
    </form>
  );
}
