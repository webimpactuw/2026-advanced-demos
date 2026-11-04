"use client";

import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the products from OUR API (which gets them from Sanity)
  useEffect(() => {
    fetch("/api/products")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="page">
      <h1>Shop</h1>

      {loading && <p>Loading...</p>}

      {!loading && products.length === 0 && (
        <p className="empty">
          No products yet. Is <code>GET /api/products</code> built? Is there anything in Sanity?
        </p>
      )}

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
