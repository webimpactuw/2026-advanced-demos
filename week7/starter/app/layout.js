export const metadata = {
  title: "Shop",
  description: "A super simple shop powered by Sanity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
