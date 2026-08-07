"use client";

import { useState } from "react";
import { Check, ShieldCheck, Smile, Ruler, Users, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";
import { motionEase } from "../components/motionPresets";
import { services } from "../data";

export default function HowWeTreat() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState("crowding");

  type Malocclusion = {
    id: string;
    title: string;
    desc: string;
    recoveryTime: string;
    difficulty: string;
    videoUrl?: string;
  };

  const malocclusions: Malocclusion[] = [
    {
      id: "crowding",
      title: "Anterior Crowding",
      desc: "Teeth overlap, rotate, or bunch together when there is not enough space in the arch. We correct this with planned expansion and careful interproximal alignment.",
      recoveryTime: "6 - 11 Months",
      difficulty: "Mild to Severe",
      videoUrl: "https://www.youtube.com/embed/liSgnxg9WFI"
    },
    {
      id: "diastema",
      title: "Diastema & Gaps",
      desc: "Excess spacing between teeth, often most visible between the upper central incisors. We close these spaces with controlled tooth movement and a retention plan after treatment.",
      recoveryTime: "4 - 8 Months",
      difficulty: "Mild to Moderate"
    },
    {
      id: "overbite",
      title: "Deep Overbite",
      desc: "Upper teeth overlap the lower teeth more than they should. Treatment may include planned incisor intrusion and controlled posterior tooth movement.",
      recoveryTime: "9 - 14 Months",
      difficulty: "Moderate to Severe"
    },
    {
      id: "relapse",
      title: "Post-Ortho Relapse",
      desc: "Teeth can shift after braces when retainers are not worn consistently. Mild relapse can often be corrected with a shorter aligner sequence.",
      recoveryTime: "3 - 6 Months",
      difficulty: "Mild"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Digital Intraoral Scan",
      subtitle: "The 3D Diagnostic Phase",
      desc: "Our doctors take a high-density, color-mapped laser scan of your teeth using intraoral wands. No messy goop, no gagging. In less than 120 seconds, we map your entire dentition with micron-level accuracy.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "02",
      title: "Orthodontic Setup & Planning",
      subtitle: "Expert Movement Vectoring",
      desc: "Your custom clear aligner plan is designed by our clinical doctors and an aligner specialist, assisted by a certified dental technologist, under the direct supervision of a licensed master orthodontist. We use staging software to simulate tooth movement and map progress week by week.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "03",
      title: "Precise Thermoforming & Trim",
      subtitle: "Medical-Grade Aligner Fabrication",
      desc: "Using Class-VI biocompatible multi-layer polymers, we 3D print the dental models and thermoform each aligner. Each tray is laser-scalloped to match the gumline, then hand-polished for comfort.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "04",
      title: "Active Wear & Monitoring",
      subtitle: "Active Wear Schedule",
      desc: "You wear each aligner tray for 22 hours daily, switching to a new stage every 7 to 10 days. As you move through the sequence, your teeth are gently guided into place. We coordinate brief virtual check-ins with our clinical team to monitor fit and progress.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div id="how-we-treat-page" className="pb-20 bg-white space-y-24">
      {/* Intro Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Clinic backdrop"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="layout-container relative z-10 text-center space-y-4">
          <div className="badge badge-underline badge-underline--dark" id="badge-underline-dark">
            <span>Digital Workflow Design</span>
            <div className="badge-underline__line badge-underline__line--gold"></div>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            How We Treat
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Vélourcare Ortho uses digital records, orthodontist review, and carefully staged clear trays to guide tooth movement. Here is the full treatment sequence.
          </p>
        </Reveal>
      </section>

      {/* Sequential Treatment Steps */}
      <section className="layout-container space-y-20">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
            The 4-Step Cycle
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Our Engineered Treatment Sequence
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Every Vélourcare Ortho aligner is made through a structured clinical and lab process for a comfortable, accurate fit.
          </p>
        </Reveal>

        <RevealGroup className="space-y-16" stagger={0.08}>
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={step.number}
                id={`treatment-step-${step.number}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 relative ${isEven ? "" : "lg:order-last"}`}>
                  <div className="absolute -inset-4 bg-brand-50/50 rounded-[40px] -z-10" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-[30px] shadow-lg aspect-[16/10] object-cover w-full border border-slate-100"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-brand-600 text-white font-display font-black text-2xl px-5 py-2.5 rounded-2xl shadow-lg shadow-brand-500/20">
                    {step.number}
                  </span>
                </div>

                {/* Copy */}
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
                    {step.subtitle}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Orthodontist Supervised</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Micro-level accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </RevealGroup>
      </section>

      {/* Interactive treatable malocclusions list */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Explanatory intro */}
            <Reveal variant="left" className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
                Anatomic Spectrum
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Anatomical Conditions We Correct
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Clear aligners are no longer limited to minor straightening. With the right attachments and case planning, Vélourcare Ortho can support a wider range of orthodontic movements.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-100 space-y-3">
                <div className="flex items-center space-x-2 text-brand-600">
                  <Ruler className="w-5 h-5" />
                  <span className="font-bold text-xs text-slate-800">Biomechanical Tolerances</span>
                </div>
                <p className="text-slate-500 text-xs">
                  Our materials are selected to maintain steady orthodontic force during normal daily wear.
                </p>
              </div>
            </Reveal>

            {/* Interactive Tabbed Box */}
            <Reveal variant="right" className="lg:col-span-7 bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-slate-100 space-y-6">
              {/* Tab headers */}
              <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
                {malocclusions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-150 cursor-pointer ${
                      activeTab === item.id
                        ? "bg-brand-600 text-white shadow-md shadow-brand-100"
                        : "text-slate-500 hover:text-brand-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.title.split(" ")[1] || item.title}
                  </button>
                ))}
              </div>

              {/* Tab Body */}
              <AnimatePresence mode="wait">
              {malocclusions.map((item) => {
                if (item.id !== activeTab) return null;
                return (
                  <motion.div
                    key={item.id}
                    className="space-y-4"
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: shouldReduceMotion ? 0.16 : 0.24, ease: motionEase }}
                  >
                    <h3 className="font-display font-black text-xl text-slate-900">
                      {item.title} Treatment Plan
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    {item.videoUrl && (
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-slate-200 mt-6 mb-4 transition-all duration-300 hover:shadow-md hover:border-slate-300 group bg-slate-50">
                        {/* Decorative subtle overlay that disappears on hover if wanted, but standard iframe is fine */}
                        <iframe
                          src={item.videoUrl}
                          title={`${item.title} Video Demonstration`}
                          className="absolute inset-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Difficulty Profile</span>
                        <span className="font-display font-bold text-sm text-slate-800">{item.difficulty}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Treatment Timeline</span>
                        <span className="font-display font-bold text-sm text-slate-800">{item.recoveryTime}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
