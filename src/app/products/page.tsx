import ProductBrowser from "@/components/products/ProductBrowser";
import {
  getCategories,
  getProducts,
} from "@/lib/api/products";

export const metadata = {
  title: "Products | Mini Product Store",
  description: "Browse all products",
};

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <p className="mt-2 text-gray-600">
          Browse our collection of products.
        </p>
      </div>

      <ProductBrowser
        products={products}
        categories={categories}
      />
    </section>
  );
}