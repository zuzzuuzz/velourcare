import { MapPin, Phone, Mail, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";
import { officeAddress, officeContact, officeHours } from "../data";

export default function Contact() {
  return (
    <div id="contact-page" className="pb-20 bg-white space-y-24">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Clinic workspace"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="layout-container relative z-10 text-center space-y-4">
          <div className="badge badge-underline badge-underline--dark" id="badge-underline-dark">
            <Mail className="badge-icon" />
            <span>Connect With Us</span>
            <div className="badge-underline__line badge-underline__line--gold"></div>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Clinical Lab Portal
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reach our orthodontic planning team for clinical questions, partnership details, and case support.
          </p>
        </Reveal>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="space-y-8">
            <div className="space-y-2 text-left">
              <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
                Office Information
              </span>
              <h2 className="font-display font-black text-2xl text-slate-900 tracking-tight">
                Our Lahore Headquarters
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                Vélourcare Ortho clinical design laboratories follow quality management and data privacy standards for digital orthodontic records.
              </p>
            </div>

            {/* Direct Information List */}
            <RevealGroup className="space-y-4 text-sm">
              <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <MapPin className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-display font-bold text-slate-900">Clinic & Lab Address</h4>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">{officeAddress}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <Phone className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-display font-bold text-slate-900">Phone Contact</h4>
                  <a href={`tel:${officeContact.phone}`} className="text-brand-600 hover:text-brand-700 text-xs font-semibold block mt-1">
                    {officeContact.phone}
                  </a>
                  <span className="text-[10px] text-slate-400">Available during standard office hours</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <Mail className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-display font-bold text-slate-900">Lab Email</h4>
                  <a href={`mailto:${officeContact.email}`} className="text-brand-600 hover:text-brand-700 text-xs font-semibold block mt-1">
                    {officeContact.email}
                  </a>
                  <span className="text-[10px] text-slate-400">General and partner mailbox</span>
                </div>
              </div>
            </RevealGroup>

            {/* Office Hours Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 text-left border border-slate-800">
              <h4 className="font-display font-bold text-brand-400 text-xs uppercase tracking-widest flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Operating Hours</span>
              </h4>
              <div className="space-y-3">
                {officeHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-xs border-b border-white/10 pb-2 last:border-b-0 last:pb-0">
                    <span className="text-slate-300 font-semibold">{item.days}</span>
                    <span className="text-white font-mono font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Interactive Map */}
            <div id="simulated-map" className="relative h-64 rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden shadow-md group">
              <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-4">
                {/* stylized SVG grid representing dental campus layout */}
                <svg className="w-full h-full opacity-40 absolute inset-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Fake roads and parks */}
                  <rect x="120" y="0" width="45" height="400" fill="#e2e8f0" />
                  <rect x="0" y="100" width="600" height="35" fill="#e2e8f0" />
                  <circle cx="142" cy="117" r="40" fill="#cbd5e1" />
                  <rect x="250" y="20" width="120" height="60" rx="10" fill="#d1fae5" />
                </svg>
                
                {/* Pointer marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <MapPin className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md mt-2 border border-slate-800">
                    VÉLOURCARE ORTHO
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md flex justify-between items-center z-10 text-xs">
                <span className="font-semibold text-slate-800">Dental Science Campus</span>
                <span className="font-bold text-brand-600">Lahore, Pakistan</span>
              </div>
            </div>
        </Reveal>
      </section>
    </div>
  );
}
