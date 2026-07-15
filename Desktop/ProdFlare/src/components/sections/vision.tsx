"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines";

export function Vision() {
  return (
    <section id="vision" className="relative w-full bg-transparent overflow-hidden flex items-center justify-center">
      <BackgroundLines className="flex flex-col items-center justify-center w-full px-4 text-center py-24 md:py-32 bg-transparent">
        <div className="max-w-6xl mx-auto z-10 relative w-full flex flex-col">
          
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-brown-accent mb-6"
            >
              Our Core Vision
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground tracking-tight leading-[1.1]"
            >
              Building Products <br />
              <span className="text-mint-primary">That Matter.</span>
            </motion.h2>
          </div>

          {/* Distributed Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto w-full text-left">
            
            {/* Left Column: Metrics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-t md:border-t-0 md:border-r border-border/60 pt-8 md:pt-0 md:pr-12 grid grid-cols-2 gap-6"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-brown-accent font-mono font-semibold">Velocity</p>
                <p className="text-sm font-sans mt-2 text-muted-foreground leading-relaxed">30-day concept to MVP pipeline</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brown-accent font-mono font-semibold">Focus</p>
                <p className="text-sm font-sans mt-2 text-muted-foreground leading-relaxed">Aesthetics, security, and global scale</p>
              </div>
            </motion.div>

            {/* Right Column: Paragraphs */}
            <div className="flex flex-col gap-6 text-base sm:text-lg text-muted-foreground font-sans font-normal leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                ProdFlare is a startup studio dedicated to discovering opportunities, validating ideas, and launching products that solve meaningful problems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Instead of focusing on a single application, we continuously build and scale products across AI, productivity, analytics, and developer tools.
              </motion.p>
            </div>

          </div>
        </div>
      </BackgroundLines>
    </section>
  );
}
export default Vision;
