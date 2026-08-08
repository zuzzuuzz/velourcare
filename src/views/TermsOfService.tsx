import { Shield, Scale, FileText } from "lucide-react";
import Reveal from "../components/Reveal";

export default function TermsOfService() {
  return (
    <div id="terms-of-service-page" className="pb-20 bg-white space-y-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Legal scales background"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="layout-container relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2.5 bg-white/5 text-white/70 px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-sans font-medium uppercase tracking-[0.2em]">
            <Scale className="w-3 h-3" />
            <span>Legal & Compliance Division</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Terms & Conditions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Official Terms & Conditions of Service for Velourcare Ortho
          </p>
        </Reveal>
      </section>

      {/* Legal Text Content */}
      <div className="max-w-3xl mx-auto px-4 text-left font-sans text-slate-600 text-sm sm:text-base leading-relaxed space-y-8">
        
        {/* Preamble */}
        <p>
          <strong>Effective Date:</strong> August 8, 2026<br/>
          <strong>Last Revised:</strong> August 8, 2026<br/>
          <strong>Domain:</strong> vélourcare.com<br/>
          <strong>Authority:</strong> Legal & Compliance Division
        </p>

        <p>
          These Terms & Conditions ("Terms", "Agreement") govern your access to and use of the website located at vélourcare.com (including subdomains such as velourcare-ortho.vercel.app, collectively the "Site") and all digital orthodontic planning, OnyxCeph³ 3D staging, model production, and clear aligner fabrication services provided by Velourcare Ortho ("Velourcare Ortho", "we", "us", or "our") (collectively, the "Services").
        </p>

        <p>
          By accessing the Site, registering an account, submitting diagnostic case files, or ordering aligners, you ("Practitioner", "User", "Client") agree to be legally bound by these Terms. If you do not agree, you must immediately discontinue use of the Site and Services.
        </p>

        {/* Sections */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">1. SCOPE OF SERVICES & CLINICAL RESPONSIBILITY</h2>
          <p>
            <strong>Digital Orthodontic Laboratory Operations:</strong> Velourcare Ortho functions as a specialized digital orthodontic laboratory providing 3D diagnostic treatment setups staged via OnyxCeph³ software, 3D printing models, thermoformed clear aligners, and auxiliary retainers based on digital data submitted by licensed practitioners.
          </p>
          <p>
            <strong>Clinical Autonomy & Duty of Care:</strong> Velourcare Ortho is a technical manufacturing and digital staging provider. We do not practice dentistry or medicine. All OnyxCeph³ tooth movement trajectories and virtual staging setups are technical suggestions generated for review by the treating practitioner. The referring practitioner retains sole responsibility for reviewing, verifying, and approving all OnyxCeph³ 3D treatment setups prior to aligner fabrication. Physical manufacturing will not commence until formal setup approval is granted via the Partner Portal.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">2. PRACTITIONER ELIGIBILITY & ACCOUNT SECURITY</h2>
          <p>
            <strong>Licensure Verification:</strong> Access to the Velourcare Partner Portal and clinical ordering systems is restricted to licensed dentists, orthodontists, and authorized dental clinics. We reserve the right to request proof of professional licensure (e.g., PMC/PMDC registration) prior to fulfilling orders.
          </p>
          <p>
            <strong>Account Safeguards:</strong> You are responsible for maintaining the confidentiality of your account credentials and multi-factor authentication details. Notify us immediately at info@vélourcare.com if you suspect unauthorized access.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">3. CASE SUBMISSIONS & DIAGNOSTIC DATA STANDARDS</h2>
          <p>To initiate a clear aligner case, practitioners must upload complete, high-quality diagnostic datasets, including:</p>
          <ul className="list-decimal pl-5 space-y-2">
            <li>Upper and lower arch 3D intraoral scans (STL / PLY format) compatible with OnyxCeph³ import.</li>
            <li>Diagnostic radiographs (panoramic / cephalometric / CBCT).</li>
            <li>High-resolution extraoral and intraoral clinical photographs.</li>
            <li>Specific prescription details (chief complaints, IPR limitations, attachment preferences).</li>
          </ul>
          <p>
            Velourcare Ortho is not liable for fit issues, tracking failures, or delays resulting from distorted intraoral impressions, inaccurate digital scans, incomplete clinical photos, or missing clinical history.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">4. PAYMENT, BILLING & CANCELLATION TERMS</h2>
          <p>
            <strong>Pricing & Invoicing:</strong> All fees for OnyxCeph³ 3D treatment setups, aligner packages, mid-course refinements, and replacement retainers are quoted at the time of order placement.
          </p>
          <p>
            <strong>Payment Terms:</strong> Setup fees and production charges must be paid via our secure PCI-DSS compliant payment gateways or agreed clinical credit terms before physical manufacturing begins.
          </p>
          <p>
            <strong>Order Cancellations:</strong> Case setups may be modified or canceled prior to final OnyxCeph³ setup approval, subject to an administrative design fee. Once an OnyxCeph³ 3D setup is approved and aligners enter production, orders cannot be canceled or refunded.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">5. REFINEMENTS, REPLACEMENTS & WARRANTY POLICY</h2>
          <p>
            <strong>Mid-Course Refinements:</strong> If tooth movement strays from the initial OnyxCeph³ staging setup during treatment, practitioners may request a refinement subject to their tier package parameters. Refinements require new intraoral scans and photos to re-align the model in OnyxCeph³.
          </p>
          <p>
            <strong>Manufacturing Warranty:</strong> Velourcare Ortho warrants that clear aligners are fabricated strictly according to approved OnyxCeph³ parameters and are free from physical defects. Defects or fit failures must be reported within 14 business days of receipt for free replacement.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">6. INTELLECTUAL PROPERTY & DIGITAL ASSETS</h2>
          <p>
            All software, algorithms, 3D setup viewer interfaces, branding assets, logos, website layout, and trade secrets associated with vélourcare.com are the exclusive property of Velourcare Ortho. Proprietary OnyxCeph³ staging files, digital movement trajectories, and custom 3D model setups remain our intellectual property.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">7. DATA PRIVACY & CLINICAL SECURITY</h2>
          <p>
            All personal and clinical health data submitted to Velourcare Ortho is processed in strict compliance with our Privacy Policy, the Prevention of Electronic Crimes Act (PECA), and simple encryption standards (AES for data at rest and TLS for data in transit). We employ a strict Clinical Anonymization Protocol: production technicians access 3D models using anonymized Case Reference IDs.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">8. LIMITATION OF LIABILITY & INDEMNIFICATION</h2>
          <p>
            To the maximum extent permitted by applicable law, Velourcare Ortho shall not be liable for adverse clinical outcomes, root resorption, periodontal compromise, or relapse resulting from setups approved by the practitioner. In no event shall Velourcare Ortho's total aggregate liability exceed the total fee paid by the practitioner for the specific case in dispute.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">9. GOVERNING LAW & DISPUTE RESOLUTION</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Disputes shall be submitted to binding arbitration in Lahore, Pakistan, in accordance with applicable arbitration laws.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">10. CONTACT INFORMATION</h2>
          <p>
            Velourcare Ortho - Legal & Compliance Division<br/>
            Official Website: vélourcare.com<br/>
            Email Contact: info@vélourcare.com
          </p>
        </div>
        
        <div className="pt-8 text-center text-xs text-slate-400">
          <p>© 2026 Velourcare Ortho. All rights reserved. Strictly confidential.</p>
        </div>
      </div>
    </div>
  );
}
