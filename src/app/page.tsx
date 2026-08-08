import HomePage from "@/src/components/HomePage";
import { pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata("Vélourcare Ortho — Clear Aligners, Digital Orthodontic Planning & Care", "Clear aligner treatment with digital planning, clinical supervision, and thoughtful aftercare.", "/", true);

export default function Page() {
  return <HomePage />;
}
