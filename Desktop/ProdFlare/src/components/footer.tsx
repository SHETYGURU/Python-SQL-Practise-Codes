"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { motion } from "framer-motion";

// Custom SVG Icons for brands removed from Lucide-react
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full border-t border-border bg-background overflow-hidden"
    >
      {/* Background Beams with Collision at the top of the footer as an eye-catcher */}
      <div className="w-full h-80 relative overflow-hidden flex flex-col justify-center items-center">
        <BackgroundBeamsWithCollision className="h-full w-full absolute inset-0 bg-transparent">
          <div className="relative z-10 text-center px-4 max-w-2xl mx-auto pointer-events-none">
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight text-foreground">
              Ready to collaborate?
            </h3>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Let&apos;s turn ambitious ideas into products people actually use.
            </p>
            <div className="mt-6 pointer-events-auto">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-mint-primary px-6 text-sm font-medium text-black shadow-md hover:bg-mint-glow transition-all hover:scale-105 duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Main Directory Links & Brand */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block text-xl font-heading font-extrabold tracking-widest text-foreground">
              <EncryptedText text="PRODFLARE" revealDelayMs={30} className="hover:text-mint-primary transition-colors" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              One Studio. Infinite Possibilities. Building digital products that solve meaningful problems.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border bg-card hover:bg-mint-primary/10 hover:border-mint-primary hover:text-mint-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border bg-card hover:bg-mint-primary/10 hover:border-mint-primary hover:text-mint-primary transition-all duration-300"
                aria-label="X (formerly Twitter)"
              >
                <span className="font-heading font-bold text-xs block leading-4 w-4 text-center">X</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border bg-card hover:bg-mint-primary/10 hover:border-mint-primary hover:text-mint-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@prodflare.com"
                className="p-2 rounded-full border border-border bg-card hover:bg-mint-primary/10 hover:border-mint-primary hover:text-mint-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">Navigation</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-mint-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-mint-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#vision" className="text-sm text-muted-foreground hover:text-mint-primary transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-sm text-muted-foreground hover:text-mint-primary transition-colors">
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Legal */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">Studio</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-mint-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-mint-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-mint-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-mint-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ProdFlare. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with precision. <span className="text-brown-accent">Building tomorrow.</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
