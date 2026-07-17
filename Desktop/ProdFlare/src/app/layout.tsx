import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProdFlare — One Studio. Infinite Possibilities.",
  description: "ProdFlare is a startup studio creating innovative software products across AI, productivity, analytics, and developer tools.",
  openGraph: {
    title: "ProdFlare — One Studio. Infinite Possibilities.",
    description: "ProdFlare is a startup studio creating innovative software products across AI, productivity, analytics, and developer tools.",
    type: "website",
    locale: "en_US",
    url: "https://prodflare.com",
    siteName: "ProdFlare",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProdFlare — One Studio. Infinite Possibilities.",
    description: "ProdFlare is a startup studio creating innovative software products across AI, productivity, analytics, and developer tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans relative">
        {/* Floating Brand Header in Top Left */}
        <div className="fixed top-6 left-6 md:top-8 md:left-8 z-50 pointer-events-none">
          <a href="/" className="pointer-events-auto flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="ProdFlare Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-border bg-card/30 backdrop-blur-sm p-1 shadow-md hover:scale-105 transition-transform duration-200 flex-shrink-0" 
            />
            <div className="flex flex-col justify-center">
              <span className="font-heading font-extrabold text-foreground text-sm md:text-base tracking-widest leading-none">
                PRODFLARE
              </span>
              <span className="font-mono text-[9px] md:text-[10px] text-brown-accent tracking-widest mt-1.5 uppercase leading-none">
                Startup Studio
              </span>
            </div>
          </a>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
