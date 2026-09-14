import { getProducts } from "@/lib/api/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              {product.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}