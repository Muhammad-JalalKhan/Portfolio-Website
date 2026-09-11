// ─────────────────────────────────────────────
// Portfolio Data — Muhammad Jalal
// Source of truth for every section on the site
// ─────────────────────────────────────────────

export interface Project {
  id: number;
  title: string;
  category: string;
  filterTag: string;
  tags: string[];
  summary: string;
  highlight?: string;
  link?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Service {
  id: number;
  title: string;
  shortTitle: string;
  bullets: string[];
}

export interface Achievement {
  id: number;
  label: string;
}

// ── Personal ──────────────────────────────────
export const personal = {
  name: "Muhammad Jalal",
  firstName: "MUHAMMAD",
  lastName: "JALAL",
  role: "AI Engineer & System Architect",
  tagline:
    "Designing autonomous agents, edge vision pipelines, and scalable distributed systems.",
  bio: "Bridging technical engineering with community impact and startup execution.",
  email: "itxjalalkhanofficial@gmail.com",
  phone: "+92-346-8196151",
  github: "https://github.com/Muhammad-JalalKhan",
  linkedin: "https://www.linkedin.com/in/muhammad-jalal-khan-5132b429b",
  location: "Islamabad / Quetta, Pakistan",
  badge: "Available for New Projects & Roles",
} as const;

// ── Projects ──────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: "Autonomous EHS Compliance Engine",
    category: "Computer Vision & Edge AI",
    filterTag: "Computer Vision",
    tags: ["YOLOv8", "Qwen-VL", "Docker", "Streamlit", "OpenCV"],
    summary:
      "Containerized hybrid edge-to-cloud vision pipeline filtering 99% of nominal frames locally, paired with Vision-Language Models for real-time factory hazard auditing.",
    highlight: "Reduced cloud API operational expenses by 99%.",
    link: "https://github.com/Muhammad-JalalKhan/Factory-Compliance-Alert-Escalation-System",
  },
  {
    id: 2,
    title: "ThermaX OS (FortyGuard Global Hackathon '26)",
    category: "Agentic AI & Climate Tech",
    filterTag: "AI & Agents",
    tags: ["LangGraph", "FortyGuard API", "Multi-Agent", "FastAPI"],
    summary:
      "Autonomous climate resilience platform integrating real-time heat telemetry with multi-agent orchestration to deploy real-time urban cooling interventions.",
    highlight: "Global Hackathon submission with Team ZeroKelvin.",
  },
  {
    id: 3,
    title: "Dawae-Check (Alibaba Cloud AI Hackathon '26)",
    category: "Multimodal AI & Vision",
    filterTag: "Computer Vision",
    tags: ["Qwen2.5-VL", "Alibaba Cloud", "OCR", "Packaging AI"],
    summary:
      "Anti-counterfeit pharmaceutical inspection engine using fine-tuned vision-language models for seal verification and packaging defect classification.",
    highlight:
      "National Finalist (Bano Qabil / Alibaba Cloud AI Hackathon).",
  },
  {
    id: 4,
    title: "Self-Correcting Autonomous Coding Agent",
    category: "Agentic AI",
    filterTag: "AI & Agents",
    tags: ["LangGraph", "Python", "AST", "Ollama"],
    summary:
      "Multi-node agentic workflow that writes, tests in isolated sandboxes, captures tracebacks, and self-heals code logic without human intervention.",
    link: "https://github.com/Muhammad-JalalKhan/self-correcting-coding-agent",
  },
  {
    id: 5,
    title: "Sentinel AI: LLM Security Firewall",
    category: "AI Security & Infrastructure",
    filterTag: "AI & Agents",
    tags: ["XGBoost", "MiniLM", "Inference Security"],
    summary:
      "Sub-50ms decoupled security firewall intercepting prompt injection attacks, jailbreaks, and adversarial queries before reaching upstream models.",
    link: "https://github.com/Muhammad-JalalKhan/Sentinel-AI_Firewall_for_LLMs",
  },
  {
    id: 6,
    title: "HydroScan IoT & Aqualytica Platform",
    category: "IoT & Systems",
    filterTag: "Distributed & IoT",
    tags: ["Arduino", "Telemetry", "JSON Pipelines", "C++"],
    summary:
      "Hardware prototype capturing real-time fluid telemetry (pH, turbidity, TDS), calibrated to stream structured data payloads into analytical dashboards.",
    highlight:
      "Incubated at National Incubation Center (NIC) Quetta, Cohort 14.",
  },
  {
    id: 7,
    title: "Buniyad Frontend Interface",
    category: "Web & Rapid Prototyping",
    filterTag: "Distributed & IoT",
    tags: ["Claude Code", "React", "TailwindCSS", "API Design"],
    summary:
      "Complete responsive web application designed using Claude Code pair-programming workflows, connected to a custom backend microservices layer.",
  },
  {
    id: 8,
    title: "Distributed Cluster Engine (Dask + Tailscale)",
    category: "Distributed Systems",
    filterTag: "Distributed & IoT",
    tags: ["Docker", "Dask", "Tailscale Mesh", "Distributed ML"],
    summary:
      "High-performance private compute grid routing workloads across networked workstations for parallel ML parameter search and preprocessing.",
    link: "https://github.com/Muhammad-JalalKhan/Distributed-Computing-Cluster-",
  },
];

