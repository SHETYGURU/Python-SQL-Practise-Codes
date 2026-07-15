"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Product } from "@/lib/data/products";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ArrowLeft, Check, Terminal } from "lucide-react";

export function ProductDetailsClient({ product }: { product: Product }) {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-mint-primary/5 rounded-b-[100px] blur-[150px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 w-full">
        
        {/* Return Button */}
        <div className="mb-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-mint-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return to directory
          </Link>
        </div>

        {/* Product Details Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Features */}
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-mint-primary/10 text-mint-primary border border-mint-primary/20">
                Studio Built
              </span>
              {product.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-card border border-border text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-none">
              {product.name}
            </h1>
            <p className="text-lg text-brown-accent font-sans mt-3">
              {product.tagline}
            </p>
            <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed font-sans">
              {product.longDescription}
            </p>

            {/* Product Specific Features */}
            <div className="mt-12">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-brown-accent mb-6">Core Capability Specs</h3>
              <div className="space-y-6">
                {product.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded bg-card border border-border text-mint-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed font-sans">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Metrics & Telemetry mockup */}
          <div className="space-y-8">
            
            {/* Metrics cards with Glowing Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {product.metrics.map((metric, mIdx) => (
                <div 
                  key={mIdx} 
                  className="relative rounded-xl border border-border p-1 bg-card/10 backdrop-blur-sm group"
                >
                  <GlowingEffect
                    spread={35}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                  />
                  <div className="relative flex flex-col justify-between p-4 z-10">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{metric.label}</span>
                    <span className="text-xl font-heading font-extrabold text-white mt-2">{metric.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Telemetry Mockup Card */}
            <div className="border border-border/80 bg-card/25 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between font-mono text-xs">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mint-primary/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-6">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-mint-primary" />
                  <span className="text-[10px] text-white">SYSTEM TELEMETRY CORE</span>
                </div>
                <span className="text-[9px] text-muted-foreground">depl_status: active</span>
              </div>

              {/* Pseudo code logs */}
              <div className="space-y-2 text-muted-foreground text-[10px] md:text-xs">
                <p><span className="text-brown-accent">SYSTEM:</span> booting edge framework for slug: <span className="text-white">&quot;{product.slug}&quot;</span></p>
                <p><span className="text-brown-accent">SYSTEM:</span> caching route endpoints on global multi-region edge caches</p>
                <p><span className="text-mint-primary">OK:</span> connection latency: <span className="text-white">1.2ms</span></p>
                <p><span className="text-mint-primary">OK:</span> SSL tunnels configured successfully via Forge SSL provider</p>
                <div className="text-white bg-[#08110D] p-3 rounded border border-border/40 font-mono mt-4 text-[9px] md:text-xs leading-5">
                  $ curl -I https://api.prodflare.com/{product.slug}/v1/status
                  <br />
                  HTTP/2 200 OK
                  <br />
                  content-type: application/json
                  <br />
                  x-cache: HIT (edge-node-182)
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
