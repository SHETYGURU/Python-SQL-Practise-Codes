"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Layers, Users, Globe, Activity } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export function Stats() {
  const stats: StatItem[] = [
    {
      value: 4,
      suffix: "",
      label: "Active Products",
      description: "Proprietary software suites launched and scaling.",
      icon: <Layers className="h-5 w-5 text-mint-primary" />
    },
    {
      value: 10,
      suffix: "K+",
      label: "Global Users",
      description: "Developers and growth squads using our tech.",
      icon: <Users className="h-5 w-5 text-mint-primary" />
    },
    {
      value: 12,
      suffix: "",
      label: "Countries Reached",
      description: "Deployments serving enterprise clients worldwide.",
      icon: <Globe className="h-5 w-5 text-mint-primary" />
    },
    {
      value: 99,
      suffix: ".9%",
      label: "Uptime SLA",
      description: "Edge networks hosting mission-critical endpoints.",
      icon: <Activity className="h-5 w-5 text-mint-primary" />
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
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-brown-accent"
          >
            Studio Telemetry
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-4 tracking-tight"
          >
            Metrics That Drive Our Focus
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} index={idx} />
          ))}
        </div>

      </div>
    </motion.section>
  );
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = stat.value;
    if (start === end) return;

    const duration = 1500; // 1.5 seconds animation
    const stepTime = Math.max(Math.floor(duration / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative min-h-[12rem] w-full rounded-2xl border border-border p-1 bg-card/10 backdrop-blur-sm group"
    >
      {/* Glowing border effect */}
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />

      <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl p-6">
        
        {/* Top details */}
        <div className="flex justify-between items-start gap-4">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            {stat.label}
          </span>
          <div className="p-2 rounded bg-background border border-border flex items-center justify-center">
            {stat.icon}
          </div>
        </div>

        {/* Counter & Label */}
        <div className="mt-8">
          <div className="text-4xl sm:text-5xl font-heading font-extrabold text-foreground tracking-tight flex items-baseline">
            {count}
            <span className="text-mint-primary font-heading font-extrabold">{stat.suffix}</span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-sans">
            {stat.description}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default Stats;
