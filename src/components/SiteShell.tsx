"use client";

import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
  const currentPage = Object.entries(paths).find(([, path]) => path === pathname)?.[0] ?? "";
  const onNavigate = (page: string) => router.push(paths[page] ?? "/");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/20 text-slate-800 antialiased selection:bg-brand-500 selection:text-white relative">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-grow">{children}</main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
