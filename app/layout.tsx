import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://carrya.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CARRYA - Upcycled Denim Totebag",
  description:
    "CARRYA merubah material jeans repurposed berkualitas tinggi menjadi totebag fungsional, stylish, dan tahan lama.",
  keywords: [
    "CARRYA",
    "totebag denim",
    "upcycled denim",
    "tas daur ulang",
    "sustainable fashion",
  ],
  openGraph: {
    title: "CARRYA - Upcycled Denim Totebag",
    description:
      "Totebag denim upcycle buatan tangan yang fungsional, stylish, dan berkelanjutan.",
    url: siteUrl,
    siteName: "CARRYA",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CARRYA - Upcycled Denim Totebag",
    description:
      "Totebag denim upcycle buatan tangan yang fungsional, stylish, dan berkelanjutan.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "fashion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${syne.variable} ${jakarta.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="antialiased selection:bg-denim-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
