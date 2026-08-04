import { Star, ShieldCheck, CheckCircle, Award, Briefcase, Zap, Heart } from "lucide-react";
import Reveal from "../components/Reveal";

export default function AdultOrtho() {
  return (
    <div id="adult-ortho-page" className="pb-20 bg-white space-y-24">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Adult smiling confidently backdrop"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="layout-container relative z-10 text-center space-y-6">
          <div className="badge badge-underline badge-underline--dark" id="badge-underline-dark">
            <Briefcase className="badge-icon" />
            <span>Adult Orthodontics</span>
            <div className="badge-underline__line badge-underline__line--gold"></div>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight italic">
            Orthodontics For Adults
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            It is never too late to improve bite health, tooth position, and smile confidence. Discreet orthodontic systems designed to fit professional life.
          </p>
        </Reveal>
      </section>

      {/* Main Philosophy */}
      <section className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="left" className="space-y-6 text-left">
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">Adult Orthodontics</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
              Designed For Professional Lives.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Orthodontic treatment can be effective at any age. For adults, aligning the teeth can improve confidence while also helping reduce uneven wear, plaque build-up, periodontal pocketing, and temporomandibular joint strain.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Invisible Options</h4>
                  <p className="text-slate-500 text-xs">Use Invisalign or premium clear aligners that stay discreet at work and in daily life.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Flexible Appointment Cadences</h4>
                  <p className="text-slate-500 text-xs">Brief clinical check-ins every 8 to 12 weeks, planned around a busy schedule.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Long-Term Stability</h4>
                  <p className="text-slate-500 text-xs">Support healthier gums, easier cleaning, and a stable bite after treatment.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" className="relative">
            <img
              src="https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=800"
              alt="Adult smiling confidently in business setting"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-xl hidden sm:block max-w-xs text-left">
              <Heart className="w-8 h-8 text-brand-600 mb-2" />
              <h4 className="font-display font-bold text-slate-900 text-sm">Easier Daily Care</h4>
              <p className="text-slate-500 text-xs mt-1">Better-aligned teeth can make brushing and flossing easier to maintain.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Advanced Clinical Tech */}
      <section className="bg-slate-50 py-20 border-y border-slate-100 text-center">
        <Reveal className="max-w-4xl mx-auto px-4 space-y-8">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">24-Hour Digital Setup</span>
          <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight">Your Plan Can Start Within 24 Hours</h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            We combine intraoral scans with digital planning to prepare a tooth-movement simulation within 24 hours. Once the plan is approved, the aligner sequence can move into production.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
