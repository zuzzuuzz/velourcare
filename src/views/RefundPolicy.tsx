import { Shield, CreditCard, RefreshCw } from "lucide-react";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";

export default function RefundPolicy() {
  return (
    <div id="refund-policy-page" className="pb-20 bg-white space-y-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Financial agreement background"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="layout-container relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2.5 bg-white/5 text-white/70 px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-sans font-medium uppercase tracking-[0.2em]">
            <CreditCard className="w-3 h-3" />
            <span>Finance & Quality Assurance Division</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Refund Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Official Refund, Cancellation & Quality Guarantee Policy
          </p>
        </Reveal>
      </section>

      {/* Legal Text Content */}
      <RevealGroup className="max-w-3xl mx-auto px-4 text-left font-sans text-slate-600 text-sm sm:text-base leading-relaxed space-y-8">
        
        {/* Preamble */}
        <p>
          <strong>Effective Date:</strong> August 8, 2026<br/>
          <strong>Last Revised:</strong> August 8, 2026<br/>
          <strong>Domain:</strong> vélourcare.com<br/>
          <strong>Authority:</strong> Finance & Quality Assurance Division
        </p>

        <p>
          This Refund, Cancellation & Quality Guarantee Policy ("Policy") governs all financial transactions, order modifications, and replacement procedures for services and custom products provided by Velourcare Ortho ("Velourcare Ortho," "we," "us," or "our") to licensed practitioners and authorized clinical accounts ("Practitioner," "Client," "you").
        </p>

        {/* Sections */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">1. Custom Prescription Device Principle</h2>
          <p>
            Velourcare Ortho manufactures patient-specific clear aligners, 3D printing models, and retention appliances engineered exclusively to fit individual intraoral geometry according to practitioner-approved OnyxCeph³ 3D staging files. Consequently, all physical products and digital 3D setups represent custom-fabricated medical devices and are <strong>strictly non-refundable, non-exchangeable, and non-returnable once physical production has commenced.</strong>
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">2. Case Order Lifecycle & Cancellation Terms</h2>
          
          <h3 className="font-semibold text-slate-800 mt-4 mb-2">Order Lifecycle Milestones</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Stage 1 — Diagnostic Upload & OnyxCeph³ Staging:</strong> Case setup in progress. Cancellations permitted subject to administrative setup fee.</li>
            <li><strong>Stage 2 — Practitioner Setup Approval:</strong> Final OnyxCeph³ 3D staging verified. Orders locked for fabrication.</li>
            <li><strong>Stage 3 — Physical Production & Delivery:</strong> 3D printing and thermoforming initiated. Strictly non-cancellable and non-refundable.</li>
          </ul>

          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Cancellation Prior to 3D Setup Approval:</strong> If a case is canceled via the Partner Portal before the practitioner approves the OnyxCeph³ 3D movement setup, a full refund will be processed, minus a nominal administrative and 3D design fee.</li>
            <li><strong>Cancellation Post 3D Setup Approval:</strong> Once a practitioner approves the OnyxCeph³ 3D treatment plan, the order is immediately locked and transmitted to physical 3D printing and thermoforming lines. Cancellations or refunds are not permitted under any circumstances after setup approval.</li>
            <li><strong>On-Hold Cases:</strong> Unapproved cases left pending in practitioner portal accounts for over 60 consecutive days will be automatically archived. Reactivation may incur a minor administrative re-processing fee.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">3. Manufacturing Warranty & Quality Guarantee</h2>
          <p>
            Velourcare Ortho guarantees that all physical aligner trays conform strictly to the approved OnyxCeph³ 3D digital setup models and are fabricated using high-grade biocompatible thermoforming polymers free from material defects.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Defect Reporting Protocol:</strong> If an aligner arrives with a physical manufacturing defect (e.g., polymer delamination, sharp/ragged margins, incorrect tray sequencing, or physical warping), the practitioner must submit a defect report to info@vélourcare.com within 14 business days of delivery.</li>
            <li><strong>Verification Requirements:</strong> Reports must include the anonymized Case Reference ID, step number, and high-resolution clinical photographs or video illustrating the defect.</li>
            <li><strong>Replacement Remakes:</strong> Upon laboratory verification of a manufacturing error, Velourcare Ortho will remake and dispatch the defective aligners free of charge within standard laboratory priority timelines.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">4. Clinical Non-Tracking & Mid-Course Refinements</h2>
          <p>
            Discrepancies in clinical tooth movement, lack of compliance, attachment loss, or tracking deviations during clinical care do not qualify for financial refunds. Tracking deviations are managed through OnyxCeph³ refinement workflows:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Refinement Workflow:</strong> If tooth movement strays from the original 3D treatment trajectory, the practitioner may submit updated 3D intraoral scans and clinical photos to request a new OnyxCeph³ refinement setup.</li>
            <li><strong>Package Coverage:</strong> Refinement eligibility, complimentary setup allowances, and tray fabrication fees are determined by the specific aligner package tier selected during initial case submission.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">5. Refund Disbursement & Simple Security Terms</h2>
          <p>For eligible pre-approval cancellations or approved administrative adjustments:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Refunds will be credited to the original payment method or applied as an active account credit within <strong>7 to 10 business days</strong> following written confirmation from our Finance Division.</li>
            <li>All payment data transactions and account interactions are safeguarded using simple encryption standards (AES for data at rest and TLS for data in transit).</li>
            <li>Shipping costs incurred for returning defective products requested by our Quality Assurance Division for physical auditing will be fully reimbursed by Velourcare Ortho.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">Contact Information</h2>
          <p>
            <strong>Velourcare Ortho — Finance & Quality Assurance Division</strong><br/>
            Official Website: vélourcare.com<br/>
            Email Contact: info@vélourcare.com
          </p>
        </div>
        
        <div className="pt-8 text-center text-xs text-slate-400">
          <p>© 2026 Velourcare Ortho. All rights reserved. Strictly confidential.</p>
        </div>
      </RevealGroup>
    </div>
  );
}
