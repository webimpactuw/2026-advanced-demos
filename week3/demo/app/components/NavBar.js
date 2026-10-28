import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">Say No</Link>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/ask">Ask</Link>
      </div>
    </nav>
  );
};

export default NavBar;
