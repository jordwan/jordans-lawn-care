import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterComponent";
import { RequestQuoteBar } from "@/components/shared/RequestQuoteBar";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Noto_Sans({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const siteUrl = "https://jordanslawncare.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jordan's Lawn Care | Kelowna Lawn Care Specialists",
    template: "%s | Jordan's Lawn Care",
  },
  description:
    "Jordan's Lawn Care delivers dependable lawn maintenance, landscaping, and strata services across Kelowna and the Central Okanagan.",
  keywords: [
    "Kelowna lawn care",
    "Kelowna landscaping",
    "Okanagan lawn maintenance",
    "strata lawn services",
    "Jordan's Lawn Care",
  ],
  authors: [{ name: "Jordan's Lawn Care" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jordan's Lawn Care | Kelowna Lawn Care Specialists",
    description:
      "Jordan's Lawn Care keeps homes and strata properties lush with eco-friendly maintenance throughout Kelowna and the Central Okanagan.",
    url: siteUrl,
    siteName: "Jordan's Lawn Care",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Freshly manicured Kelowna property maintained by Jordan's Lawn Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan's Lawn Care | Kelowna Lawn Care Specialists",
    description:
      "Trusted lawn care team for Kelowna homeowners and strata communities. Weekly maintenance, seasonal cleanups, and more.",
    images: ["/og-default.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/android-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-icon-144x144.png", sizes: "144x144", type: "image/png" },
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
        <RequestQuoteBar />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
        <Footer />
      </body>
    </html>
  );
}
