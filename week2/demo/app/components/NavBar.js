import Link from "next/link";

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">{props.title}</Link>
      <div className="links">
        <Link href="/tour">{props.leftLink}</Link>
        <Link href="/merch">{props.rightLink}</Link>
      </div>
    </nav>
  );
};

export default NavBar;
