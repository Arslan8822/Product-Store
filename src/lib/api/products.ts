import { ref, get } from "firebase/database";

import { database } from "@/lib/firebase";
import type { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const productsRef = ref(database, "products");

  const snapshot = await get(productsRef);

  if (!snapshot.exists()) {
    return [];
  }

  const data = snapshot.val();

  const products: Product[] = Object.values(data);

  return products;
}

export async function getProduct(
  id: string
): Promise<Product | null> {
  const productRef = ref(
    database,
    `products/${id}`
  );

  const snapshot = await get(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  const product: Product = snapshot.val();

  return product;
}

export async function getCategories(): Promise<string[]> {
  const products = await getProducts();

  const categories = products.map(
    (product) => product.category
  );

  return [...new Set(categories)];
}