import { Shield, Star, CheckCircle, Clock, Heart, Zap } from "lucide-react";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";

export default function Invisalign() {
  return (
    <div id="invisalign-treatment-page" className="pb-20 bg-white space-y-24">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Clear Aligner Trays"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="layout-container relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2.5 bg-white/10 backdrop-blur-sm text-white px-5 py-1.5 rounded-full border border-white/20 text-[10px] sm:text-xs font-sans font-medium uppercase tracking-[0.2em]">
            <span>Clear Aligner Treatment</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight italic">
            Invisalign Treatment
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A clear alternative to traditional braces, planned for comfort, appearance, and predictable tooth movement.
          </p>
        </Reveal>
      </section>

      {/* Intro Grid */}
      <section className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="left" className="space-y-6 text-left">
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
              Why Clear Aligners?
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
              A Clear Path to a More Confident Smile.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Invisalign and Vélourcare Ortho aligners use removable, medical-grade clear aligner trays to guide teeth gradually into better positions. Because each aligner is made from digital records of your teeth, treatment avoids wire pokes, food restrictions, and many emergency visits.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Completely Removable</h4>
                  <p className="text-slate-500 text-xs">Take them out to eat, brush, and floss normally.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Virtually Invisible</h4>
                  <p className="text-slate-500 text-xs">High-clarity clear material keeps treatment discreet in daily life.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Scalloped Fit</h4>
                  <p className="text-slate-500 text-xs">Laser-trimmed to follow the gumline and protect soft tissue.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" className="relative">
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800"
              alt="Patient wearing clear aligners"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3] border border-slate-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 max-w-xs space-y-1 text-left hidden sm:block">
              <Zap className="w-8 h-8 text-brand-400" />
              <p className="font-display font-extrabold text-lg text-white">24-Hour Design</p>
              <p className="text-slate-400 text-xs leading-relaxed">Your custom tooth-movement simulation is generated in just 24 hours.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Clinical Staging process */}
      <section className="bg-slate-50 py-20 border-y border-slate-100 text-center">
        <div className="layout-container space-y-12">
          <Reveal className="max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">The Clear Aligner Journey</span>
            <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight">How It Works Step-By-Step</h2>
              <p className="text-slate-500 text-xs sm:text-sm">We combine digital records, clinical review, and careful fabrication to keep treatment clear and predictable.</p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left" childClassName="h-full">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-display font-black text-lg">1</div>
              <h3 className="font-display font-bold text-lg text-slate-900">3D Digital Scan</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                We capture a high-resolution 3D record of your teeth using laser intraoral scanners. No putty impressions are needed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-display font-black text-lg">2</div>
              <h3 className="font-display font-bold text-lg text-slate-900">24-Hour Treatment Plan</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our clinical doctors and aligner planning expert, assisted by an on-staff certified dental technologist, map your treatment under licensed orthodontist supervision. A complete 3D tooth-movement simulation is ready in 24 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-display font-black text-lg">3</div>
              <h3 className="font-display font-bold text-lg text-slate-900">Active Stage Wear</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Slip on your customized aligners. Wear each tray for 22 hours daily, transitioning to the next tray in the sequence every week.
              </p>
            </div>
          </RevealGroup>
        </div>
      </section>

      {/* Alignment Solutions list */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-10">
        <Reveal>
          <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight">What Invisalign Can Treat</h2>
        </Reveal>
        <RevealGroup className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Gapped Teeth",
            "Anterior Crowding",
            "Mild Overbites",
            "Underbite Shift",
            "Crossbite Realignment",
            "Open Bites",
            "Post-Ortho Relapse",
            "Cosmetic Arch Styling"
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 font-display font-semibold text-xs sm:text-sm text-slate-800 hover:border-brand-300 hover:bg-brand-50/20 transition-all">
              {item}
            </div>
          ))}
        </RevealGroup>
      </section>
    </div>
  );
}
