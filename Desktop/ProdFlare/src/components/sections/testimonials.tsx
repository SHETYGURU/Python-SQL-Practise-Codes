"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
  const items = [
    {
      quote: "ProdFlare’s vision for product innovation is incredibly compelling. They build software with absolute precision.",
      name: "Dr. Sarah Jenkins",
      title: "Venture Partner, Vanguard Capital",
    },
    {
      quote: "Beautiful execution and outstanding attention to detail. Every interface transition and loading state feels expensive.",
      name: "Alex Rivers",
      title: "VP of Product, CloudScale Inc",
    },
    {
      quote: "An exciting company to watch. Their 30-day MVP framework produces software that beats enterprise competitors.",
      name: "Liam Thorne",
      title: "Founder, Zenith Labs & Angel Investor",
    },
    {
      quote: "Deploying Orbit has automated our client telemetry pipelines, saving us 14+ engineering hours every single week.",
      name: "Aria Patel",
      title: "Chief Technology Officer, Synthetix",
    },
    {
      quote: "Forge edge deployment responds in 1.4ms. Their global caching engine is stable, performant, and secure.",
      name: "Nils Lindqvist",
      title: "Principal Infrastructure Lead, Kinetik Systems",
    },
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
            Social Proof
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-4 tracking-tight"
          >
            What Industry Leaders Say
          </motion.h2>
        </div>

        {/* Infinite Moving Cards Container */}
        <div className="relative rounded-2xl flex flex-col items-center justify-center overflow-hidden py-10 bg-card/10 border border-border/80">
          <InfiniteMovingCards
            items={items}
            direction="left"
            speed="slow"
          />
        </div>

      </div>
    </motion.section>
  );
}
export default Testimonials;
