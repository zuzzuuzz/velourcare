import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/src/index.css";
import SiteShell from "@/src/components/SiteShell";
import { organizationSchema, siteDescription, siteKeywords, siteName, siteUrl } from "@/src/lib/site";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Vélourcare Ortho | Digital Orthodontic Planning & Clear Aligner Care", template: `%s | ${siteName}` },
  description: siteDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  authors: [{ name: "Vélourcare Ortho Clinical Team", url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Vélourcare Ortho | Digital Orthodontic Planning & Clear Aligner Care",
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/logo-emblem-square.png`,
        width: 512,
        height: 512,
        alt: `${siteName} Logo`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vélourcare Ortho | Digital Orthodontic Planning & Clear Aligner Care",
    description: siteDescription,
    images: [`${siteUrl}/images/logo-emblem-square.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  other: { "theme-color": "#F7F5EF" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body>
        <SiteShell>{children}</SiteShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      </body>
    </html>
  );
}

