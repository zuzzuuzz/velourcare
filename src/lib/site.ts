import type { Metadata } from "next";

export const siteName = "Vélourcare Ortho";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.xn--vlourcare-b4a.com").replace(/\/$/, "");
export const siteDescription = "Vélourcare Ortho provides doctor-led digital orthodontic planning and clear aligner support for clinical partners and patients.";

export const contactEmail = "info@vélourcare.com";

export function pageMetadata(title: string, description: string, path = "/", absolute = false): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const titleValue = absolute ? { absolute: title } : title;
  return {
    title: titleValue,
    description,
    alternates: { canonical },
    openGraph: { 
      title, 
      description, 
      url: canonical, 
      siteName, 
      type: "website",
      images: [
        {
          url: "/images/logo-emblem-square.png",
          width: 512,
          height: 512,
          alt: "Vélourcare Ortho Logo",
        }
      ]
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteName,
    url: siteUrl,
    telephone: "+923294053244",
    email: contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nawab Town E Block",
    },
  };
}
