import LoginForm from "../ui/LoginForm";

export default function Login() {
  return (
    <>
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
        Log in to your account
      </h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />

        <p className="mt-10 text-center text-sm/6 text-white/80">
          Not a member?{" "}
          <a href="#" className="font-semibold text-main hover:text-main/90">
            Start a 14 day free trial
          </a>
        </p>
        <p className="mt-2 text-center text-sm/6 text-white/80">
          Forget your password?{" "}
          <a href="#" className="font-semibold text-main hover:text-main/90">
            Reset your password
          </a>
        </p>
      </div>
    </>
  );
}
