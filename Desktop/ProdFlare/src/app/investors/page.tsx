"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Loader2, ShieldCheck, CheckCircle2, Shield, Lock } from "lucide-react";

// Form Schema
const investorFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  fundName: z.string().min(2, { message: "Fund/Entity name must be at least 2 characters" }),
  investmentSize: z.string().min(1, { message: "Please select an investment range" }),
  notes: z.string().optional()
});

type InvestorFormValues = z.infer<typeof investorFormSchema>;

export default function InvestorsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<InvestorFormValues>({
    resolver: zodResolver(investorFormSchema),
    defaultValues: {
      name: "",
      email: "",
      fundName: "",
      investmentSize: "",
      notes: ""
    }
  });

  const onSubmit = async (data: InvestorFormValues) => {
    setIsSubmitting(true);
    // Simulate database / validation delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Investor request received:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-mint-primary/5 rounded-b-[100px] blur-[150px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mint-primary/10 bg-mint-primary/5 text-mint-primary text-xs uppercase tracking-widest font-mono mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Institutional Portal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Venture Studio Investment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            Access our private data room to review portfolio telemetry, studio margins, capitalization tables, and allocation options.
          </motion.p>
        </div>

        {/* Studio Model Info & Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Studio Venture Architecture Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-extrabold text-foreground">The Studio Advantage</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-sans">
                Unlike traditional venture capital, ProdFlare takes an active operational role. 
                We design, engineer, and launch projects internally, significantly reducing seed-stage execution risks and capital burn rates.
              </p>
            </div>

            {/* Studio Model Pillars */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-border bg-card/20 backdrop-blur-sm">
                <span className="text-xs font-mono text-brown-accent uppercase tracking-wider block mb-1">Capital Efficiency</span>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Shared designer, support, design systems, and edge infrastructure developers reduce core MVP build costs by over 75%.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/20 backdrop-blur-sm">
                <span className="text-xs font-mono text-brown-accent uppercase tracking-wider block mb-1">Compressed Time to Market</span>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Our 30-day MVP framework moves projects from initial opportunity maps to live public beta versions faster than siloed teams.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/20 backdrop-blur-sm">
                <span className="text-xs font-mono text-brown-accent uppercase tracking-wider block mb-1">Diversified Venture Pool</span>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Allocating capital into the ProdFlare studio yields direct fractional holdings across our entire ecosystem (Nova AI, Pulse, Orbit, Forge).
                </p>
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-mint-primary/10 bg-mint-primary/5 text-mint-primary text-xs">
              <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p className="font-sans leading-relaxed">
                <strong>Data Room Security:</strong> All request logs are securely tracked. Access credentials are encrypted and require multi-factor validation before access to the deck is authorized.
              </p>
            </div>
          </div>

          {/* Secure Form Panel */}
          <div className="w-full">
            <CardSpotlight className="w-full rounded-2xl bg-card/30 border border-border p-6 md:p-8 relative overflow-hidden">
              <div className="relative z-20">
                
                <div className="flex items-center gap-2 mb-6 border-b border-border pb-4 text-foreground">
                  <Shield className="w-5 h-5 text-mint-primary" />
                  <span className="text-xs font-mono uppercase tracking-widest">Secure Credentials Check</span>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    // Success View
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-10 flex flex-col items-center justify-center"
                    >
                      <CheckCircle2 className="w-12 h-12 text-mint-primary mb-6 animate-pulse" />
                      <h3 className="text-xl font-heading font-extrabold text-foreground">Request Submitted</h3>
                      <p className="mt-4 text-xs text-muted-foreground leading-relaxed max-w-sm font-sans mx-auto">
                        Your credentials request has been forwarded to our investment relations advisor. 
                        A secure link to the ProdFlare private deck will be emailed to you after background credential verification.
                      </p>
                    </motion.div>
                  ) : (
                    // Form View
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Full Name</label>
                        <input
                          type="text"
                          {...register("name")}
                          placeholder="Elizabeth Warren"
                          className="w-full h-10 px-4 rounded bg-background/50 border border-border text-foreground text-xs md:text-sm focus:border-mint-primary focus:outline-none transition-colors"
                        />
                        {errors.name && <span className="text-xs text-red-400 mt-1">{errors.name.message}</span>}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Corporate Email</label>
                        <input
                          type="email"
                          {...register("email")}
                          placeholder="elizabeth@vanguard.com"
                          className="w-full h-10 px-4 rounded bg-background/50 border border-border text-foreground text-xs md:text-sm focus:border-mint-primary focus:outline-none transition-colors"
                        />
                        {errors.email && <span className="text-xs text-red-400 mt-1">{errors.email.message}</span>}
                      </div>

                      {/* Fund Name */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Fund / Institution</label>
                        <input
                          type="text"
                          {...register("fundName")}
                          placeholder="Vanguard Capital LLC"
                          className="w-full h-10 px-4 rounded bg-background/50 border border-border text-foreground text-xs md:text-sm focus:border-mint-primary focus:outline-none transition-colors"
                        />
                        {errors.fundName && <span className="text-xs text-red-400 mt-1">{errors.fundName.message}</span>}
                      </div>

                      {/* Investment Range */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Allocation Interest</label>
                        <select
                          {...register("investmentSize")}
                          className="w-full h-10 px-4 rounded bg-background border border-border text-foreground text-xs md:text-sm focus:border-mint-primary focus:outline-none transition-colors"
                        >
                          <option value="">Select allocation target range...</option>
                          <option value="100k-250k">$100k - $250k</option>
                          <option value="250k-1m">$250k - $1M</option>
                          <option value="1m-5m">$1M - $5M</option>
                          <option value="5m+">$5M+</option>
                        </select>
                        {errors.investmentSize && <span className="text-xs text-red-400 mt-1">{errors.investmentSize.message}</span>}
                      </div>

                      {/* Notes */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Notes / Focus areas <span className="opacity-40 font-sans">(Optional)</span></label>
                        <textarea
                          rows={3}
                          {...register("notes")}
                          placeholder="Specific questions, timelines, or partner preferences..."
                          className="w-full p-4 rounded bg-background/50 border border-border text-foreground text-xs md:text-sm focus:border-mint-primary focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-11 rounded bg-mint-primary hover:bg-mint-glow text-black font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            Verifying...
                          </>
                        ) : (
                          "Request Secure Access"
                        )}
                      </button>

                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </CardSpotlight>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
