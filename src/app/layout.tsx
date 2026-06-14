import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Terry Chen",
  description:
    "Terry Chen is a Senior Software Engineer building AI agents, harnesses, and product-minded systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
