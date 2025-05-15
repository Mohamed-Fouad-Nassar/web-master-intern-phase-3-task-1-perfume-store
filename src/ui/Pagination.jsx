import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "./Button";

export default function Pagination() {
  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <Button variation="outline" onClick={() => {}}>
        <ChevronLeft />
      </Button>

      <div className="border border-stone-600 rounded px-4 py-1.5">
        <span>1</span> / <span className="font-bold">3</span>
      </div>

      <Button variation="outline" onClick={() => {}}>
        <ChevronRight />
      </Button>
    </div>
  );
}
