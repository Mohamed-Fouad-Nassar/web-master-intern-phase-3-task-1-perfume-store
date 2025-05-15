import { useNavigate } from "react-router";

import Button from "../ui/Button";

export default function Error() {
  const navigate = useNavigate();

  return (
    <main className="px-2 py-40 h-screen text-center flex justify-center items-center">
      <div className="container mx-auto space-y-6">
        <span className="text-6xl md:text-9xl text-main font-bold">404</span>
        <h1 className="text-2xl md:text-4xl">Something went wrong</h1>
        <p>The page you are looking for does not exist</p>
        <div className="flex justify-center items-center gap-4">
          <Button
            variation="outline"
            onClick={() => navigate(-1, { replace: true })}
          >
            Go Back
          </Button>
          <Button as="link" href="/" replace={true}>
            Back to home
          </Button>
        </div>
      </div>
    </main>
  );
}
