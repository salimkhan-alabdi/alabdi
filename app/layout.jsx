import "./globals.css";

export const metadata = {
  title: "Dev Portfolio",
  description: "Frontend developer portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
