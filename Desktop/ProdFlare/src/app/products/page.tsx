"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { products } from "@/lib/data/products";
import { Sparkles } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-mint-primary/5 rounded-b-[100px] blur-[150px] pointer-events-none" />

      <Navbar />

      {/* Header */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mint-primary/10 bg-mint-primary/5 text-mint-primary text-xs uppercase tracking-widest font-mono mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Studio Ecosystem
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Our Product Suite
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground mt-4 leading-relaxed"
          >
            Explore our portfolio of cutting-edge software solutions. 
            We build, fund, and scale applications that improve business outcomes across AI, data analytics, automation, and core infrastructure.
          </motion.p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-card/40 backdrop-blur-md relative group/card border-border/80 w-full h-auto rounded-2xl p-6 md:p-8 border hover:shadow-2xl hover:shadow-mint-primary/[0.03] transition-all">
                  
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded border border-border bg-background/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-heading font-extrabold text-foreground"
                  >
                    {product.name}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-muted-foreground text-sm max-w-sm mt-3 font-sans leading-relaxed"
                  >
                    {product.description}
                  </CardItem>

                  {/* Graphic Block */}
                  <CardItem translateZ="100" className="w-full mt-6">
                    <div className="h-44 w-full rounded-xl border border-border bg-gradient-to-br from-background/80 to-card flex flex-col justify-between p-5 relative overflow-hidden">
                      <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-mint-primary/5 group-hover/card:bg-mint-primary/10 blur-xl transition-all duration-300" />
                      
                      <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground border-b border-border/50 pb-2">
                        <span>SUITE STATUS: ACTIVE</span>
                        <span>REG: GLOBAL</span>
                      </div>

                      <div className="flex justify-between gap-6 py-2">
                        {product.metrics.slice(0, 2).map((m) => (
                          <div key={m.label}>
                            <span className="text-[10px] text-muted-foreground font-sans block">{m.label}</span>
                            <span className="text-xl font-heading font-extrabold text-foreground">{m.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-[9px] font-mono text-muted-foreground">
                        DEPL: AUTOMATED EDGE ROUTING
                      </div>
                    </div>
                  </CardItem>

                  {/* Actions Row */}
                  <div className="flex justify-between items-center mt-8">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={`/products/${product.slug}`}
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-card border border-transparent hover:border-border transition-all"
                    >
                      View Details →
                    </CardItem>
                    
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={`/products/${product.slug}`}
                      style={{ backgroundColor: product.color, color: "#000" }}
                      className="px-4 py-2 rounded-lg text-xs font-bold hover:scale-105 transition-transform duration-200"
                    >
                      Access Console
                    </CardItem>
                  </div>

                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* General contact banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 p-8 rounded-2xl border border-border bg-card/10 backdrop-blur-sm text-center max-w-4xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-heading font-extrabold text-foreground">Need Custom Integrations?</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Our engineers provide direct assistance to enterprise teams integrating our products into private cloud spaces.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-mint-primary px-6 text-sm font-semibold text-black hover:bg-mint-glow transition-all"
          >
            Get Custom Specs
          </Link>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}
