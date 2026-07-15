export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  color: string;
  image: string;
  dashboardImage: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  features: ProductFeature[];
}

export const products: Product[] = [
  {
    slug: "nova-ai",
    name: "Nova AI",
    tagline: "AI productivity workspace.",
    description: "An AI-powered productivity workspace that turns chaos into structured, collaborative intelligence.",
    longDescription: "Nova AI integrates deeply into your team's workflow, analyzing documents, conversations, and schedules to synthesize tasks, generate summaries, and proactively resolve blockers. It serves as the primary cognitive hub for high-velocity startup teams.",
    color: "#7AE7B6",
    image: "/mockups/nova-ai.png",
    dashboardImage: "/mockups/dashboard.png",
    tags: ["AI", "Productivity", "Collaboration"],
    metrics: [
      { label: "AI Accuracy", value: "99.2%" },
      { label: "Time Saved", value: "14 hrs/wk" },
      { label: "Active Teams", value: "3,200+" }
    ],
    features: [
      { title: "Cognitive Synthesizer", description: "Automatically digests scattered notes and conversation transcripts into actionable checklists." },
      { title: "Predictive Blockers", description: "Flags calendar conflicts and project bottlenecks before they delay a launch." },
      { title: "Universal Search", description: "Search across Slack, Notion, GitHub, and Figma with semantic natural language queries." }
    ]
  },
  {
    slug: "pulse",
    name: "Pulse",
    tagline: "Business analytics platform.",
    description: "Real-time telemetry, predictive growth insights, and unified executive dashboards for modern platforms.",
    longDescription: "Pulse aggregates event streams, customer databases, and financial vectors to provide an active monitor of business health. It uses predictive modeling to forecast churn and highlights unexpected conversion surges.",
    color: "#D4B89E",
    image: "/mockups/pulse.png",
    dashboardImage: "/mockups/dashboard.png",
    tags: ["Analytics", "Business Intelligence", "Real-Time"],
    metrics: [
      { label: "Latency", value: "< 12ms" },
      { label: "Data Indexed", value: "2.4B events/day" },
      { label: "Alert Latency", value: "Real-time" }
    ],
    features: [
      { title: "Predictive Funnels", description: "AI-driven simulation of checkout pathways to optimize micro-conversions." },
      { title: "Anomaly Detonators", description: "Instant notification when transaction rates or database response times spike abnormally." },
      { title: "Shareable Insights", description: "Generate beautiful, responsive, glassmorphic analytics pages for board reviews in one click." }
    ]
  },
  {
    slug: "orbit",
    name: "Orbit",
    tagline: "Workflow automation suite.",
    description: "A secure, node-based automation engine that connects apps, validates inputs, and triggers workflows.",
    longDescription: "Orbit replaces complex script files with visual pipelines. Users drag and drop API endpoints, conditional filters, and script runners into unified pipelines that maintain high compliance and low operational load.",
    color: "#8FD8B6",
    image: "/mockups/orbit.png",
    dashboardImage: "/mockups/dashboard.png",
    tags: ["Automation", "Workflow", "Integrations"],
    metrics: [
      { label: "Integrations", value: "480+" },
      { label: "Executions", value: "12M/day" },
      { label: "SLA Guarantee", value: "99.99%" }
    ],
    features: [
      { title: "Visual Node Builder", description: "Drag and drop interface for crafting multi-step automations without writing boilerplate code." },
      { title: "Self-Healing Runs", description: "Automated retry protocols and fallback routings for temporary vendor downtime." },
      { title: "Audit Telemetry", description: "Immutable logs tracking data flow coordinates for enterprise security compliance." }
    ]
  },
  {
    slug: "forge",
    name: "Forge",
    tagline: "Developer infrastructure platform.",
    description: "The developer platform to compile, secure, and deploy microservices with global multi-region edge caches.",
    longDescription: "Forge provides next-generation developer primitives, offering serverless compute pipelines, distributed key-value caches, and smart load-balancing with minimal code adjustment. Build on top of standard protocols and deploy universally.",
    color: "#C7A27C",
    image: "/mockups/forge.png",
    dashboardImage: "/mockups/dashboard.png",
    tags: ["DevOps", "Serverless", "Security"],
    metrics: [
      { label: "Edge Response", value: "1.4ms" },
      { label: "Global Locations", value: "182 Edge Nodes" },
      { label: "Build Velocity", value: "Sub-second" }
    ],
    features: [
      { title: "Zero-Cold-Start Edge", description: "Deploy serverless JS/Wasm workloads that execute within 15 milliseconds of the user." },
      { title: "Automatic Encryption", description: "All database tunnels and public ingress routes secure themselves out of the box." },
      { title: "Smart Traffic Manager", description: "Distributes client workloads globally based on real-time internet latency fluctuations." }
    ]
  }
];
