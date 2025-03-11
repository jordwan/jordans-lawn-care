import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterComponent";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Noto_Sans({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jordan's Lawn Care",
  description: "Kelowna's BEST Lawn Care Provider. Servicing Central Okanagan.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/ms-icon-144x144.png", sizes: "144x144", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Navbar />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <Footer />
      </body>
    </html>
  );
}
