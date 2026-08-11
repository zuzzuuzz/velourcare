import HowWeTreat from "@/src/views/HowWeTreat";
import { breadcrumbSchema, medicalProcedureSchema, pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata(
  "How We Treat — Digital Orthodontic Planning & Aligner Process",
  "Explore the Vélourcare Ortho digital diagnostics, OnyxCeph 3D setup, and clear aligner fabrication process.",
  "/how-we-treat"
);

export default function Page() {
  const procedure = medicalProcedureSchema(
    "Digital Orthodontic Diagnostics & Clear Aligner Treatment",
    "Comprehensive 3D intraoral scanning, CBCT analysis, OnyxCeph treatment simulation, and staged aligner fabrication.",
    "/how-we-treat"
  );

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "How We Treat", path: "/how-we-treat" },
  ]);

  return (
    <>
      <HowWeTreat />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedure) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  );
}

