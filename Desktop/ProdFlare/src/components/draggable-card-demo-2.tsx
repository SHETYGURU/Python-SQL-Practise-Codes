import React from "react";
import { motion } from "framer-motion";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function DraggableCardDemo() {
  const items = [
    {
      title: "Nova AI Core",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      className: "absolute top-10 left-[15%] rotate-[-5deg]",
    },
    {
      title: "Pulse Engine",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop",
      className: "absolute top-40 left-[22%] rotate-[-7deg]",
    },
    {
      title: "Edge Node Alpha",
      image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
      className: "absolute top-5 left-[38%] rotate-[8deg]",
    },
    {
      title: "Forge Compute",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      className: "absolute top-32 left-[52%] rotate-[10deg]",
    },
    {
      title: "Orbit Controller",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
      className: "absolute top-20 right-[30%] rotate-[2deg]",
    },
    {
      title: "Telemetry Data",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      className: "absolute top-24 left-[44%] rotate-[-7deg]",
    },
    {
      title: "Client Endpoint",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
      className: "absolute top-8 left-[28%] rotate-[4deg]",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip bg-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none max-w-lg w-full px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-muted-foreground/30 uppercase tracking-wider leading-none">
            Interactive Telemetry
          </h2>
          <p className="mt-3 text-xs md:text-sm font-mono text-brown-accent tracking-widest uppercase">
            drag and organize the modules
          </p>
        </div>

        {items.map((item) => (
          <DraggableCardBody key={item.title} className={item.className}>
            <img
              src={item.image}
              alt={item.title}
              onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-md opacity-0 transition-opacity duration-700 ease-out"
            />
            <h3 className="mt-4 text-center text-lg font-heading font-extrabold text-foreground">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </motion.div>
  );
}

