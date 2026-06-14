import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Terry Chen",
  description: "Terry Chen's 2024 Portfolio",
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
