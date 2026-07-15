"use client";

import React from "react";
import { motion } from "framer-motion";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function GlobalMarquee() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/world-map.webp",
  ];

  return (
    <section className="relative w-full py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-[0.3em] text-brown-accent"
          >
            Telemetry Row
          </motion.p>
        </div>

        {/* 3D Marquee Container */}
        <div className="mx-auto rounded-3xl bg-card/20 p-4 border border-border/80 backdrop-blur-sm overflow-hidden">
          <ThreeDMarquee images={images} />
        </div>

      </div>
    </section>
  );
}
export default GlobalMarquee;
