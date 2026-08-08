import type { Metadata } from "next";
import "@/src/index.css";
import SiteShell from "@/src/components/SiteShell";
import { organizationSchema, siteDescription, siteName, siteUrl } from "@/src/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Vélourcare Ortho | Digital Orthodontic Planning & Clear Aligner Care", template: `%s | ${siteName}` },
  description: siteDescription,
  applicationName: siteName,
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
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      </body>
    </html>
  );
}
