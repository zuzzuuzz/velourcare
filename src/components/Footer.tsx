"use client";

import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock, MessageCircle, ArrowUp, QrCode } from "lucide-react";
import { officeAddress, officeHours, officeContact } from "../data";
import Logo from "./Logo";

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenQR?: () => void;
}

export default function Footer({ onNavigate, onOpenQR }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (page: string) => {
    onNavigate(page);
    scrollToTop();
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-850">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <button
              id="footer-logo-button"
              onClick={() => handleNavClick("home")}
              className="flex items-center text-left group cursor-pointer"
            >
              <Logo variant="dark" />
            </button>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Digital orthodontic setups and clear aligner therapy planned by orthodontists for dental partners and direct patients.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com/velourcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-500 hover:text-slate-900 flex items-center justify-center transition-all duration-200 text-slate-400"
                aria-label="Follow Vélourcare Ortho on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/velourcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-500 hover:text-slate-900 flex items-center justify-center transition-all duration-200 text-slate-400"
                aria-label="Follow Vélourcare Ortho on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/velourcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-500 hover:text-slate-900 flex items-center justify-center transition-all duration-200 text-slate-400"
                aria-label="Follow Vélourcare Ortho on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923294053244"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-500 hover:text-slate-900 flex items-center justify-center transition-all duration-200 text-slate-400"
                aria-label="Chat with Vélourcare Ortho on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest">
              Contact Details
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>{officeAddress}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <a href={`tel:${officeContact.phone}`} className="hover:text-white transition-colors">
                  {officeContact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <a href={`mailto:${officeContact.email}`} className="hover:text-white transition-colors">
                  {officeContact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest">
              Clinic Hours
            </h3>
            <ul className="space-y-3 text-sm">
              {officeHours.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-300">{item.days}</p>
                    <p className="text-slate-400 text-xs">{item.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest">
              Sitemap
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button
                onClick={() => handleNavClick("home")}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("how-we-treat")}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Process
              </button>
              <button
                onClick={() => handleNavClick("invisalign")}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Invisalign
              </button>
              <button
                onClick={() => handleNavClick("kids-ortho")}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Kids Ortho
              </button>
              <button
                onClick={() => handleNavClick("adult-ortho")}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Adult Ortho
              </button>
              <button
                onClick={() => handleNavClick("about-us")}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Contact
              </button>
              <button
                onClick={() => handleNavClick("blogs")}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                Blogs
              </button>
              <button
                onClick={() => handleNavClick("faqs")}
                className="text-left hover:text-white transition-colors py-1 cursor-pointer"
              >
                FAQs
              </button>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Section */}
        <div className="border-t border-slate-850 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Vélourcare Ortho. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleNavClick("privacy-policy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNavClick("terms-of-service")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => handleNavClick("refund-policy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
            {onOpenQR && (
              <button
                onClick={onOpenQR}
                className="flex items-center space-x-1 hover:text-brand-400 text-slate-300 transition-colors cursor-pointer bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700 hover:border-brand-500/50"
                title="Get website QR code for mobile access"
              >
                <QrCode className="w-3.5 h-3.5 text-brand-400" />
                <span>QR Access</span>
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="bg-slate-800 hover:bg-brand-500 hover:text-slate-900 text-white p-2 rounded-full transition-all duration-200 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
