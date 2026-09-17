import type { Product } from "@/types/product";

const API_URL = "https://dummyjson.com";

interface DummyJsonProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  thumbnail: string;
  reviews?: unknown[];
}

interface DummyJsonProductsResponse {
  products: DummyJsonProduct[];
}

function normalizeProduct(product: DummyJsonProduct): Product {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.thumbnail,
    rating: {
      rate: product.rating,
      count: product.reviews?.length ?? 0,
    },
  };
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products?limit=0`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: DummyJsonProductsResponse = await response.json();

  return data.products.map(normalizeProduct);
}

export async function getProduct(
  id: string
): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("Product not found");
  }

  const product: DummyJsonProduct = await response.json();

  return normalizeProduct(product);
}

export async function getCategories(): Promise<string[]> {
  const products = await getProducts();

  const categories = [...new Set(products.map((product) => product.category))];

  return categories;
}