import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jordan's Lawn Care",
  description: "Kelowna's BEST Lawn Care Provider. Servicing the Okanagan.",
  icons: {
    icon: "/favicon.ico", // Favicon for browsers
    apple: "/apple-touch-icon.png", // Apple Touch Icon,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
