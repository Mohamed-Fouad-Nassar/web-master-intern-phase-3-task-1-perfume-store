import { Loader } from "lucide-react";

export default function Spinner({ size = 10 }) {
  return <Loader className={`animate-spin size-${size}`} />;
}
