import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QrCode } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import QRCodeModal from "./components/QRCodeModal";
import { motionEase } from "./components/motionPresets";

// Pages
import Home from "./views/Home";
import HowWeTreat from "./views/HowWeTreat";
import Invisalign from "./views/Invisalign";
import KidsOrtho from "./views/KidsOrtho";
import AdultOrtho from "./views/AdultOrtho";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";
import Blogs from "./views/Blogs";
import FAQs from "./views/FAQs";
import PrivacyPolicy from "./views/PrivacyPolicy";
import TermsOfService from "./views/TermsOfService";
import RefundPolicy from "./views/RefundPolicy";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [contactDefaultCategory, setContactDefaultCategory] = useState<"trial" | "meeting" | "general" >("general");
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [currentPage]);

  // Support deep linking via URL hash changes if needed
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        [
          "home",
          "how-we-treat",
          "invisalign",
          "kids-ortho",
          "adult-ortho",
          "about-us",
          "contact",
          "blogs",
          "faqs",
          "privacy-policy",
          "terms-of-service",
          "refund-policy",
        ].includes(hash)
      ) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    // run once on load
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            onNavigate={handleNavigate}
            onSetContactDefault={(type) => setContactDefaultCategory(type)}
          />
        );
      case "how-we-treat":
        return <HowWeTreat />;
      case "invisalign":
        return <Invisalign />;
      case "kids-ortho":
        return <KidsOrtho />;
      case "adult-ortho":
        return <AdultOrtho />;
      case "about-us":
        return <AboutUs />;
      case "contact":
        return <Contact />;
      case "blogs":
        return <Blogs />;
      case "faqs":
        return <FAQs />;
      case "privacy-policy":
        return <PrivacyPolicy />;
      case "terms-of-service":
        return <TermsOfService />;
      case "refund-policy":
        return <RefundPolicy />;
      default:
        return (
          <Home
            onNavigate={handleNavigate}
            onSetContactDefault={(type) => setContactDefaultCategory(type)}
          />
        );
    }
  };

  return (
    <div id="smilyx-app-container" className="min-h-screen flex flex-col bg-slate-50/20 text-slate-800 antialiased selection:bg-brand-500 selection:text-white relative">
      {/* Dynamic Header navigation */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} onOpenQR={() => setIsQRModalOpen(true)} />

      {/* Main content wrapper with entry transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.42, ease: motionEase }}
            id="page-render-wrapper"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

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

      {/* Multi-column footer layout */}
      <Footer onNavigate={handleNavigate} onOpenQR={() => setIsQRModalOpen(true)} />

      {/* QR Code Modal Popup */}
      <QRCodeModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </div>
  );
}
