"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/sections/contact-section";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-mint-primary/5 rounded-b-[100px] blur-[150px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 w-full pt-10">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
