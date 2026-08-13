"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QrCode, X, Copy, Check, Download, Share2, Smartphone, ExternalLink } from "lucide-react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  siteUrl?: string;
  title?: string;
}

export default function QRCodeModal({
  isOpen,
  onClose,
  siteUrl = typeof window !== "undefined" ? window.location.origin : "https://velourcare.com",
  title = "Vélourcare Mobile Access"
}: QRCodeModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"qr" | "details">("qr");
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const currentUrl = siteUrl && siteUrl !== "null" ? siteUrl : "https://velourcare.com";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const handleDownloadQR = () => {
    const canvas = canvasContainerRef.current?.querySelector("canvas");
    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "velourcare-qr-code.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-md bg-[#FCFBF8] border border-[#E5E0D6] rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 px-6 py-5 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-brand-500/15 border border-brand-500/30 rounded-xl text-brand-400">
                <QrCode className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white tracking-wide">
                  {title}
                </h3>
                <p className="text-xs text-slate-400">Scan to open on smartphone</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close QR Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 text-slate-800 space-y-6">
            {/* QR Code Container */}
            <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative group">
              <div ref={canvasContainerRef} className="relative p-3 bg-white rounded-xl shadow-inner border border-slate-100">
                <QRCodeCanvas
                  value={currentUrl}
                  size={200}
                  level="H"
                  marginSize={2}
                  fgColor="#0f172a"
                  bgColor="#ffffff"
                  imageSettings={{
                    src: "/logo-icon.png",
                    x: undefined,
                    y: undefined,
                    height: 36,
                    width: 36,
                    excavate: true,
                  }}
                />
              </div>

              <div className="mt-4 flex items-center space-x-2 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                <Smartphone className="w-3.5 h-3.5 text-brand-600" />
                <span>Open camera & point at QR code</span>
              </div>
            </div>

            {/* Site URL Display & Copy */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Website Link
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 font-mono truncate select-all">
                  {currentUrl}
                </div>
                <button
                  onClick={handleCopyLink}
                  className={`px-3.5 py-2.5 rounded-xl font-display text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 ${
                    copied
                      ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                      : "bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/10"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleDownloadQR}
                className="w-full py-3 px-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-900 font-display text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-500/20 hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PNG</span>
              </button>
              <a
                href={currentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Link</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
