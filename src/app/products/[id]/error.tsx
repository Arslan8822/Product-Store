"use client";

import { useEffect } from "react";

interface ProductErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ProductError({
  error,
  reset,
}: ProductErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-100 max-w-7xl flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-bold">
        Unable to load product.
      </h2>

      <p className="mt-2 text-gray-500">
        Something went wrong while loading this product.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-md bg-black px-5 py-3 text-white"
      >
        Try Again
      </button>
    </div>
  );
}