"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import InteractiveForm from "../components/InteractiveForm";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";
import { services } from "../data";

interface HomeProps {
  onNavigate: (page: string) => void;
  onSetContactDefault: (type: "trial" | "meeting" | "general") => void;
}

export default function Home({ onNavigate, onSetContactDefault }: HomeProps) {
  // Simple state to simulate interactive tooth movement preview video
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [videoStage, setVideoStage] = useState(1);
  const [enquiryType, setEnquiryType] = useState<"trial" | "meeting" | "general">("general");

  useEffect(() => {
    const requestedType = new URLSearchParams(window.location.search).get("enquiry");
    if (requestedType === "trial" || requestedType === "meeting") {
      setEnquiryType(requestedType);
    }
  }, []);

  const triggerVideoSimulation = () => {
    setIsPlayingVideo(true);
    setVideoStage(1);
    const interval = setInterval(() => {
      setVideoStage((prev) => {
        if (prev >= 6) {
          clearInterval(interval);
          return 6;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const handleCtaClick = () => {
    setEnquiryType("trial");
    onSetContactDefault("trial");
    const el = document.getElementById("home-contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScheduleClick = () => {
    setEnquiryType("meeting");
    onSetContactDefault("meeting");
    const el = document.getElementById("home-contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="homepage-content" className="space-y-0">
      {/* a) Hero section */}
      <Hero onCtaClick={handleCtaClick} />

      {/* Brand Intro Strip */}
      <Reveal variant="soft" className="py-5 w-full bg-brand-50 flex items-center justify-center px-6 sm:px-12 border-b border-brand-100 text-center">
        <p className="text-brand-900 text-xs sm:text-sm font-medium italic">
          "Detailed protocols. Streamlined workflow. Minimal errors. Vélourcare Ortho is the preferred partner for clinical excellence."
        </p>
      </Reveal>

      {/* b) Brand intro strip */}
      <section id="brand-intro-strip" className="py-20 bg-white border-b border-slate-50">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Supporting Image */}
            <Reveal variant="left" className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-teal-500 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-all duration-300" />
              <Image
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop"
                alt="Detailed clinical orthodontics protocol"
                width={800}
                height={450}
                className="rounded-3xl shadow-lg w-full object-cover aspect-video relative z-10 border border-slate-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center space-x-2 border border-white/10 text-white">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">
                  Zero Error Protocol
                </span>
              </div>
            </Reveal>

            {/* Intro Copy */}
            <Reveal variant="right" className="space-y-6">
              <div className="inline-flex items-center text-brand-600">
                <span className="font-mono text-xs font-bold uppercase tracking-widest">
                  Our Biological Philosophy
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Streamlined Workflows. <br />
                Predictable Movement. Minimal Errors.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                Every custom aligner plan at Vélourcare Ortho is prepared by our clinical planning team, including doctors, an aligner expert, and a certified dental technologist, with active supervision from a licensed master orthodontist. We review tooth movement with high-resolution digital simulations so each tray fits accurately and the treatment plan is easier to follow. The result is fewer mid-course corrections, less chair time, and tooth movement that stays within a clinically controlled range.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <span className="font-display font-black text-3xl text-brand-600 block">99.8%</span>
                  <span className="text-slate-500 text-xs font-semibold">Perfect seating rate</span>
                </div>
                <div>
                  <span className="font-display font-black text-3xl text-brand-600 block">24 Hours</span>
                  <span className="text-slate-500 text-xs font-semibold">Average setup review</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* c) "Our Services" section */}
      <section id="our-services-section" className="py-24 bg-slate-50/50">
        <div className="layout-container">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-4 text-left">
              <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
                What We Provide
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Our Clinical Solutions
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
                From high-resolution 3D diagnostic mapping to hand-polished thermoformed aligners, we support the full digital orthodontic workflow.
              </p>
            </div>
            <button
              onClick={() => onNavigate("how-we-treat")}
              className="inline-flex items-center space-x-2 text-brand-600 hover:text-brand-700 font-display font-bold text-sm tracking-wide transition-colors cursor-pointer group"
            >
              <span>Learn Our Entire Process</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" childClassName="h-full">
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-50 mt-6">
                  <button
                    onClick={() => onNavigate("how-we-treat")}
                    className="text-brand-600 hover:text-brand-700 font-display font-bold text-xs tracking-wider uppercase inline-flex items-center space-x-1 cursor-pointer group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* d) Treatment Options Overview */}
      <section id="treatment-options-overview" className="py-24 bg-white">
        <div className="layout-container">
          <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
              Treatment Options
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight italic">
              Orthodontics for Every Stage of Life
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We combine clinical planning, digital records, and careful follow-up for kids, teens, and adults.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" childClassName="h-full">
            {/* Invisalign Card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-between hover:border-brand-200 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="relative h-40 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400"
                    alt="Invisalign Treatment"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">Invisalign</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  A clear, removable alternative to traditional braces.
                </p>
              </div>
              <button
                onClick={() => onNavigate("invisalign")}
                className="mt-6 w-full py-2.5 rounded-full bg-white border border-slate-200 text-brand-600 hover:bg-brand-50 font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Learn More
              </button>
            </div>

            {/* Kids Ortho Card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-between hover:border-brand-200 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="relative h-40 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400"
                    alt="Orthodontics for Kids"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">Kids Orthodontics</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Early screening and Phase 1 interceptive growth guidance for developing jaws.
                </p>
              </div>
              <button
                onClick={() => onNavigate("kids-ortho")}
                className="mt-6 w-full py-2.5 rounded-full bg-white border border-slate-200 text-brand-600 hover:bg-brand-50 font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Learn More
              </button>
            </div>

            {/* Adult Ortho Card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-between hover:border-brand-200 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="relative h-40 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/adult-ortho.jpg"
                    alt="Adult Orthodontics"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">Adult Orthodontics</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Discreet treatment options that fit around professional life.
                </p>
              </div>
              <button
                onClick={() => onNavigate("adult-ortho")}
                className="mt-6 w-full py-2.5 rounded-full bg-white border border-slate-200 text-brand-600 hover:bg-brand-50 font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Learn More
              </button>
            </div>
          </RevealGroup>
        </div>
      </section>

      {/* e) "About Us" teaser */}
      <section id="about-us-teaser" className="py-24 bg-slate-50/30 border-t border-slate-50">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy teaser */}
            <Reveal variant="left" className="space-y-6">
              <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
                Meet Vélourcare Ortho
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                An Orthodontic Lab Built for Accuracy.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Founded by experienced orthodontists and biomaterial lab technicians, Vélourcare Ortho connects digital diagnostics with comfortable treatment planning. We do not rely on unsupervised aligner algorithms. Every stage is reviewed, adjusted, and approved by a licensed doctor.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-xs font-medium">Licensed Clinical Orthodontists inspecting every case plan</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-xs font-medium">Multi-layered clinical PETG for 40% more persistent dental force</p>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate("about-us")}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-display font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-all cursor-pointer inline-flex items-center space-x-2"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Reveal>

            {/* Teaser image */}
            <Reveal variant="right" className="relative">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                alt="Vélourcare Ortho modern digital laboratory"
                width={800}
                height={800}
                className="rounded-3xl shadow-xl w-full object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hidden sm:block max-w-xs space-y-1">
                <span className="font-display font-black text-2xl text-brand-600">100%</span>
                <p className="text-slate-800 text-xs font-bold">Orthodontist-Designed</p>
                <p className="text-slate-500 text-[10px] leading-relaxed">No unsupervised algorithms. Doctor-reviewed treatment plans.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* f) Mid-page CTA banner */}
      <CTASection
        onSubmitCaseClick={handleCtaClick}
        onScheduleMeetingClick={handleScheduleClick}
      />


      {/* h) Contact section */}
      <section id="home-contact-form" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Abstract background blobs to simulate high-end design */}
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-100/40 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/2 right-10 w-96 h-96 bg-teal-100/30 rounded-full filter blur-3xl" />

        <Reveal variant="scale" className="max-w-3xl mx-auto px-4 relative z-10">
          <InteractiveForm key={enquiryType} defaultEnquiryType={enquiryType} />
        </Reveal>
      </section>
    </div>
  );
}
