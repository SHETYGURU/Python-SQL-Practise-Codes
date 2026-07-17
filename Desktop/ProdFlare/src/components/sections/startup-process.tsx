"use client";

import React from "react";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";

interface TimelineStep {
  title: string;
  description: string;
  badge: string;
  details: string[];
}

export function StartupProcess() {
  const steps: TimelineStep[] = [
    {
      badge: "Step 01",
      title: "Ideation & Opportunity Mapping",
      description: "We identify friction points in software creation and growth. We analyze developer and business pain points that are currently underserved.",
      details: [
        "Continuous feedback monitoring from partner networks.",
        "Deep dives into productivity bottlenecks.",
        "Selecting only high-impact, high-velocity SaaS ideas."
      ]
    },
    {
      badge: "Step 02",
      title: "Validation & Design Specifications",
      description: "Before writing code, we map out full specifications. We build visual user journeys and solicit immediate feedback from target customer cohorts.",
      details: [
        "Interactive low-fidelity designs drafted in 7 days.",
        "Initial demand testing and secure deck previews.",
        "Establishing the target core stack (React, Next, Forge Edge)."
      ]
    },
    {
      badge: "Step 03",
      title: "Rapid Prototyping & Build",
      description: "Our engineering squad develops the first production version within 30 days. We focus exclusively on the core value proposition.",
      details: [
        "Zero boilerplate. Clean serverless microservice setup.",
        "Premium visual aesthetics established out of the box.",
        "Internal telemetry hooks configured for performance tracking."
      ]
    },
    {
      badge: "Step 04",
      title: "Launch to Core Adopters",
      description: "We deploy the application to our distributed server network and open it to early access users. We monitor runtime stability and user engagement.",
      details: [
        "Releasing beta endpoints on Forge global edge.",
        "Analyzing crash reports and tracking user telemetry.",
        "Gathering structured customer feedback."
      ]
    },
    {
      badge: "Step 05",
      title: "Scale & Spin Out",
      description: "Once product-market fit indicators trigger, we scale the project. We establish dedicated team leads and secure independent growth capital.",
      details: [
        "Expanding feature suites and regional caches.",
        "Building dedicated sales and support pipelines.",
        "Appointing a full-time General Manager to run operations."
      ]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Centered layout */}
        <div className="text-center max-w-3xl mx-auto mb-20 border-b border-border/30 pb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-brown-accent"
          >
            Studio Playbook
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-4 tracking-tight"
          >
            How We Build Startups
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            We run a repeatable framework designed for capital efficiency, speed to market, and high-fidelity output.
          </motion.p>
        </div>

        {/* Tracing Beam Timeline */}
        <div className="max-w-4xl mx-auto">
          <TracingBeam className="px-6 md:px-12">
            <div className="relative antialiased pt-4">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.badge} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-16 md:mb-24 last:mb-0 pl-4 md:pl-8"
                >
                  
                  {/* Step Badge */}
                  <span className="inline-block bg-mint-primary/10 border border-mint-primary/20 text-mint-primary rounded-full text-xs font-mono font-semibold px-4 py-1 mb-4">
                    {step.badge}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-xl md:text-2xl font-heading font-extrabold text-foreground tracking-tight">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Detailed Bullets */}
                  <ul className="mt-6 space-y-2 border-l border-border/60 pl-4 text-xs md:text-sm text-muted-foreground">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brown-accent flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                </motion.div>
              ))}
            </div>
          </TracingBeam>
        </div>

      </div>
    </motion.section>
  );
}
export default StartupProcess;
