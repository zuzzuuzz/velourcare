import { Shield, Lock, FileText, Eye, Trash2, Database, Globe, Baby, Cookie, Mail } from "lucide-react";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";

export default function PrivacyPolicy() {
  return (
    <div id="privacy-policy-page" className="pb-20 bg-white space-y-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Secure server grid"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="layout-container relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2.5 bg-white/5 text-white/70 px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-sans font-medium uppercase tracking-[0.2em]">
            <Lock className="w-3 h-3" />
            <span>Confidentiality Protocol</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            How Vélourcare Ortho safeguards patient 3D dental datasets, intraoral scans, dental photographs, and personal identity.
          </p>
        </Reveal>
      </section>

      {/* Legal Text Content */}
      <RevealGroup className="max-w-3xl mx-auto px-4 text-left font-sans text-slate-600 text-sm sm:text-base leading-relaxed space-y-8">
        {/* Banner */}
        <div className="flex items-center space-x-3 bg-brand-50/50 p-4 rounded-2xl border border-brand-50">
          <Shield className="w-6 h-6 text-brand-600 shrink-0" />
          <p className="text-xs text-brand-900 font-semibold leading-relaxed">
            We operate fully secure, clinically compliant digital infrastructure. Your 3D clinical STL models and medical photographs are encrypted at rest (AES-256) and in transit (TLS 1.3).
          </p>
        </div>

        {/* Preamble */}
        <p>
          Velourcare Ortho (&ldquo;Velourcare Ortho,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to maintaining the highest standards of data privacy, security, and clinical confidentiality for every patient, dental practitioner, and website visitor. This Privacy Policy outlines how we collect, process, store, protect, and disclose personal and medical information when you interact with our website at <strong>vélourcare.com</strong> (including subdomains such as velourcare-ortho.vercel.app, collectively the &ldquo;Site&rdquo;) or utilize our digital orthodontic planning and clear aligner fabrication services (collectively, the &ldquo;Services&rdquo;). By accessing our Site or utilizing our Services, you acknowledge that you have read, understood, and agreed to the data practices described in this Privacy Policy.
        </p>

        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">1. Medical &amp; Clinical Data Collection</h2>
          <p>To facilitate accurate diagnostic treatment planning and precision clear aligner manufacturing, we collect and process clinical data provided by authorized dental practitioners or directly by patients under clinical oversight:</p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">3D Intraoral Scans (STL / PLY Files):</strong> Digital impression data of upper and lower dental arches used to construct 3D tooth-movement trajectories and staging models.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Diagnostic Imaging:</strong> Panoramic radiographs (OPGs), cephalometric X-rays, and CBCT scans used to evaluate root alignment, bone density, and jaw structures.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Clinical Photography:</strong> High-resolution intraoral and extraoral photographs documenting facial aesthetics, bite relationship, and soft-tissue profiles.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Medical &amp; Dental History:</strong> Patient-reported medical conditions, allergies, active medications, prior orthodontic history, and systemic health notes relevant to dental movement.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Patient Identity Records:</strong> Full name, date of birth, age, biological sex, contact details (email, phone, shipping address), and government identification numbers where mandatory for clinical billing or verification.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Referring Practitioner Details:</strong> Primary dentist or orthodontist name, license/registration number, clinic name, physical address, and contact credentials.</span></li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">2. Non-Medical &amp; Technical Data Collection</h2>
          <p>When you navigate our Site or access the Velourcare Partner Portal, our servers automatically log technical metadata:</p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Device &amp; Session Data:</strong> IP address, device type, browser identity and version, operating system, display resolution, and language settings.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Telemetry &amp; Analytics:</strong> Page navigation paths, session duration, click patterns, referring URL parameters, and system error logs.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Communication Logs:</strong> Transcripts, email correspondence, contact form submissions, and support interactions.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Account Credentials:</strong> Authenticated user identity, encrypted passwords, and multi-factor authentication metadata for registered practitioner accounts.</span></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">3. Purpose &amp; Legal Basis for Data Processing</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3 font-display font-bold text-slate-700 text-xs uppercase tracking-wider">Processing Purpose</th>
                  <th className="px-4 py-3 font-display font-bold text-slate-700 text-xs uppercase tracking-wider">Legal Basis / Regulatory Justification</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Design & Fabricate Custom Aligners", "Performance of Contract / Legitimate Clinical Interest"],
                  ["Coordinate Treatment Plans with Practitioners", "Performance of Contract / Clinical Duty of Care"],
                  ["Process Invoices & Payment Transactions", "Performance of Contract / Financial Compliance"],
                  ["Send Treatment Updates & Reminders", "Legitimate Interest / Patient Consent"],
                  ["Compliance with PECA & Healthcare Standards", "Legal & Regulatory Obligation"],
                  ["Infrastructure Security & Abuse Prevention", "Legitimate Interest"],
                  ["Service Optimization & Platform Enhancements", "Legitimate Interest"],
                  ["Direct Marketing & Educational Newsletters", "Explicit Opt-In Consent"],
                ].map(([purpose, basis], idx) => (
                  <tr key={idx} className={`border-b border-slate-100 last:border-b-0 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                    <td className="px-4 py-3 text-slate-600 leading-relaxed">{purpose}</td>
                    <td className="px-4 py-3 text-slate-600 leading-relaxed">{basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">4. Data Protection Standards &amp; Clinical Anonymization</h2>
          <p>As a digital dental laboratory operating in Pakistan, our operations strictly adhere to local statutory and healthcare ethics frameworks while maintaining global technical standards:</p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Prevention of Electronic Crimes Act (PECA):</strong> Full adherence to statutory mandates on data privacy, protection against unauthorized access, and secure electronic data storage.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">PMC / PMDC Ethical Standards:</strong> Strict compliance with dental practitioner confidentiality duties and patient consent guidelines set by medical regulators.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Global Security Standards:</strong> Implementation of technical controls aligned with international standards (such as AES-256 and TLS 1.3) to protect cross-border practitioner data.</span></li>
          </ul>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 mt-4">
            <p className="font-display font-bold text-slate-900 text-sm">Clinical Anonymization Protocol</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Patient identity parameters (name, contact information) are strictly separated from diagnostic 3D scans and photos upon entry into our internal laboratory system. Diagnostic STL files and fabrication orders are assigned unique alphanumeric Case Reference IDs. Laboratory technicians and 3D printing specialists design and thermoform aligner trays using anonymized case codes only, ensuring production staff never view personally identifiable patient information.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">5. Encryption &amp; Technical Infrastructure Security</h2>
          <p>We employ multi-layered technical controls to prevent unauthorized access, alteration, or disclosure of sensitive health records:</p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Encryption at Rest:</strong> All clinical files (STL models, X-rays, photographs) and personal data stored within our databases are encrypted using <strong>AES-256 bit encryption</strong>.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Encryption in Transit:</strong> End-to-end data transfers across our platform utilize <strong>TLS 1.3 encryption</strong> protocols.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Role-Based Access Control (RBAC):</strong> Strict permissions restrict clinical data access solely to assigned orthodontists, certified dental technologists, and verified referring practitioners.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Audit Logging:</strong> Every system interaction—including record views, modifications, downloads, and exports—is logged with immutable timestamps and operator IDs.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Datacenter Security:</strong> Cloud infrastructure is maintained within SOC 2 Type II certified datacenters featuring 24/7 biometric physical access security and redundant power systems.</span></li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">6. Disclosure &amp; Third-Party Sharing</h2>
          <p>Velourcare Ortho <strong className="text-slate-900">never sells, rents, or monetizes</strong> personal or clinical data to third-party brokers, advertisers, or external partners. Data is shared exclusively with necessary entities required to fulfill your treatment:</p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Assigned Orthodontists &amp; Treatment Planners:</strong> Licensed specialists responsible for approving 3D tooth movement setups.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Certified Dental Technologists:</strong> Laboratory technicians manufacturing the physical clear aligners.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Referring Primary Dentists:</strong> The patient&rsquo;s treating dental clinic monitoring local progress.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">PCI-DSS Compliant Payment Processors:</strong> Financial gateways processing billing transactions (payment providers do not receive clinical records or diagnostic files).</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Secure Cloud Hosts:</strong> Infrastructure vendors providing encrypted storage facilities bound by strict data processor agreements.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Legal &amp; Regulatory Authorities:</strong> Provided strictly when mandated by enforceable court orders, legal process, or applicable legislation.</span></li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">7. Cookies &amp; Tracking Policy</h2>
          <p>We utilize minimalist, privacy-focused tracking tools on vélourcare.com:</p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Essential Cookies:</strong> Mandatory for web session authentication, form operation, and security checks. These cannot be disabled.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Analytics Cookies:</strong> Aggregated, non-identifying metrics to help us evaluate site load speed and layout performance. We do not track users across third-party websites.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Preference Cookies:</strong> Store interface settings such as region, language, or active session state.</span></li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">8. Data Retention &amp; Deletion Schedule</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3 font-display font-bold text-slate-700 text-xs uppercase tracking-wider">Data Category</th>
                  <th className="px-4 py-3 font-display font-bold text-slate-700 text-xs uppercase tracking-wider">Retention Period</th>
                  <th className="px-4 py-3 font-display font-bold text-slate-700 text-xs uppercase tracking-wider">Rationale</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["3D Scans, X-Rays, & Photos", "5 Years post-treatment", "Treatment archiving, retainer remakes, and mid-course corrections"],
                  ["Medical & Clinical Records", "5 Years post-treatment", "Maintenance of legal clinical care records"],
                  ["Personal Identity Records", "5 Years from last activity", "Practitioner account management and verification"],
                  ["Billing & Financial Records", "6 Years", "Compliance with statutory tax and financial auditing laws"],
                  ["System & Telemetry Logs", "24 Months", "Security monitoring and performance analytics"],
                  ["Support Communications", "3 Years", "Quality assurance and case history reference"],
                ].map(([category, period, rationale], idx) => (
                  <tr key={idx} className={`border-b border-slate-100 last:border-b-0 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                    <td className="px-4 py-3 text-slate-600 leading-relaxed font-medium">{category}</td>
                    <td className="px-4 py-3 text-slate-600 leading-relaxed">{period}</td>
                    <td className="px-4 py-3 text-slate-600 leading-relaxed">{rationale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            <strong className="text-slate-700">Requesting Deletion:</strong> Patients or referring clinics may request early deletion of personal identity records by submitting a formal request to <strong>info@vélourcare.com</strong>. Deletion will be executed within 30 business days, except where retention is required by tax law or active clinical liability obligations.
          </p>
        </div>

        {/* Section 9 */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">9. Data Subject Rights</h2>
          <p>Subject to applicable law, users and patients possess the following rights regarding their information:</p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Right of Access:</strong> Obtain a copy of all personal details and clinical diagnostic files registered under your account.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Right to Rectification:</strong> Request correction of inaccurate, outdated, or incomplete clinical records.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Right to Erasure:</strong> Request destruction of personal data when processing is no longer necessary.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Right to Data Portability:</strong> Request diagnostic records (including raw 3D STL files and PDFs) in an open, machine-readable format for transfer to another care provider.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Right to Restrict Processing:</strong> Limit data usage during ongoing identity disputes or record accuracy reviews.</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" /><span><strong className="text-slate-900">Right to Withdraw Consent:</strong> Revoke permission for optional data usage (such as email notifications) at any time.</span></li>
          </ul>
        </div>

        {/* Section 10 */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">10. Pediatric &amp; Minor Privacy</h2>
          <p>
            Velourcare Ortho provides specialized aligner planning services for teenagers and children (&ldquo;Kids Orthodontics&rdquo;). We do not collect personal data from individuals under 13 years of age without verifiable consent from a parent or legal guardian. For minor patients (ages 13–17), treatment plans and data processing must be authorized by a parent or legal guardian. Parents or legal guardians retain full authority to exercise data access, correction, or deletion rights on behalf of the minor. Pediatric clinical files are subject to identical encryption and anonymization protocols as adult patient records.
          </p>
        </div>

        {/* Section 11 */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900">11. International Data Transfers &amp; Policy Updates</h2>
          <p>
            Information collected via vélourcare.com or our Partner Portal may be processed on secure cloud servers located across different regions to ensure continuous service availability. All cross-border data transmissions are secured using AES-256 bit encryption and TLS 1.3 protocols.
          </p>
          <p>
            We reserve the right to revise this Privacy Policy to align with evolving technology standards, operational changes, or legal updates. Material modifications will be communicated by posting an updated revision date on this page and notifying registered practitioners via the Partner Portal or direct email.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-slate-100 text-slate-400 text-xs space-y-1">
          <p>Effective Date: July 22, 2026</p>
          <p>Last Revised: July 22, 2026</p>
          <p className="mt-2">Velourcare Ortho — Compliance &amp; Data Protection Division</p>
          <p>Official Website: vélourcare.com &nbsp;|&nbsp; Email Contact: info@vélourcare.com</p>
          <p className="mt-2">© 2026 Velourcare Ortho. All rights reserved. Strictly confidential.</p>
        </div>
      </RevealGroup>
    </div>
  );
}
