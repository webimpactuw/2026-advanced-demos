import { NextResponse } from "next/server";
import { client } from "@/sanity/client";
import { PRODUCTS_QUERY } from "@/sanity/queries";

// GET /api/products — every product from Sanity
export async function GET() {
  const products = await client.fetch(PRODUCTS_QUERY);
  return NextResponse.json(products);
}
