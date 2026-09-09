import { notFound } from "next/navigation";

import ProductDetails from"@/components/products/ProductDetails";
import { getProduct } from "@/lib/api/products";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  try {
    const product = await getProduct(id);

    return (
      <section className="mx-auto max-w-7xl px-4 py-10">
        <ProductDetails product={product} />
      </section>
    );
  } catch {
    notFound();
  }
}