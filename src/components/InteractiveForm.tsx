"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Upload, Calendar, Clock } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { motionEase } from "./motionPresets";

interface InteractiveFormProps {
  defaultEnquiryType?: "trial" | "meeting" | "general";
}

export default function InteractiveForm({ defaultEnquiryType = "general" }: InteractiveFormProps) {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: defaultEnquiryType,
    meetingDate: "",
    meetingTime: "",
    message: "",
    agreedToTerms: false
  });

  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files ?? []);
    if (selectedFiles.length > 6) {
      setErrorMsg("You can upload up to 6 images at a time.");
      return;
    }
    if (selectedFiles.some((file) => !file.type.startsWith("image/") || file.size > 10 * 1024 * 1024)) {
      setErrorMsg("Please choose image files no larger than 10MB each.");
      return;
    }
    setErrorMsg("");
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name || !formData.email) {
      setErrorMsg("Please fill in your name and email address.");
      return;
    }

    if (!formData.agreedToTerms) {
      setErrorMsg("You must accept the terms of data processing to continue.");
      return;
    }

    setIsSubmitting(true);
    try {
      let imageUrls: string[] = [];
      if (files.length) {
        const signatureResponse = await fetch("/api/cloudinary-signature", { method: "POST" });
        const signatureData = await signatureResponse.json();
        if (!signatureResponse.ok) throw new Error(signatureData.error || "Image upload is unavailable.");

        imageUrls = await Promise.all(files.map(async (file) => {
          const uploadData = new FormData();
          uploadData.append("file", file);
          uploadData.append("api_key", signatureData.apiKey);
          uploadData.append("timestamp", String(signatureData.timestamp));
          uploadData.append("signature", signatureData.signature);
          uploadData.append("folder", signatureData.folder);
          uploadData.append("type", signatureData.type);
          const uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/${signatureData.cloudName}/image/upload`, {
            method: "POST",
            body: uploadData,
          });
          const uploadResult = await uploadResponse.json();
          if (!uploadResponse.ok || !uploadResult.secure_url) throw new Error("One or more images could not be uploaded.");
          return uploadResult.secure_url as string;
        }));
      }

      const submissionResponse = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, imageUrls }),
      });
      const submissionResult = await submissionResponse.json();
      if (!submissionResponse.ok) throw new Error(submissionResult.error || "We could not submit your inquiry.");

      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "general",
        meetingDate: "",
        meetingTime: "",
        message: "",
        agreedToTerms: false
      });
      setFiles([]);
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "We could not submit your inquiry. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div id="interactive-form-root" className="bg-[#FCFBF8] rounded-3xl shadow-2xl p-6 sm:p-10 border border-[#E5E0D6] relative overflow-hidden transition-all duration-300">
      {/* Decorative top strip */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600" />

      <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          id="form-success-state"
          className="py-12 text-center space-y-6"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: shouldReduceMotion ? 0.18 : 0.3, ease: motionEase }}
        >
          <motion.div
            className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto text-brand-600"
            initial={shouldReduceMotion ? false : { scale: 0.92 }}
            animate={shouldReduceMotion ? undefined : { scale: 1 }}
            transition={{ duration: 0.32, ease: motionEase }}
          >
            <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
          </motion.div>
          <div className="space-y-2">
            <h3 className="font-display font-extrabold text-2xl text-slate-900">
              Clinical Submission Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you. Your enquiry has been sent to our lab team. An orthodontic setup coordinator will contact you by email within 4 hours.
            </p>
          </div>
          {formData.enquiryType === "meeting" && (
            <div className="bg-slate-50 p-4 rounded-2xl max-w-xs mx-auto text-xs border border-slate-100 space-y-1">
              <span className="font-bold text-slate-800">Meeting Scheduled</span>
              <p className="text-slate-500">We have noted your preferred consultation time. Watch your inbox for a Google Meet calendar invite.</p>
            </div>
          )}
          <button
            onClick={() => setIsSuccess(false)}
            className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-slate-900 text-xs font-display font-bold uppercase tracking-wider rounded-full shadow-md transition-all duration-150 cursor-pointer"
          >
            Submit Another Case
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          id="clinical-entry-form"
          className="space-y-6"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: shouldReduceMotion ? 0.18 : 0.28, ease: motionEase }}
        >
          <div className="space-y-2">
            <div className="flex items-center text-brand-600">
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                Clinical Lab Portal
              </span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Start Your Aligner Setup
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Submit patient details, upload clinical files, or book an introductory design meeting with our orthodontists.
            </p>
          </div>

          {errorMsg && (
            <div id="form-error" className="bg-red-50 text-red-700 text-xs font-semibold px-4 py-3 rounded-xl border border-red-100">
              {errorMsg}
            </div>
          )}

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name-input"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Dr. Amanda Ross or Patient Name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all bg-slate-50/50"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email-input"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="doctor@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all bg-slate-50/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="phone-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone-input"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+65 xxxx xxxx"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all bg-slate-50/50"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="enquiryType-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Enquiry Category
              </label>
              <select
                id="enquiryType-select"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all bg-slate-50/50"
              >
                <option value="trial">Submit Trial Case (Orthodontist Setup)</option>
              <option value="meeting">Schedule Design Meeting</option>
                <option value="general">Patient Treatment Inquiry</option>
              </select>
            </div>
          </div>

          {/* Conditional Meeting Scheduler inputs */}
          <AnimatePresence>
          {formData.enquiryType === "meeting" && (
            <motion.div
              id="meeting-picker-block"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0.16 : 0.24, ease: motionEase }}
            >
              <div className="space-y-1.5">
                <label htmlFor="meetingDate-input" className="flex items-center space-x-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-brand-500" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  id="meetingDate-input"
                  name="meetingDate"
                  value={formData.meetingDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-sm focus:border-brand-500 bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="meetingTime-input" className="flex items-center space-x-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-brand-500" />
                  <span>Preferred Time</span>
                </label>
                <select
                  id="meetingTime-input"
                  name="meetingTime"
                  value={formData.meetingTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-sm focus:border-brand-500 bg-white"
                >
                  <option value="">Select a time slot</option>
                  <option value="09:00 AM">09:00 AM (SGT)</option>
                  <option value="11:00 AM">11:00 AM (SGT)</option>
                  <option value="02:00 PM">02:00 PM (SGT)</option>
                  <option value="04:00 PM">04:00 PM (SGT)</option>
                </select>
              </div>
            </motion.div>
          )}
          </AnimatePresence>

          {/* Clinical File Upload */}
          <div className="space-y-1.5">
            <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Upload Smile Photos (Optional)
            </span>
            <label
              htmlFor="clinical-file-upload"
              className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 hover:border-brand-500 bg-slate-50 hover:bg-brand-50/30 py-6 px-4 rounded-2xl cursor-pointer transition-all duration-150"
            >
              <Upload className="w-8 h-8 text-slate-400 mb-2" />
              <span className="text-sm font-semibold text-slate-700">
                {files.length ? `${files.length} image${files.length === 1 ? "" : "s"} selected` : "Click to choose photos"}
              </span>
              <span className="text-xs text-slate-400 mt-1">
              JPG, PNG, WEBP, or HEIC · up to 6 images · 10MB each
              </span>
              <input
                type="file"
                id="clinical-file-upload"
                name="file"
                className="hidden"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* message text area */}
          <div className="space-y-1.5">
            <label htmlFor="message-textarea" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Clinical Instructions / Symptoms
            </label>
            <textarea
              id="message-textarea"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about the case goals, previous orthodontic treatments, or patient symptoms..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all bg-slate-50/50"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="agreedToTerms-checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleInputChange}
              className="w-5 h-5 rounded text-brand-600 focus:ring-brand-100 border-slate-300 mt-0.5 cursor-pointer"
            />
            <label htmlFor="agreedToTerms-checkbox" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
              I agree to Vélourcare Ortho's{" "}
              <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline underline-offset-2 hover:text-brand-700 transition-colors">Terms &amp; Conditions</a>,{" "}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline underline-offset-2 hover:text-brand-700 transition-colors">Privacy Policy</a>, and{" "}
              <a href="/refund-policy" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline underline-offset-2 hover:text-brand-700 transition-colors">Refund Policy</a>{" "}
              in accordance with regional patient confidentiality requirements (PECA/PMC).
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            id="form-submit-button"
            disabled={isSubmitting}
            className={`w-full bg-brand-500 hover:bg-brand-600 disabled:bg-slate-400 text-slate-900 font-display font-bold text-sm uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
              isSubmitting ? "cursor-wait" : "cursor-pointer hover:-translate-y-0.5"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit to Lab</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      )}
      </AnimatePresence>
    </div>
  );
}
