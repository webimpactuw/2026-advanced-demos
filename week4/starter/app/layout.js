import "./globals.css";

export const metadata = {
  title: "The Bug Band",
  description: "Tonight only.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
