import { Smile, CheckCircle, ShieldAlert, Award, Star, Clock } from "lucide-react";
import Image from "next/image";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";

export default function KidsOrtho() {
  return (
    <div id="kids-ortho-page" className="pb-20 bg-white space-y-24">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2400&auto=format&fit=crop"
            fill
            className="object-cover"
            alt="Happy child smiling backdrop"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="layout-container relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2.5 bg-white/10 text-white px-5 py-2 rounded-full border border-white/20 text-xs font-sans font-medium uppercase tracking-[0.2em]">
            <Smile className="w-3.5 h-3.5" />
            <span>Early Interceptive Orthodontics</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight italic">
            Orthodontics For Kids
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Phase 1 screening and early guidance for jaw growth, oral habits, and crowding risks before all permanent teeth erupt.
          </p>
        </Reveal>
      </section>

      {/* Main Philosophy */}
      <section className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="left" className="relative">
            <Image
              src="/images/kids-orthodontics.jpg"
              alt="Child at orthodontic exam"
              width={800}
              height={600}
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-xl hidden sm:block max-w-xs text-left">
              <Award className="w-8 h-8 text-brand-600 mb-2" />
              <h4 className="font-display font-bold text-slate-900 text-sm">Ages 7 and Up</h4>
              <p className="text-slate-500 text-xs mt-1">The American Association of Orthodontists recommends a screening by age 7.</p>
            </div>
          </Reveal>

          <Reveal variant="right" className="space-y-6 text-left">
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">Phase 1 Intervention</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
              Guidance While They Grow.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Early interceptive treatment, also called Phase 1, begins while children still have a mix of baby and permanent teeth. The goal is to address jaw growth concerns, guide narrow arches, reduce severe crowding risk, and create better space for permanent teeth to erupt.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Arch Expansion</h4>
                  <p className="text-slate-500 text-xs">Gently widen narrow arches to make room for erupting teeth.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Habit Cessation</h4>
                  <p className="text-slate-500 text-xs">Address tongue-thrusting or persistent thumb-sucking habits that can affect tooth position.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Growth Coordination</h4>
                  <p className="text-slate-500 text-xs">Guide bite concerns while the jaws are still growing.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Red flags table */}
      <section className="bg-slate-50 py-20 border-y border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <Reveal className="space-y-4">
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">Observation Check</span>
            <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight">Red Flags in Developing Smiles</h2>
            <p className="text-slate-500 text-xs">If you notice any of these signs, an early orthodontic evaluation can help decide whether treatment is needed.</p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start space-x-4">
              <ShieldAlert className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm">Early or Late Tooth Loss</h4>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1">Losing baby teeth too early or too late can affect how permanent teeth come in.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start space-x-4">
              <ShieldAlert className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm">Difficulty Chewing or Biting</h4>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1">Misaligned jaws can lead to painful, inefficient chewing or constant cheek biting.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start space-x-4">
              <ShieldAlert className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm">Mouth Breathing</h4>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1">Often correlates with narrow upper arches and can alter long-term facial growth.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start space-x-4">
              <ShieldAlert className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm">Protruding Upper Teeth</h4>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1">Highly vulnerable to dental trauma or chipping from accidental playground falls.</p>
              </div>
            </div>
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
