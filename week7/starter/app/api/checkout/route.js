import { NextResponse } from "next/server";
import { client } from "@/sanity/client";
import { PRODUCT_QUERY } from "@/sanity/queries";

// POST /api/checkout — look up the real price in Sanity (don't trust the client)
export async function POST(request) {
  const body = await request.json();
  const { slug, quantity } = body;

  if (!slug || !quantity || quantity < 1) {
    return NextResponse.json({ error: "Need a slug and a quantity >= 1" }, { status: 400 });
  }

  const product = await client.fetch(PRODUCT_QUERY, { slug });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  if (!product.inStock) {
    return NextResponse.json({ error: "Sold out" }, { status: 400 });
  }

  const total = product.price * quantity;
  return NextResponse.json({
    message: `Ordered ${quantity}× ${product.name} for $${total}`,
    total,
  });
}
