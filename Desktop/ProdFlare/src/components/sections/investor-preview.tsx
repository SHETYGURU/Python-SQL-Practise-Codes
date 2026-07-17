"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Check } from "lucide-react";

export function InvestorPreview() {
  const highlights = [
    "Venture Studio Model: Capital-efficient diversification",
    "Rapid 30-day concept-to-MVP validation pipeline",
    "Shared infrastructure and design systems across products",
    "Targeting high-margin software sectors (AI, Analytics, DevOps)"
  ];

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
            Venture Capital
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-4 tracking-tight"
          >
            Investor Relations
          </motion.h2>
        </div>

        {/* Card Spotlight Container */}
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <CardSpotlight className="w-full rounded-2xl bg-card/30 border border-border/80 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center md:items-stretch justify-between">
            
            {/* Left Content Column */}
            <div className="flex-1 flex flex-col justify-between relative z-20">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground leading-tight">
                  Backing The Next Generation Of Innovation
                </h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  ProdFlare builds scalable software products designed for long-term growth and global impact. 
                  We offer institutional partners direct exposure to high-margin SaaS ecosystems.
                </p>

                {/* Highlights List */}
                <ul className="mt-8 space-y-3">
                  {highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-muted-foreground">
                      <div className="w-4 h-4 rounded-full bg-mint-primary/10 border border-mint-primary/30 text-mint-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-sans">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right CTA / Portal Link Column */}
            <div className="w-full md:w-80 flex flex-col justify-center items-center relative z-20 border-t md:border-t-0 md:border-l border-border/60 pt-8 md:pt-0 md:pl-10">
              <div className="text-center md:text-left">
                <span className="text-[10px] font-mono text-brown-accent uppercase tracking-widest block mb-2">SECURE PORTAL</span>
                <p className="text-xs text-muted-foreground mb-6 font-sans">
                  Access financial statements, studio returns, growth telemetry, and requests for capital.
                </p>
                <Link
                  href="/investors"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-mint-primary px-8 text-sm font-semibold text-black hover:bg-mint-glow hover:scale-105 transition-all duration-200"
                >
                  Request Investor Deck
                </Link>
              </div>
            </div>

          </CardSpotlight>
        </div>

      </div>
    </motion.section>
  );
}
export default InvestorPreview;
