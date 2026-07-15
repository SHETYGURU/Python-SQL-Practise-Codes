"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Brain, Cpu, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-background overflow-hidden flex items-center pt-24 md:pt-32">
      {/* Background radial accent behind content */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-mint-primary/10 rounded-full blur-[120px] pointer-events-none scale-75" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Glowing Dot Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 self-start px-3 py-1 rounded-full border border-mint-primary/10 bg-mint-primary/5 text-mint-primary text-xs uppercase tracking-widest font-mono mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-mint-glow animate-pulse" />
              Startup Studio & Build Squad
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-foreground leading-[1.05]">
              One Studio. <br />
              <span className="text-mint-primary">Infinite</span>{" "}
              <span className="bg-gradient-to-r from-[#E7977A] to-[#C7A27C] bg-clip-text text-transparent">
                Possibilities.
              </span>
            </h1>

            {/* Subheadline description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl font-sans leading-relaxed"
            >
              We transform ambitious ideas into digital products, building tools that shape the future. Experience high-velocity SaaS engineering designed for scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-20 pointer-events-auto"
            >
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-mint-primary px-8 text-sm font-semibold text-black shadow-lg hover:bg-mint-glow hover:scale-105 transition-all duration-200"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-border bg-card/45 hover:bg-card/75 px-8 text-sm font-semibold text-foreground transition-all duration-200 gap-2.5 group"
              >
                <div className="w-6 h-6 rounded-full bg-[#E7977A]/15 border border-[#E7977A]/30 flex items-center justify-center text-[#E7977A] group-hover:scale-110 transition-transform">
                  <Play className="w-2 h-2 fill-[#E7977A] ml-0.5" />
                </div>
                Get In Touch
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-border/60 grid grid-cols-3 gap-3 sm:gap-6 text-left"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground tracking-tight">4</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 font-sans font-medium uppercase tracking-wider">Active Products</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground tracking-tight">10K+</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 font-sans font-medium uppercase tracking-wider">Global Users</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground tracking-tight">99.9%</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 font-sans font-medium uppercase tracking-wider">Uptime SLA</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visualizer and Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center h-[350px] md:h-[450px]">
            {/* Concentric Circle Visualizer Graphic */}
            <ConcentricVisualizer />

            {/* Top Floating Badge Card */}
            <FloatingCard
              title="Nova AI"
              subtitle="Cognitive Workspace"
              icon={<Brain className="w-4 h-4 text-mint-primary" />}
              className="absolute top-4 left-0 sm:left-[5%] md:left-[2%] z-20 scale-85 sm:scale-100 origin-left"
              delay={0}
            />

            {/* Bottom Floating Badge Card */}
            <FloatingCard
              title="Forge Edge"
              subtitle="Sub-ms Global Deploy"
              icon={<Cpu className="w-4 h-4 text-[#E7977A]" />}
              className="absolute bottom-4 right-0 sm:right-[5%] md:right-[2%] z-20 scale-85 sm:scale-100 origin-right"
              delay={2.5}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* Concentric Animated Circle Component */
function ConcentricVisualizer() {
  return (
    <div className="relative w-full aspect-square max-w-[340px] md:max-w-[400px] flex items-center justify-center">
      {/* Ambient background glow behind the visualizer circles */}
      <div className="absolute inset-0 bg-mint-primary/10 rounded-full blur-[100px] pointer-events-none scale-75" />

      {/* Ring 4 (Outermost dotted) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute w-[100%] h-[100%] rounded-full border border-dotted border-muted-foreground/20 flex items-center justify-center"
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D4B89E] opacity-60" />
      </motion.div>

      {/* Ring 3 (Outer dashed) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="absolute w-[82%] h-[82%] rounded-full border-2 border-dashed border-mint-primary/15 flex items-center justify-center"
      >
        <div className="absolute bottom-4 right-1/4 w-2 h-2 rounded-full bg-mint-primary shadow-[0_0_10px_var(--color-mint-primary)]" />
      </motion.div>

      {/* Ring 2 (Middle solid/dashed) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute w-[64%] h-[64%] rounded-full border border-[#E7977A]/25 flex items-center justify-center"
      >
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[#E7977A]" />
      </motion.div>

      {/* Ring 1 (Inner solid) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="absolute w-[46%] h-[46%] rounded-full border border-foreground/10 flex items-center justify-center"
      >
        <div className="absolute top-1 left-1/3 w-1.5 h-1.5 rounded-full bg-foreground opacity-80" />
      </motion.div>

      {/* Central Pulsing core */}
      <div className="absolute w-[20%] h-[20%] rounded-full bg-card border border-border shadow-[0_0_20px_rgba(143,216,182,0.15)] flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-1/2 h-1/2 rounded-full bg-mint-primary shadow-[0_0_12px_#8FD8B6] flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-background" />
        </motion.div>
      </div>
    </div>
  );
}

/* Floating Card Component */
interface FloatingCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

function FloatingCard({ title, subtitle, icon, className = "", delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: [0, -10, 0] 
      }}
      transition={{
        opacity: { duration: 0.6, ease: "easeOut" },
        y: {
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: delay
        }
      }}
      className={`flex items-center gap-2 sm:gap-4 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-xl border border-border/80 bg-card/65 backdrop-blur-md shadow-lg select-none pointer-events-none ${className}`}
    >
      <div className="p-2 rounded-lg bg-background border border-border flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xs sm:text-sm font-heading font-extrabold text-foreground leading-none">{title}</h4>
        <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mt-1 leading-none">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default Hero;
