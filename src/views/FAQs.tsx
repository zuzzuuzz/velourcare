"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Smile } from "lucide-react";
import { FAQs } from "../data";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = ["All", "General", "Treatment", "Pricing", "Care & Wear"];

  const filteredFAQs = selectedCategory === "All"
    ? FAQs
    : FAQs.filter((item) => item.category === selectedCategory);

  const toggleFAQ = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div id="faqs-page" className="pb-20 bg-white space-y-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="FAQ backdrop"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="layout-container relative z-10 text-center space-y-4">
          <div className="badge badge-underline badge-underline--dark" id="badge-underline-dark">
            <HelpCircle className="badge-icon" />
            <span>Support Helpdesk</span>
            <div className="badge-underline__line badge-underline__line--gold"></div>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get answers to dental inquiries, clinical workflows, and manufacturing details of Vélourcare Ortho Clear Aligners.
          </p>
        </Reveal>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 space-y-10">
        {/* Category Tabs */}
        <Reveal className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-100 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setExpandedIndex(null);
              }}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-150 cursor-pointer ${
                selectedCategory === category
                  ? "bg-brand-600 text-white shadow-md shadow-brand-100"
                  : "text-slate-500 hover:text-brand-600 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </Reveal>

        {/* Accordions */}
        <RevealGroup className="space-y-4">
          {filteredFAQs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-white rounded-2xl border border-slate-100 hover:border-brand-100 shadow-sm transition-all overflow-hidden"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex justify-between items-center space-x-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-start space-x-3 text-left">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-50 text-brand-600 text-[10px] font-bold shrink-0 mt-0.5">
                      Q
                    </span>
                    <span className="font-display font-extrabold text-sm sm:text-base text-slate-800 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-slate-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Answer drawer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-[500px] border-t border-slate-50 p-6 bg-slate-50/50" : "max-h-0 pointer-events-none opacity-0"
                  }`}
                >
                  <div className="flex items-start space-x-3 text-left">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold shrink-0 mt-0.5">
                      A
                    </span>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </RevealGroup>

        {/* Missing Question Teaser */}
        <Reveal variant="scale" className="bg-brand-50/30 border border-brand-50 rounded-3xl p-8 text-center space-y-4 max-w-xl mx-auto">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto text-brand-600 shadow-sm">
            <Smile className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-display font-extrabold text-lg text-slate-900">Still have dental doubts?</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Our clinical setup coordinators are on call to assist. Drop us a note directly on our Lab Portal to connect.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
