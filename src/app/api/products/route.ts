import { NextResponse } from "next/server";

import { getProducts } from "@/lib/api/products";

export async function GET() {
  try {
    const products = await getProducts();

    return NextResponse.json(products);
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 502 }
    );
  }
}