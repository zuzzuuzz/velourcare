import KidsOrtho from "@/src/views/KidsOrtho";
import { breadcrumbSchema, medicalProcedureSchema, pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata(
  "Kids Orthodontics & Interceptive Phase-1 Treatment",
  "Early orthodontic assessment and clear aligner options designed specifically for growing smiles.",
  "/kids-ortho"
);

export default function Page() {
  const procedure = medicalProcedureSchema(
    "Pediatric Clear Aligner & Early Orthodontics",
    "Phase-1 early intervention orthodontic treatment for arch guidance, spacing, and tooth alignment in growing children.",
    "/kids-ortho"
  );

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Kids Orthodontics", path: "/kids-ortho" },
  ]);

  return (
    <>
      <KidsOrtho />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedure) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  );
}

