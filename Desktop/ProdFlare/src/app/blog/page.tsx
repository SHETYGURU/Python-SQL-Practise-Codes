"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/data/blog";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-mint-primary/5 rounded-b-[100px] blur-[150px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mint-primary/10 bg-mint-primary/5 text-mint-primary text-xs uppercase tracking-widest font-mono mb-4"
          >
            <BookOpen className="w-3 h-3" />
            Studio Journal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Insights & Strategy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground mt-4 leading-relaxed"
          >
            Thought leadership, design breakdowns, and technical case studies compiled by the ProdFlare build squad.
          </motion.p>
        </div>

        {/* Blog Post List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-2xl border border-border bg-card/35 hover:bg-card/75 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card ambient gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-mint-primary/5 rounded-full blur-2xl pointer-events-none" />

              {/* Meta information */}
              <div className="flex justify-between items-center text-xs font-mono text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              </div>

              {/* Title & Excerpt */}
              <h2 className="text-xl md:text-2xl font-heading font-extrabold text-foreground tracking-tight hover:text-mint-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-sans">
                {post.excerpt}
              </p>

              {/* Author & Read More row */}
              <div className="mt-6 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-8 h-8 rounded-full border border-border object-cover" 
                  />
                  <div>
                    <span className="text-xs font-semibold text-foreground block leading-none">{post.author.name}</span>
                    <span className="text-[10px] text-muted-foreground block mt-1">{post.author.role}</span>
                  </div>
                </div>

                {/* Read Full Article Button */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-mint-primary hover:text-mint-glow transition-all duration-200 uppercase tracking-wider"
                >
                  Read full article <ArrowRight className="w-3.5 h-3.5" />
                </Link>

              </div>
            </motion.article>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
