import Invisalign from "@/src/views/Invisalign";
import { breadcrumbSchema, medicalProcedureSchema, pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata(
  "Invisalign & Clear Aligner Solutions",
  "Learn about doctor-led clear aligner treatment options designed around comfort, clinical precision, and digital 3D setup.",
  "/invisalign"
);

export default function Page() {
  const procedure = medicalProcedureSchema(
    "Invisalign & Doctor-Led Clear Aligner Systems",
    "High-precision clear aligner orthodontic therapy planned with digital 3D software and clinical supervision.",
    "/invisalign"
  );

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Invisalign Solutions", path: "/invisalign" },
  ]);

  return (
    <>
      <Invisalign />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedure) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  );
}

