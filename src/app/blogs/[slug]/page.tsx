import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/src/data";
import { breadcrumbSchema, siteName, siteUrl } from "@/src/lib/site";
import BlogContentRenderer from "@/src/components/BlogContentRenderer";

type Props = { params: Promise<{ slug: string }> };

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export async function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `${siteUrl}/blogs/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "orthodontics", "clear aligners", "dental health", post.title],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      siteName,
      locale: "en_US",
      images: [{ url: post.imageUrl, width: 1200, height: 630, alt: post.title }],
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.date).toISOString(),
      authors: [post.author.name],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

export default async function BlogArticle({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const url = `${siteUrl}/blogs/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: [post.imageUrl],
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo-emblem-square.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: post.category,
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Publications", path: "/blogs" },
    { name: post.title, path: `/blogs/${post.slug}` },
  ]);

  return (
    <article className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 font-display font-bold text-xs uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4" />Back to publications
        </Link>
        <div className="mt-8 aspect-video relative overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
          <Image src={post.imageUrl} alt={post.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-8 text-xs text-slate-500 font-semibold">
          <span className="bg-brand-50 text-brand-700 px-3 py-1 rounded-full border border-brand-100">{post.category}</span>
          <span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
          <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-slate-900 leading-tight mt-6">{post.title}</h1>
        <p className="mt-5 text-slate-600 italic border-l-4 border-brand-400 pl-4">{post.excerpt}</p>
        <div className="mt-8 space-y-4 text-slate-700 leading-relaxed">
          <BlogContentRenderer content={post.content} />
          <p className="mt-6">Clear aligner treatment works best when tooth movements are planned in small, controlled stages. Vélourcare Ortho aligners are hand-finished to support comfort and reduce avoidable soft-tissue irritation.</p>
          <p>Before starting treatment, we recommend a full intraoral scan and periodontal review to confirm that the teeth and supporting tissues are ready for movement.</p>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </article>
  );
}

