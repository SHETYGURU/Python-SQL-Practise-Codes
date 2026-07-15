"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600); // Allow exit animation to finish
    }, 1800); // Loader duration of 1.8s

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground"
        >
          {/* Glowing Mint Ambient background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-mint-primary/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Premium Uiverse-style Orbit Spinner */}
          <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-mint-primary/20" />
            {/* Spinning Indicator */}
            <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-t-mint-primary border-r-mint-glow animate-spin" />
            {/* Inner Ring */}
            <div className="w-8 h-8 rounded-full border border-brown-accent/20 animate-pulse bg-mint-primary/5" />
          </div>

          {/* Logo & Subtitle Section */}
          <div className="text-center">
            {/* Logo */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.2em", filter: "blur(5px)" }}
              animate={{ opacity: 1, letterSpacing: "0.4em", filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-2xl md:text-3xl font-heading font-extrabold tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-foreground via-mint-primary to-foreground"
            >
              PRODFLARE
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xs md:text-sm font-sans text-brown-accent uppercase tracking-widest mt-3"
            >
              Building Tomorrow&apos;s Products
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
