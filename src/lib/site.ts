import type { Metadata } from "next";

export const siteName = "Vélourcare Ortho";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.xn--vlourcare-b4a.com").replace(/\/$/, "");
export const siteDescription = "Vélourcare Ortho provides doctor-led digital orthodontic planning, OnyxCeph 3D setup, and clear aligner support for clinical partners and patients.";

export const contactEmail = "info@vélourcare.com";
export const contactPhone = "+923264755645";

export const siteKeywords = [
  "digital orthodontic planning",
  "clear aligners",
  "OnyxCeph 3D treatment planning",
  "orthodontic clear aligners",
  "invisalign alternative",
  "kids orthodontics",
  "adult clear aligners",
  "orthodontic lab services",
  "Vélourcare Ortho"
];

export function pageMetadata(title: string, description: string, path = "/", absolute = false): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const titleValue = absolute ? { absolute: title } : title;
  const defaultOgImage = `${siteUrl}/images/logo-emblem-square.png`;

  return {
    title: titleValue,
    description,
    keywords: siteKeywords,
    alternates: { canonical },
    openGraph: {
      title: typeof titleValue === "string" ? titleValue : titleValue.absolute,
      description,
      url: canonical,
      siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: defaultOgImage,
          width: 512,
          height: 512,
          alt: `${siteName} Logo`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof titleValue === "string" ? titleValue : titleValue.absolute,
      description,
      images: [defaultOgImage],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo-emblem-square.png`,
    image: `${siteUrl}/images/logo-emblem-square.png`,
    description: siteDescription,
    telephone: contactPhone,
    email: contactEmail,
    priceRange: "$$",
    sameAs: [
      "https://instagram.com/velourcare",
      "https://linkedin.com/company/velourcare",
      "https://facebook.com/velourcare"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nawab Town E Block",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.4697",
      longitude: "74.2728",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactPhone,
      contactType: "customer service",
      email: contactEmail,
      availableLanguage: ["English", "Urdu"],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}

export function medicalProcedureSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${new URL(path, siteUrl).toString()}#webpage`,
    url: new URL(path, siteUrl).toString(),
    name: name,
    description: description,
    about: {
      "@type": "MedicalProcedure",
      name: name,
      procedureType: "Orthodontic Treatment",
      description: description,
    },
    provider: {
      "@type": "Dentist",
      name: siteName,
      url: siteUrl,
    },
  };
}


