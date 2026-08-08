import TermsOfService from "@/src/views/TermsOfService";
import { pageMetadata } from "@/src/lib/site";
export const metadata = pageMetadata("Terms & Conditions", "Read the Vélourcare Ortho terms and conditions of service.", "/terms-of-service");
export default function Page() { return <TermsOfService />; }
