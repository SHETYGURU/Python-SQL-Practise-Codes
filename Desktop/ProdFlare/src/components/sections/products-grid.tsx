"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { products } from "@/lib/data/products";

export function ProductsGrid() {
  return (
    <motion.section 
      id="products" 
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
            Studio Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mt-4 tracking-tight"
          >
            The Product Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Discover the tools built, optimized, and managed under the ProdFlare banner. 
            Each product is engineered independently to address core functional hurdles.
          </motion.p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-card/40 backdrop-blur-md relative group/card border-border/80 w-full h-auto rounded-2xl p-6 md:p-8 border hover:shadow-2xl hover:shadow-mint-primary/[0.03] transition-all duration-300">
                  
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

                  {/* Slogan & Description */}
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-muted-foreground text-sm max-w-sm mt-3 font-sans leading-relaxed"
                  >
                    {product.description}
                  </CardItem>

                  {/* Realistic UI Visual / Graphic instead of blank image */}
                  <CardItem translateZ="100" className="w-full mt-6">
                    <div className="h-48 md:h-56 w-full rounded-xl border border-border bg-gradient-to-br from-background/80 to-card flex flex-col justify-between p-5 relative overflow-hidden group-hover/card:shadow-xl group-hover/card:border-mint-primary/20 transition-all duration-300">
                      
                      {/* Abstract glassmorphic element representing dashboard UI */}
                      <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-mint-primary/5 group-hover/card:bg-mint-primary/10 blur-xl transition-all duration-300" />
                      <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-brown-accent/5 blur-xl pointer-events-none" />

                      {/* Header simulation */}
                      <div className="flex justify-between items-center z-10 border-b border-border/50 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground bg-background/50 border border-border px-2 py-0.5 rounded">
                          api.prodflare.com/{product.slug}
                        </span>
                      </div>

                      {/* Telemetry line simulation */}
                      <div className="flex-1 flex items-end justify-between gap-1 mt-6 h-12 z-10">
                        {[40, 20, 50, 35, 60, 45, 75, 55, 90, 65, 80, 70, 95].map((height, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ scaleY: 0.15 }}
                            whileInView={{ 
                              scaleY: [1, 0.65 + ((i % 3) * 0.15), 1],
                            }}
                            viewport={{ once: true }}
                            transition={{
                              scaleY: {
                                repeat: Infinity,
                                duration: 1.5 + ((i % 3) * 0.4),
                                ease: "easeInOut",
                                delay: (i % 4) * 0.15
                              }
                            }}
                            style={{ height: `${height}%`, transformOrigin: "bottom" }}
                            className="flex-1 bg-gradient-to-t from-mint-primary/30 to-mint-primary rounded-t-sm group-hover/card:from-mint-glow/50 group-hover/card:to-mint-glow transition-all duration-300" 
                          />
                        ))}
                      </div>

                      {/* Info bar simulation */}
                      <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-muted-foreground z-10">
                        <span>CPU: 12%</span>
                        <span>NET: EST. OK</span>
                        <span>LATENCY: 1.2ms</span>
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

      </div>
    </motion.section>
  );
}
export default ProductsGrid;
