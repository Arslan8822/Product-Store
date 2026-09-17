import { ref, set } from "firebase/database";

import { database } from "@/lib/firebase";
import type { Product } from "@/types/product";

export async function syncProducts(products: Product[]) {
  const productsById = Object.fromEntries(
    products.map((product) => [String(product.id), product])
  );

  await set(ref(database, "products"), productsById);
}