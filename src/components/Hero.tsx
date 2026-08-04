"use client";

import { ArrowRight, Clock, Star, Heart } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { brandHeroImage } from "../data";
import Reveal from "./Reveal";
import { motionEase } from "./motionPresets";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero-section" className="relative min-h-[90vh] xl:min-h-[760px] 2xl:min-h-[820px] flex items-center justify-center pt-24 xl:pt-28 pb-16 xl:pb-20 overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={brandHeroImage}
          alt="Modern clinical aligner laboratory"
          className="w-full h-full object-cover scale-105"
          initial={shouldReduceMotion ? false : { scale: 1.08 }}
          animate={shouldReduceMotion ? undefined : { scale: 1.03 }}
          transition={{ duration: 8, ease: motionEase }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E252B]/85 via-[#1E252B]/65 to-[#1E252B]/45" />
      </div>

      <div className="layout-container relative z-10">
        <div className="max-w-3xl xl:max-w-4xl mx-auto space-y-8 xl:space-y-9 text-center text-white">
          <Reveal variant="scale">
            <div className="badge badge-underline badge-underline--dark" id="badge-underline-dark">
              <Clock className="badge-icon" />
              <span>Full Setup in 24 Hours</span>
              <div className="badge-underline__line badge-underline__line--gold"></div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight text-white italic text-balance">
            Digital Planning <br />
            <span className="text-brand-400">
              for Clear Aligner Care.
            </span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-base sm:text-lg text-slate-200 font-sans max-w-xl mx-auto leading-relaxed">
              Vélourcare Ortho couples digital movement simulations with a custom design plan by our dedicated doctor team, assisted by a certified dental technologist and supervised by licensed orthodontists.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex justify-center items-center pt-4">
            <button
              id="hero-primary-cta"
              onClick={onCtaClick}
              className="bg-brand-500 hover:bg-brand-600 text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 font-display font-bold uppercase tracking-widest text-xs px-8 xl:px-9 py-4 rounded-full xl:rounded-xl shadow-lg shadow-brand-500/20 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer mx-auto"
            >
              <span>Submit Trial Case</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