// ── Experience ────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 1,
    role: "AI Engineering Intern",
    company: "TechGenesys",
    period: "Jun. 2026 – Present",
    description:
      "Built satellite/aerial landfill detection pipelines and ground deformation monitoring tools using geospatial imagery. Engineered the industrial EHS compliance vision system and e-commerce COD RTO risk-mitigation automations.",
    technologies: ["YOLOv8", "Geospatial AI", "Docker", "Streamlit"],
  },
  {
    id: 2,
    role: "Co-Founder & Tech Lead",
    company: "Hassle-Free Enterprise",
    period: "Nov. 2025 – Present",
    description:
      "Architected automated digital billing pipelines, operational queues, and predictive inventory forecasting serving hundreds of university students weekly.",
    technologies: ["React", "Node.js", "Automation", "Forecasting"],
  },
  {
    id: 3,
    role: "Founder & Tech Lead",
    company: "Aqualytica (NIC Quetta Incubated)",
    period: "Jun. 2025 – Nov. 2025",
    description:
      "Led product engineering and stakeholder discovery for an IoT potable-water monitoring startup incubated at National Incubation Center Quetta.",
    technologies: ["Arduino", "IoT", "C++", "Product Design"],
  },
  {
    id: 4,
    role: "Volunteer IT Fellow",
    company: "Sunbeams Pk100 Network",
    period: "Summer 2026",
    description:
      "Audited, validated, and published digital portfolio assets across 210 community schools during the \"Pakistan 100 for 100\" Summer Challenge. Supported grassroots educational enrollment drives.",
    technologies: ["Digital Auditing", "Community Tech"],
  },
  {
    id: 5,
    role: "Sales & Marketing Executive",
    company: "Win Win Marketing",
    period: "2025 – Present",
    description:
      "Executed client consultations, presentation pitches, and digital marketing strategies for high-value development projects including Faisal Town Group.",
    technologies: ["Sales Strategy", "Digital Marketing"],
  },
];

// ── Services ──────────────────────────────────
export const services: Service[] = [
  {
    id: 1,
    title: "Agentic AI & Multi-Agent Systems",
    shortTitle: "AGENTIC AI & MULTI-AGENT SYSTEMS",
    bullets: [
      "Autonomous pipelines & tool-calling chains",
      "Self-healing code loops with LangGraph",
      "Complex context orchestration",
      "Multi-agent communication protocols",
    ],
  },
  {
    id: 2,
    title: "Computer Vision & Edge Pipelines",
    shortTitle: "COMPUTER VISION & EDGE PIPELINES",
    bullets: [
      "Lightweight edge detection (YOLOv8)",
      "Frame-filtering optimization",
      "Multimodal zero-shot verification",
      "Vision-Language Model integration",
    ],
  },
  {
    id: 3,
    title: "Model Fine-Tuning & LLM Security",
    shortTitle: "MODEL FINE-TUNING & LLM SECURITY",
    bullets: [
      "Parameter-efficient fine-tuning (LoRA/QLoRA)",
      "Local model deployment via Ollama",
      "Adversarial prompt firewall protection",
      "Inference security & safety layers",
    ],
  },
  {
    id: 4,
    title: "Distributed Infrastructure & IoT",
    shortTitle: "DISTRIBUTED INFRASTRUCTURE & IOT",
    bullets: [
      "Microservices architecture & Docker",
      "Virtual mesh networking (Tailscale)",
      "Custom data extraction scripts",
      "Real-time telemetry pipelines",
    ],
  },
];

// ── Achievements ──────────────────────────────
export const achievements: Achievement[] = [
  { id: 1, label: "Alibaba Cloud AI Hackathon '26 — National Finalist" },
  {
    id: 2,
    label:
      "FortyGuard Global Heat Intelligence Hackathon '26 (Team ZeroKelvin)",
  },
  { id: 3, label: "NIC Quetta Cohort 14 — Incubated Founder" },
  { id: 4, label: "FBISE Gold Medalist — Intermediate Academic Excellence" },
  {
    id: 5,
    label: "Generative AI Application Development — NCEAC-HEC Program",
  },
  { id: 6, label: "Professional Certificate in AI Agents — DeepLearning.AI" },
];

// ── Filter categories ─────────────────────────
export const filterCategories = [
  "All",
  "AI & Agents",
  "Computer Vision",
  "Distributed & IoT",
] as const;

export type FilterCategory = (typeof filterCategories)[number];
