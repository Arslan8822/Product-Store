import type { Product } from "@/types/product";

const API_URL = "https://fakestoreapi.com";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await response.json();

  return products;
}

export async function getProduct(
  id: string
): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id }`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  const product: Product = await response.json();

  return product;
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${API_URL}/products/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: string[] = await response.json();

  return categories;
}