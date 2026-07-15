"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CometCard } from "@/components/ui/comet-card";
import { Sparkles, Brain, Cpu, MessageSquare } from "lucide-react";

export function FeaturedProduct() {
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
            Featured Product
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-4 tracking-tight"
          >
            Nova AI: The Cognitive Workspace
          </motion.h2>
        </div>

        {/* Comet Card Showcase Container */}
        <div className="w-full flex items-center justify-center">
          <CometCard>
            <div className="relative w-full max-w-5xl rounded-2xl bg-card p-6 md:p-10 border border-border/80 overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Background ambient gradient */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-mint-primary/5 rounded-full blur-[100px] pointer-events-none" />

              {/* Product Info (Left) */}
              <div className="flex-1 flex flex-col justify-between relative z-10">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mint-primary/20 bg-mint-primary/10 text-mint-primary text-xs font-semibold mb-6">
                    <Sparkles className="w-3.5 h-3.5" />
                    Flagship Product
                  </div>

                  <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground leading-tight">
                    Supercharge Team Intelligence
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    Nova AI acts as the central processor for your studio project files, conversations, and calendar alerts. 
                    It operates in the background, continuously analyzing data and resolving workflow frictions.
                  </p>

                  {/* Highlights Grid */}
                  <div className="mt-8 space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded bg-background flex items-center justify-center border border-border text-mint-primary flex-shrink-0">
                        <Brain className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Semantic Knowledge Synthesis</h4>
                        <p className="text-xs text-muted-foreground mt-1">Converts disparate conversations and task threads into unified documents.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded bg-background flex items-center justify-center border border-border text-mint-primary flex-shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Automated Pipeline Actions</h4>
                        <p className="text-xs text-muted-foreground mt-1">Directly schedules calendar fixes and fires pull requests to resolve blockers.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-12 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/products/nova-ai"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-mint-primary px-6 text-sm font-semibold text-black hover:bg-mint-glow hover:scale-102 transition-all duration-200"
                  >
                    Launch Workspace
                  </Link>
                  <Link
                    href="/products/nova-ai"
                    className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View Product Specs →
                  </Link>
                </div>
              </div>

              {/* Mock Dashboard Screenshot (Right) */}
              <div className="flex-1 min-h-[300px] md:min-h-[400px] border border-border/80 bg-background/80 rounded-xl overflow-hidden relative p-4 flex flex-col justify-between font-mono text-[10px] md:text-xs">
                
                {/* Simulated Glass Browser Header */}
                <div className="flex justify-between items-center border-b border-border/50 pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="px-3 py-1 rounded bg-background border border-border/50 text-[10px] text-mint-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-mint-glow animate-pulse" />
                    nova.prodflare.com/workspace
                  </div>
                </div>

                {/* Simulated Workspace layout */}
                <div className="flex-1 flex gap-4 h-full overflow-hidden">
                  
                  {/* Left panel: sidebar */}
                  <div className="hidden sm:flex w-28 border-r border-border/30 pr-3 flex flex-col gap-3 text-muted-foreground">
                    <div className="font-semibold text-foreground pb-2 text-[10px] uppercase tracking-wider">Workspace</div>
                    <div className="text-mint-primary bg-mint-primary/5 px-2 py-1 rounded border border-mint-primary/10">Overview</div>
                    <div>Knowledge</div>
                    <div>Pipeline</div>
                    <div>Settings</div>
                  </div>

                  {/* Central panel: main details */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded border border-border/50 bg-card/40">
                        <div className="text-[10px] text-muted-foreground">AI SYNERGY</div>
                        <div className="text-lg md:text-xl font-heading font-extrabold text-foreground mt-1">98.4%</div>
                      </div>
                      <div className="p-3 rounded border border-border/50 bg-card/40">
                        <div className="text-[10px] text-muted-foreground">BLOCKERS SLAYED</div>
                        <div className="text-lg md:text-xl font-heading font-extrabold text-foreground mt-1">124</div>
                      </div>
                    </div>

                    {/* AI Chat box */}
                    <div className="flex-1 border border-border/50 bg-card/30 rounded p-3 flex flex-col justify-between overflow-hidden relative">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="w-3.5 h-3.5 text-mint-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-foreground">Nova Assist:</span>
                          <span className="text-muted-foreground block mt-1 text-[10px] md:text-xs">
                            Synthesized calendar blockers. Suggested shifting Orbit MVP launch 2 days earlier to optimize developer availability.
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 pt-2 border-t border-border/30 flex items-center justify-between text-[9px] text-muted-foreground">
                        <span>Waiting on prompt...</span>
                        <span className="px-1.5 py-0.5 rounded bg-mint-primary text-black font-semibold uppercase">PROMPT</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </CometCard>
        </div>

      </div>
    </motion.section>
  );
}
export default FeaturedProduct;
