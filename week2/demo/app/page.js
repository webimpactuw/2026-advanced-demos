import Member from "./components/Member";

export default function Home() {
  return (
    <main className="page">
      <h1>Tonight only</h1>
      <div className="row">
        <Member label="Ant" name="Antoinette" detail="drums" />
        <Member label="Beetle" name="Beetlejuice" detail="bass" />
        <Member label="Moth" name="Mothilda" detail="tiny keyboard" />
      </div>
    </main>
  );
}
