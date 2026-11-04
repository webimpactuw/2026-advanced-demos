"use client";

import { useState } from "react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const [message, setMessage] = useState("");

  // Send the order to OUR checkout API
  async function handleBuy() {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: product.slug, quantity: 1 }),
      });
      const data = await res.json();
      setMessage(data.message || data.error);
    } catch {
      setMessage("Checkout API isn't built yet!");
    }
  }

  return (
    <div className="card">
      {product.imageUrl ? (
        <Image src={product.imageUrl} alt={product.name} width={400} height={400} className="photo" />
      ) : (
        <div className="photo placeholder">No image yet</div>
      )}
      <h2>{product.name}</h2>
      <p className="price">${product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleBuy} disabled={!product.inStock}>
        {product.inStock ? "Buy" : "Sold out"}
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ProductCard;
