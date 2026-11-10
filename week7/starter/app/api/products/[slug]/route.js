import { NextResponse } from "next/server";
import { client } from "@/sanity/client";
import { PRODUCT_QUERY } from "@/sanity/queries";

// GET /api/products/[slug] — one product, or 404
export async function GET(_request, { params }) {
  const { slug } = await params;
  const product = await client.fetch(PRODUCT_QUERY, { slug });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
