"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Calendar, User, Clock, ArrowLeft, ArrowRight, X, ChevronRight } from "lucide-react";
import { blogPosts } from "../data";
import { BlogPost } from "../types";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";
import BlogContentRenderer from "../components/BlogContentRenderer";

export default function Blogs() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  const categories = ["All", "3D Setup Science", "Biomechanics", "Post-Care", "Education"];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div id="blogs-page" className="pb-20 bg-white space-y-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Reading articles backdrop"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="layout-container relative z-10 text-center space-y-4">
          <div className="badge badge-underline badge-underline--dark" id="badge-underline-dark">
            <BookOpen className="badge-icon" />
            <span>Vélourcare Publications</span>
            <div className="badge-underline__line badge-underline__line--gold"></div>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Clinical Insights & Care Guides
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Practical notes on clear aligners, biomechanics, dental hygiene, and post-treatment retention.
          </p>
        </Reveal>
      </section>

      {activeBlog ? (
        /* Blog Article Reader View */
        <RevealGroup id="active-article-reader" className="max-w-3xl mx-auto px-4 space-y-8">
          {/* Back Button */}
          <button
            onClick={() => {
              setActiveBlog(null);
              window.scrollTo({ top: 300, behavior: "smooth" });
            }}
            className="inline-flex items-center space-x-2 text-slate-500 hover:text-brand-600 font-display font-bold text-xs uppercase tracking-wider cursor-pointer group py-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back To Publications</span>
          </button>

          {/* Featured Image */}
          <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-100">
            <img
              src={activeBlog.imageUrl}
              alt={activeBlog.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Metadata */}
          <div className="flex items-center space-x-4 flex-wrap gap-y-2 text-xs text-slate-500 font-semibold">
            <span className="bg-brand-50 text-brand-700 px-3 py-1 rounded-full border border-brand-100">
              {activeBlog.category}
            </span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{activeBlog.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{activeBlog.readTime}</span>
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-snug">
              {activeBlog.title}
            </h2>
            <p className="text-slate-600 text-sm italic rounded-2xl border border-brand-100 bg-brand-50/40 px-4 py-3 leading-relaxed">
              "{activeBlog.excerpt}"
            </p>
          </div>


          {/* Main content body */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 pt-4 border-t border-slate-100 font-sans">
            <BlogContentRenderer content={activeBlog.content} />
            <p className="text-slate-600 mt-6">
              Clear aligner treatment works best when tooth movements are planned in small, controlled stages. Vélourcare Ortho aligners are hand-finished to support comfort and reduce avoidable soft-tissue irritation.
            </p>
            <p className="text-slate-600">
              Before starting clear aligner treatment, we recommend a full intraoral scan and periodontal review to confirm that the teeth and supporting tissues are ready for movement. Visit How We Treat to see how we build the clinical baseline.
            </p>
          </div>

          <div className="pt-10 border-t border-slate-100 flex justify-between items-center">
            <button
              onClick={() => {
                setActiveBlog(null);
                window.scrollTo({ top: 300, behavior: "smooth" });
              }}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-display font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer"
            >
              Back To All Articles
            </button>
          </div>
        </RevealGroup>
      ) : (
        /* Blog List View */
        <section className="layout-container space-y-12">
          {/* Category Tabs */}
          <Reveal className="flex flex-wrap items-center justify-start gap-2 border-b border-slate-100 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
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

          {/* Grid of post teasers */}
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" childClassName="h-full">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                id={`blog-card-${post.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full"
                onClick={() => {
                  router.push(`/blogs/${post.slug}`);
                }}
              >
                <div className="space-y-4">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex items-center space-x-3 text-[10px] text-slate-400 font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-50 flex items-center justify-end mt-4">
                  <span className="text-brand-600 hover:text-brand-700 font-display font-bold text-[10px] tracking-wider uppercase inline-flex items-center space-x-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </RevealGroup>
        </section>
      )}
    </div>
  );
}
