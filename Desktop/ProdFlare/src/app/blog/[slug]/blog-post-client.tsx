"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogPost } from "@/lib/data/blog";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-mint-primary/5 rounded-b-[100px] blur-[150px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-24 md:py-32 relative z-10 w-full">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-mint-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return to journal
          </Link>
        </div>

        {/* Article Meta */}
        <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-muted-foreground mb-4">
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          <span className="text-mint-primary border border-mint-primary/20 bg-mint-primary/5 px-2 py-0.5 rounded">
            {post.tags[0]}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Author Bio */}
        <div className="flex items-center gap-3 border-y border-border py-4 my-8">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-10 h-10 rounded-full border border-border object-cover" 
          />
          <div>
            <span className="text-sm font-semibold text-white block leading-none">{post.author.name}</span>
            <span className="text-xs text-muted-foreground block mt-1">{post.author.role}</span>
          </div>
        </div>

        {/* Body content */}
        <article className="prose prose-invert max-w-none text-muted-foreground space-y-6 font-sans text-sm md:text-base leading-relaxed">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>

        {/* Tags footer */}
        <div className="mt-12 pt-6 border-t border-border flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-card border border-border text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
export default BlogPostClient;
