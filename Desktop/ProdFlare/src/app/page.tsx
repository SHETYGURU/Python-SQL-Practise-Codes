"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Loader } from "@/components/sections/loader";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Vision } from "@/components/sections/vision";
import { SectionSkeleton } from "@/components/ui/section-skeleton";
import { LampContainer } from "@/components/ui/lamp";

// Dynamically import heavy interactive sections below the fold with themed skeletons
const ProductEcosystem = dynamic(() => import("@/components/sections/product-ecosystem").then((mod) => mod.ProductEcosystem), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[500px]" /> 
});
const ProductsGrid = dynamic(() => import("@/components/sections/products-grid").then((mod) => mod.ProductsGrid), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[750px]" /> 
});
const FeaturedProduct = dynamic(() => import("@/components/sections/featured-product").then((mod) => mod.FeaturedProduct), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[550px]" /> 
});
const ProductShowcaseCarousel = dynamic(() => import("@/components/sections/product-showcase-carousel").then((mod) => mod.ProductShowcaseCarousel), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[550px]" /> 
});
const StartupProcess = dynamic(() => import("@/components/sections/startup-process").then((mod) => mod.StartupProcess), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[750px]" /> 
});
const Stats = dynamic(() => import("@/components/sections/stats").then((mod) => mod.Stats), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[300px]" /> 
});
const InvestorPreview = dynamic(() => import("@/components/sections/investor-preview").then((mod) => mod.InvestorPreview), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[400px]" /> 
});
const Testimonials = dynamic(() => import("@/components/sections/testimonials").then((mod) => mod.Testimonials), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[450px]" /> 
});
const StudioCulture = dynamic(() => import("@/components/sections/studio-culture").then((mod) => mod.StudioCulture), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[550px]" /> 
});
const BlogPreview = dynamic(() => import("@/components/sections/blog-preview").then((mod) => mod.BlogPreview), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[600px]" /> 
});
const DraggableCardDemo = dynamic(() => import("@/components/draggable-card-demo-2"), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[450px]" /> 
});
const ContactSection = dynamic(() => import("@/components/sections/contact-section").then((mod) => mod.ContactSection), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[650px]" /> 
});
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer), { 
  ssr: false, 
  loading: () => <SectionSkeleton height="h-[350px]" /> 
});

// ScrollFadeWrapper glides sections smoothly into view as the user scrolls or as chunks load
const ScrollFadeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling during loader screen
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {/* Background content loading in parallel */}
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className={`flex-1 flex flex-col relative w-full ${
          isLoading ? "pointer-events-none max-h-screen overflow-hidden" : ""
        }`}
      >
        {/* Ambient background accents at staggered vertical heights to blend sections seamlessly */}
        <div className="absolute top-0 left-0 right-0 h-[80vh] bg-mint-primary/5 rounded-b-[100px] blur-[150px] pointer-events-none" />
        <div className="absolute top-[120vh] left-1/4 w-[300px] h-[300px] bg-mint-primary/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-[220vh] right-1/4 w-[350px] h-[350px] bg-[#E7977A]/3 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[320vh] left-1/3 w-[300px] h-[300px] bg-mint-primary/4 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-[420vh] right-1/3 w-[250px] h-[250px] bg-[#C7A27C]/3 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[520vh] left-1/4 w-[400px] h-[400px] bg-mint-primary/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-[620vh] right-1/4 w-[300px] h-[300px] bg-[#E7977A]/4 rounded-full blur-[130px] pointer-events-none" />
        
        {/* Header Floating Dock Navigation */}
        <Navbar />

        {/* Page Sections */}
        <Hero />
        
        <ScrollFadeWrapper>
          <Vision />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <LampContainer className="min-h-[500px] h-auto py-8 md:py-16 rounded-none border-none shadow-none">
            <ProductEcosystem />
          </LampContainer>
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <ProductsGrid />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <FeaturedProduct />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <ProductShowcaseCarousel />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <StartupProcess />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <Stats />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <InvestorPreview />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <Testimonials />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <StudioCulture />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <BlogPreview />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <DraggableCardDemo />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper>
          <ContactSection />
        </ScrollFadeWrapper>

        {/* Footer */}
        <Footer />
      </motion.div>

      {/* Loader overlay on top */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

