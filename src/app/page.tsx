import Link from "next/link";

import ProductCard from "@/components/products/ProductCard";
import { getProducts } from "@/lib/api/products";

export const metadata = {
  title: "Product Store",
  description: "Discover our featured products.",
};

export default async function HomePage() {
  const products = await getProducts();

  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="mx-auto flex min-h-112.5 max-w-7xl items-center px-4 py-16">
          <div className="max-w-2xl">
            <p className="mb-10 text-sm font-bold uppercase  text-green-500">
              Welcome to Product Store
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-blue-500 sm:text-5xl lg:text-6xl">
              Find products you will love.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Explore our collection of quality products,
              discover your favorites, and add your favorite
              items to your cart.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="rounded-md bg-black px-6 py-3 text-center font-medium text-white hover:bg-gray-800"
              >
                Browse Products
              </Link>

              <Link
                href="/favorites"
                className="rounded-md border text-black bg-white px-6 py-3 text-center font-medium hover:bg-gray-50"
              >
                View Favorites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-blue-400">
              Our Collection
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              Featured Products
            </h2>

            <p className="mt-2  font-medium text-blue-400">
              Check out some of our popular products.
            </p>
          </div>

          <Link
            href="/products"
            className="font-medium underline"
          >
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}