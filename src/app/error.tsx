"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-125 max-w-7xl flex-col items-center justify-center px-4 text-center">
      <h2 className="text-3xl font-bold">
        Something went wrong
      </h2>

      <p className="mt-3 text-gray-500">
        We couldn't load this page. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-md bg-black px-5 py-3 text-white hover:bg-gray-800"
      >
        Try Again
      </button>
    </div>
  );
}