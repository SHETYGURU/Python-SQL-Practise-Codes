"use client";

import React from "react";
import { motion } from "framer-motion";
import Carousel from "@/components/ui/carousel";

export function ProductShowcaseCarousel() {
  const slides = [
    {
      title: "Executive Dashboard",
      button: "Try Nova AI Console",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Real-Time Telemetry Analytics",
      button: "Launch Pulse Insights",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Cognitive AI Assistant Panel",
      button: "Deploy Assistant",
      src: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Drag-Drop Node Automation",
      button: "Open Orbit Builder",
      src: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Developer Compute Console",
      button: "Forge New Deploy",
      src: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=1200&auto=format&fit=crop",
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-brown-accent"
          >
            Studio Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-4 tracking-tight"
          >
            Production-Ready Interfaces
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Review the interface environments built for each of our products. 
            Drag the carousel to navigate the dashboard viewports.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden w-full h-[550px] md:h-[650px]">
          <Carousel slides={slides} />
        </div>

      </div>
    </motion.section>
  );
}
export default ProductShowcaseCarousel;
