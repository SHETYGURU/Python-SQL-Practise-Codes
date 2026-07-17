"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { teamMembers } from "@/lib/data/team";

export function StudioCulture() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Culture Card Container */}
        <div className="w-full rounded-2xl border border-border bg-card/20 backdrop-blur-sm p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Text Info */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-brown-accent"
            >
              Studio Culture
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-4 tracking-tight"
            >
              The Minds Behind <br />
              <span className="text-mint-primary">ProdFlare.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base text-muted-foreground mt-6 leading-relaxed font-sans"
            >
              We operate as a highly specialized, unified product squad. 
              Instead of scattering engineering and design efforts across separate company silos, 
              our leads work together under one roof, deploying years of launch experience to every product we incubate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-mono text-muted-foreground"
            >
              <span className="px-3 py-1.5 rounded-full border border-border bg-background">30-Day Execution</span>
              <span className="px-3 py-1.5 rounded-full border border-border bg-background">High Talent Density</span>
              <span className="px-3 py-1.5 rounded-full border border-border bg-background">Shared Ecosystem</span>
            </motion.div>
          </div>

          {/* Avatars Panel (Right) */}
          <div className="w-full lg:w-auto flex flex-col justify-center items-center gap-6 border-t lg:border-t-0 lg:border-l border-border/60 pt-8 lg:pt-0 lg:pl-16">
            <h3 className="text-sm font-mono text-brown-accent uppercase tracking-widest text-center">Meet the Squad</h3>
            <div className="flex flex-row items-center justify-center py-4 w-full">
              <AnimatedTooltip items={teamMembers} />
            </div>
            <p className="text-xs text-muted-foreground font-sans text-center max-w-xs leading-relaxed">
              Hover over each avatar to view designation details. Our squad is built for performance.
            </p>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
export default StudioCulture;
