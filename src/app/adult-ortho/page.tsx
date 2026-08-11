import AdultOrtho from "@/src/views/AdultOrtho";
import { breadcrumbSchema, medicalProcedureSchema, pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata(
  "Adult Orthodontics & Discrete Clear Aligners",
  "Discrete, doctor-supervised clear aligner treatment for adults seeking precision smile alignment.",
  "/adult-ortho"
);

export default function Page() {
  const procedure = medicalProcedureSchema(
    "Adult Clear Aligner Orthodontic Treatment",
    "Discrete orthodontic correction, crowding resolution, and bite optimization engineered for adult teeth.",
    "/adult-ortho"
  );

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Adult Orthodontics", path: "/adult-ortho" },
  ]);

  return (
    <>
      <AdultOrtho />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedure) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  );
}

