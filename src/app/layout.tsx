import type { Metadata } from "next";
import { Kreon } from "next/font/google";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Terry Chen",
  description: "Terry Chen's 2024 Portfolio",
};

const kreon = Kreon({
  variable: "--font-kreon",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kreon.variable}>{children}</body>
    </html>
  );
}
