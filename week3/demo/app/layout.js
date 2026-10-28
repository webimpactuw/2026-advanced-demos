import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Say No",
  description: "The answer is no.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
