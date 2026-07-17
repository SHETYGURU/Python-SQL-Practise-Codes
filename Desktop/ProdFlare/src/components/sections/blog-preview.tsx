"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { blogPosts } from "@/lib/data/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export function BlogPreview() {
  const [active, setActive] = useState<(typeof blogPosts)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-brown-accent"
          >
            Insights & Research
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-4 tracking-tight"
          >
            Latest From The Studio
          </motion.h2>
        </div>

        {/* Expandable Cards overlay */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-50"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active ? (
            <div className="fixed inset-0 grid place-items-center z-[100] p-4">
              {/* Close Button Mobile */}
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-4 right-4 items-center justify-center bg-[#0F1713] border border-border rounded-full h-8 w-8 text-white z-[110]"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>

              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-card border border-border sm:rounded-2xl overflow-hidden shadow-2xl relative"
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-mint-primary/5 rounded-full blur-2xl pointer-events-none" />

                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <div className="h-56 md:h-64 w-full bg-gradient-to-br from-mint-primary/20 to-brown-accent/20 relative flex items-center justify-center overflow-hidden">
                    {/* Simulated blog placeholder graphic */}
                    <div className="absolute inset-0 bg-[#08110D]/80 flex flex-col justify-between p-6">
                      <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {active.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {active.readTime}</span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-heading font-extrabold text-white tracking-tight leading-tight mt-6">
                        {active.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                  {/* Author Row */}
                  <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                    <img 
                      src={active.author.avatar} 
                      alt={active.author.name} 
                      className="w-10 h-10 rounded-full border border-border object-cover" 
                    />
                    <div>
                      <h5 className="text-sm font-semibold text-foreground leading-none">{active.author.name}</h5>
                      <span className="text-xs text-muted-foreground mt-1 block">{active.author.role}</span>
                    </div>
                  </div>

                  {/* Article content preview */}
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-muted-foreground text-xs md:text-sm leading-relaxed space-y-4 pr-2"
                  >
                    {active.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </motion.div>

                  {/* Actions */}
                  <div className="mt-8 pt-4 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Link
                      href={`/blog/${active.slug}`}
                      onClick={() => {
                        // Re-enable scroll when navigating away
                        document.body.style.overflow = "auto";
                      }}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-mint-primary hover:text-mint-glow transition-colors"
                    >
                      Read full article <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => setActive(null)}
                      className="w-full sm:w-auto px-5 py-2 rounded-md bg-white text-black hover:bg-neutral-200 text-xs font-semibold"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        {/* Home Blog List */}
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-4">
          {blogPosts.map((post) => (
            <motion.div
              layoutId={`card-${post.title}-${id}`}
              key={`card-${post.title}-${id}`}
              onClick={() => setActive(post)}
              className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center bg-card/35 hover:bg-card/75 border border-border/80 rounded-xl cursor-pointer transition-all duration-300 gap-4"
            >
              <div className="flex gap-4 items-start md:items-center">
                {/* Simulated Thumbnail */}
                <motion.div 
                  layoutId={`image-${post.title}-${id}`}
                  className="w-12 h-12 rounded bg-gradient-to-br from-mint-primary/10 to-mint-primary/30 flex items-center justify-center border border-border text-mint-primary flex-shrink-0"
                >
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </motion.div>
                
                <div>
                  <motion.h3
                    layoutId={`title-${post.title}-${id}`}
                    className="font-heading font-bold text-base md:text-lg text-foreground leading-tight"
                  >
                    {post.title}
                  </motion.h3>
                  
                  <motion.p
                    layoutId={`description-${post.excerpt}-${id}`}
                    className="text-xs md:text-sm text-muted-foreground mt-1 font-sans line-clamp-1"
                  >
                    {post.excerpt}
                  </motion.p>
                </div>
              </div>

              {/* Read button */}
              <motion.button
                layoutId={`button-${post.title}-${id}`}
                className="px-4 py-2 text-xs rounded border border-border bg-background hover:border-mint-primary hover:text-mint-primary font-semibold text-foreground transition-all duration-200 self-end md:self-auto flex-shrink-0"
              >
                Read Post
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* View All Blog Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors border border-border/60 bg-card/20 px-6 py-2.5 rounded-lg backdrop-blur-sm"
          >
            Visit Studio Blog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </motion.section>
  );
}
export default BlogPreview;
