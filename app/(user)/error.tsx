"use client";
import { Button } from "@/components/ui/button";

// Error boundaries must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center space-y-3">
      <h2>Something went wrong! {error.message}</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
