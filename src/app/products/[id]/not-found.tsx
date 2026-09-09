import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="mx-auto flex min-h-125 max-w-7xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold">
        Product Not Found
      </h1>

      <p className="mt-3 text-gray-500">
        The product you are looking for does not exist.
      </p>

      <Link
        href="/products"
        className="mt-6 rounded-md bg-black px-5 py-3 text-white hover:bg-gray-800"
      >
        Back to Products
      </Link>
    </div>
  );
}