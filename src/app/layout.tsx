import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jordan's Lawn Care",
  description: "Kelowna's BEST Lawn Care Provider",
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
