"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { QrCode } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import QRCodeModal from "./QRCodeModal";

const paths: Record<string, string> = {
  home: "/",
  "how-we-treat": "/how-we-treat",
  invisalign: "/invisalign",
  "kids-ortho": "/kids-ortho",
  "adult-ortho": "/adult-ortho",
  "about-us": "/about-us",
  contact: "/contact",
  blogs: "/blogs",
  faqs: "/faqs",
  "privacy-policy": "/privacy-policy",
  "trial-case": "/?enquiry=trial#home-contact-form",
  "schedule-meeting": "/?enquiry=meeting#home-contact-form",
};

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const currentPage = Object.entries(paths).find(([, path]) => path === pathname)?.[0] ?? "";
  const onNavigate = (page: string) => router.push(paths[page] ?? "/");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/20 text-slate-800 antialiased selection:bg-brand-500 selection:text-white relative">
      <Header currentPage={currentPage} onNavigate={onNavigate} onOpenQR={() => setIsQRModalOpen(true)} />
      <main className="flex-grow">{children}</main>
      
      {/* Floating QR Access Button */}
      <button
        onClick={() => setIsQRModalOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-slate-900/90 hover:bg-slate-900 text-white p-3 rounded-2xl shadow-xl border border-slate-700/60 backdrop-blur-md transition-all duration-300 hover:scale-105 group flex items-center space-x-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        title="Scan QR Code to open site on mobile"
        aria-label="Open Website QR Code modal"
      >
        <QrCode className="w-5 h-5 text-brand-400 group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden sm:inline font-display text-xs font-bold uppercase tracking-wider text-slate-200 pr-1">
          Scan QR
        </span>
      </button>

      <Footer onNavigate={onNavigate} onOpenQR={() => setIsQRModalOpen(true)} />
      <QRCodeModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </div>
  );
}
