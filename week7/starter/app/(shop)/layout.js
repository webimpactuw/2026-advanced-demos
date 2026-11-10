// Every shop page gets the navbar. (Studio at /studio doesn't, it has its own.)
import NavBar from "./components/NavBar";
import "./globals.css";

export default function ShopLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
