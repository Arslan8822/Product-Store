import { NextResponse } from "next/server";

import { getProduct } from "@/lib/api/products";

interface ProductRouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(
  _request: Request,
  { params }: ProductRouteContext
) {
  const { id } = await params;

  try {
    const product = await getProduct(id);

    return NextResponse.json(product);
  } catch {
    return NextResponse.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }
}