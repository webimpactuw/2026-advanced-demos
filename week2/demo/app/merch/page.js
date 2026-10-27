import Member from "../components/Member";

export default function Merch() {
  return (
    <main className="page">
      <h1>Merch</h1>
      <p>One size. Fits a beetle.</p>
      <div className="row">
        <Member label="$4" name="Autographed antenna" detail="one size" />
        <Member label="$2" name="Tiny keyboard sticker" detail="fits a beetle" />
      </div>
    </main>
  );
}
