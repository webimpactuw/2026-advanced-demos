import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "The Bug Band",
  description: "Tonight only.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar
          title="The Bug Band"
          leftLink="Tour"
          rightLink="Merch"
        />
        {children}
      </body>
    </html>
  );
}
