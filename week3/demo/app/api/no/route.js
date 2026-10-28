const FALLBACK = "No. (Even the No API said no.)";

export async function GET() {
  try {
    const res = await fetch(`${process.env.NAAS_URL}/no`);
    if (!res.ok) throw new Error(`NaaS returned ${res.status}`);
    const data = await res.json();
    return Response.json({ reason: data.reason });
  } catch {
    return Response.json({ reason: FALLBACK });
  }
}
