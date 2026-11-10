import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">Shop</Link>
      <div className="links">
        <Link href="/">Home</Link>
        <a href="/docs" target="_blank">API Docs</a>
        <a href="/studio" target="_blank">Studio</a>
      </div>
    </nav>
  );
};

export default NavBar;
