"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Briefcase, 
  Eye, 
  TrendingUp, 
  BookOpen, 
  Mail, 
  Sun, 
  Moon 
} from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
    // Make the navbar appear after the main hero has started loading (1.2s)
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  const navItems = [
    {
      title: "Home",
      icon: <Home className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Products",
      icon: <Briefcase className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />,
      href: "/products",
    },
    {
      title: "Vision",
      icon: <Eye className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />,
      href: "/#vision",
    },
    {
      title: "Investors",
      icon: <TrendingUp className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />,
      href: "/investors",
    },
    {
      title: "Blog",
      icon: <BookOpen className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />,
      href: "/blog",
    },
    {
      title: "Contact",
      icon: <Mail className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />,
      href: "/contact",
    },
    {
      title: isDark ? "Light Mode" : "Dark Mode",
      icon: isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-neutral-700" />
      ),
      href: "#",
      onClick: () => setTheme(isDark ? "light" : "dark"),
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 z-40"
        >
          {/* Subtle backdrop-blur element behind floating dock */}
          <div className="absolute inset-0 rounded-2xl bg-background/30 backdrop-blur-lg border border-border shadow-xl pointer-events-none -m-1" />
          <FloatingDock
            desktopClassName="bg-transparent border-0 px-2 pb-0 flex items-center gap-4 dark:bg-transparent"
            mobileClassName="bg-card/90 border border-border flex items-center justify-center p-2 rounded-full shadow-lg"
            items={navItems}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Navbar;
