"use client";

import React from "react";

interface SectionSkeletonProps {
  height?: string;
  className?: string;
}

export function SectionSkeleton({ height = "h-[450px]", className = "" }: SectionSkeletonProps) {
  return (
    <div 
      className={`w-full ${height} p-8 flex flex-col justify-center items-center relative overflow-hidden bg-card/20 border border-border/40 rounded-3xl backdrop-blur-[2px] ${className}`}
    >
      {/* Ambient background glow inside the skeleton */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mint-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Shimmer overlay scanning from left to right */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-mint-primary/5 dark:via-mint-primary/10 to-transparent pointer-events-none" />

      {/* Modern, clean loading indicator */}
      <div className="flex flex-col items-center gap-3 z-10 pointer-events-none">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-mint-primary/20" />
          <div className="absolute inset-0 rounded-full border-t border-r border-t-mint-primary border-r-mint-glow animate-spin" />
        </div>
        <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-[0.25em] animate-pulse">
          Loading Module
        </span>
      </div>
    </div>
  );
}

export default SectionSkeleton;
