"use client";

import React from "react";
import { motion } from "framer-motion";
import WorldMap from "@/components/ui/world-map";

export function ProductEcosystem() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full bg-transparent overflow-hidden py-0 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-brown-accent animate-pulse"
          >
            Global Network
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-4 tracking-tight"
          >
            Designed For A Global Future
          </motion.h2>
        </div>

        {/* World Map Container */}
        <div className="relative w-full rounded-b-2xl border-x border-b border-t-0 border-border bg-card/20 backdrop-blur-sm overflow-hidden py-12 md:py-16">
          <WorldMap
            dots={[
              {
                start: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
                end: { lat: 51.5074, lng: -0.1278, label: "London" }
              },
              {
                start: { lat: 51.5074, lng: -0.1278, label: "London" },
                end: { lat: 12.9716, lng: 77.5946, label: "Bangalore" }
              },
              {
                start: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
                end: { lat: 1.3521, lng: 103.8198, label: "Singapore" }
              },
              {
                start: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
                end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" }
              },
              {
                start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
                end: { lat: 37.7749, lng: -122.4194, label: "San Francisco" }
              }
            ]}
          />

          {/* City Badge Overlays */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono">
            {["San Francisco", "London", "Bangalore", "Singapore", "Tokyo"].map((city, index) => (
              <div 
                key={city} 
                className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-border bg-background/80 text-muted-foreground shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-mint-primary animate-pulse" />
                {city}
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}
export default ProductEcosystem;
