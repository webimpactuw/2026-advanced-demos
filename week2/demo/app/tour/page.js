import Member from "../components/Member";

export default function Tour() {
  return (
    <main className="page">
      <h1>Tour</h1>
      <p>We play anywhere a crumb has fallen.</p>
      <div className="row">
        <Member label="Tuesday" name="The Drainpipe" detail="under the sink" />
        <Member label="Friday" name="A succulent's funeral" detail="bring a leaf" />
      </div>
    </main>
  );
}
