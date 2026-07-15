"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CanvasText } from "@/components/ui/canvas-text";
import { Loader2, CheckCircle2 } from "lucide-react";

// Form Validation Schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setErrorMsg(result.message || "An unexpected error occurred.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with CanvasText highlight */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-brown-accent"
          >
            Get In Touch
          </motion.p>

          <h2 className="group relative mx-auto mt-4 text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-foreground tracking-tight max-w-3xl leading-tight">
            Let&apos;s Build Something{" "}
            <CanvasText
              text="Remarkable"
              backgroundClassName="bg-mint-primary/20 dark:bg-mint-primary/10 rounded"
              colors={[
                "rgba(168, 242, 209, 1)",
                "rgba(122, 231, 182, 0.9)",
                "rgba(168, 242, 209, 0.8)",
                "rgba(122, 231, 182, 0.7)",
                "rgba(168, 242, 209, 0.6)",
                "rgba(122, 231, 182, 0.5)",
                "rgba(168, 242, 209, 0.4)",
                "rgba(122, 231, 182, 0.3)",
                "rgba(168, 242, 209, 0.2)",
                "rgba(122, 231, 182, 0.1)",
              ]}
              lineGap={4}
              animationDuration={15}
            />
          </h2>
        </div>

        {/* Contact Form enclosed in CardSpotlight */}
        <div className="max-w-2xl mx-auto">
          <CardSpotlight className="w-full rounded-2xl bg-card/35 border border-border p-6 md:p-10 relative overflow-hidden">
            <div className="relative z-20">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  // Success State
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 flex flex-col items-center justify-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-mint-primary mb-6 animate-pulse" />
                    <h3 className="text-2xl font-heading font-extrabold text-foreground">Message Sent Successfully</h3>
                    <p className="mt-4 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out to ProdFlare. One of our studio partners will review your message and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 px-6 py-2.5 rounded bg-mint-primary hover:bg-mint-glow text-black font-semibold text-xs uppercase tracking-wider transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  // Form State
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {errorMsg && (
                      <div className="p-4 rounded border border-red-500/20 bg-red-500/10 text-red-400 text-sm">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                        <input
                          id="name"
                          type="text"
                          {...register("name")}
                          placeholder="Dr. John Doe"
                          className="w-full h-11 px-4 rounded bg-background/50 border border-border text-foreground text-sm focus:border-mint-primary focus:outline-none transition-colors"
                        />
                        {errors.name && (
                          <span className="text-xs text-red-400 mt-1">{errors.name.message}</span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                        <input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="john@company.com"
                          className="w-full h-11 px-4 rounded bg-background/50 border border-border text-foreground text-sm focus:border-mint-primary focus:outline-none transition-colors"
                        />
                        {errors.email && (
                          <span className="text-xs text-red-400 mt-1">{errors.email.message}</span>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Company <span className="opacity-40 font-sans">(Optional)</span></label>
                      <input
                        id="company"
                        type="text"
                        {...register("company")}
                        placeholder="Vanguard Corp"
                        className="w-full h-11 px-4 rounded bg-background/50 border border-border text-foreground text-sm focus:border-mint-primary focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register("message")}
                        placeholder="Describe your project, timeline, or query..."
                        className="w-full p-4 rounded bg-background/50 border border-border text-foreground text-sm focus:border-mint-primary focus:outline-none transition-colors resize-none"
                      />
                      {errors.message && (
                        <span className="text-xs text-red-400 mt-1">{errors.message.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded bg-mint-primary hover:bg-mint-glow text-black font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </CardSpotlight>
        </div>

      </div>
    </motion.section>
  );
}
export default ContactSection;
