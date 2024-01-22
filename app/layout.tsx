import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TiTok shop clone",
  description: "A clone of the official tiktok shop website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  );
}
