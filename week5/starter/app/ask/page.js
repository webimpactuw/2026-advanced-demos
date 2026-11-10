"use client";

import { useState } from "react";

export default function Ask() {
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    setLoading(true);
    const res = await fetch("/api/no");
    const data = await res.json();
    setReason(data.reason);
    setLoading(false);
  }

  return (
    <main className="page">
      <h1>Ask me anything.</h1>
      <div className="ask">
        <input placeholder="Can you help me move on Saturday?" />
        <button onClick={handleAsk} disabled={loading}>
          {loading ? "Thinking..." : "Ask"}
        </button>
        {reason && <p className="reason">{reason}</p>}
      </div>
    </main>
  );
}
