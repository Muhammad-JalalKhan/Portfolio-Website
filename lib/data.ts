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
  email: "jalal.bsai24.nbc@student.nust.edu.pk",
  phone: "+92-346-8196151",
  github: "https://github.com/Muhammad-JalalKhan",
  linkedin: "https://www.linkedin.com/in/muhammad-jalal-khan-5132b429b",
  location: "Quetta, Pakistan",
  badge: "Available for New Projects & Roles",
} as const;

// ── Projects ──────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: "Autonomous EHS Compliance Engine",
    category: "Computer Vision & Geospatial",
    filterTag: "Computer Vision & Geospatial",
    tags: ["YOLOv8", "Qwen-VL", "Docker", "Streamlit", "OpenCV"],
    summary:
      "Containerized edge-to-cloud computer vision pipeline tracking industrial worker spatial compliance and hazard risks in real time.",
    highlight: "Local edge filtering eliminated 99% of nominal frames, drastically cutting API costs.",
    link: "https://github.com/Muhammad-JalalKhan/Factory-Compliance-Alert-Escalation-System",
  },
  {
    id: 2,
    title: "ThermaX OS (FortyGuard Global Hackathon '26)",
    category: "AI & Agents",
    filterTag: "AI & Agents",
    tags: ["LangGraph", "FortyGuard API", "Multi-Agent", "FastAPI"],
    summary:
      "Autonomous climate resilience engine combining urban thermal telemetry with LangGraph multi-agent orchestration for real-time cooling intervention modeling.",
    highlight: "Built with Team ZeroKelvin for the FortyGuard Global Heat Intelligence Hackathon.",
    link: "https://github.com/Muhammad-JalalKhan",
  },
  {
    id: 3,
    title: "Dawae-Check (Alibaba Cloud AI Hackathon '26)",
    category: "Computer Vision & Geospatial",
    filterTag: "Computer Vision & Geospatial",
    tags: ["Qwen2.5-VL", "Alibaba Cloud", "OCR", "Packaging AI"],
    summary:
      "Vision-language model pipeline inspecting pharmaceutical packaging and seal integrity to identify counterfeit medications.",
    highlight: "National Finalist at Alibaba Cloud AI Hackathon Pakistan (Bano Qabil).",
    link: "https://github.com/Muhammad-JalalKhan",
  },
  {
    id: 4,
    title: "Self-Correcting Autonomous Coding Agent",
    category: "AI & Agents",
    filterTag: "AI & Agents",
    tags: ["LangGraph", "Python", "AST Parsing", "Ollama"],
    summary:
      "Autonomous coding agent with closed-loop debugging execution that sandboxes code, catches runtime tracebacks, and self-corrects scripts until passing.",
    highlight: "Multi-node cyclical state machine built on LangGraph.",
    link: "https://github.com/Muhammad-JalalKhan/self-correcting-coding-agent",
  },
  {
    id: 5,
    title: "Sentinel AI: Decoupled Security Firewall for LLMs",
    category: "AI & Agents",
    filterTag: "AI & Agents",
    tags: ["XGBoost", "MiniLM", "Inference Security", "Python"],
    summary:
      "Low-latency security firewall intercepting adversarial prompt injections and jailbreak payloads before reaching production model endpoints.",
    highlight: "Evaluates and filters adversarial inputs in <50ms.",
    link: "https://github.com/Muhammad-JalalKhan/Sentinel-AI_Firewall_for_LLMs",
  },
  {
    id: 6,
    title: "Local LLM Fine-Tuning & Quantization Suite (Qwen)",
    category: "AI & Agents",
    filterTag: "AI & Agents",
    tags: ["Qwen2.5", "Unsloth", "LoRA/QLoRA", "Ollama"],
    summary:
      "Fine-tuning framework running parameter-efficient LoRA/QLoRA adaptations on open-source Qwen models for domain-specific tool use and instruction adherence.",
    highlight: "Quantized weights deployed locally via Ollama with zero external API dependencies.",
    link: "https://github.com/Muhammad-JalalKhan",
  },
  {
    id: 7,
    title: "Local RAG Pipeline for Secure Contextual Q&A",
    category: "AI & Agents",
    filterTag: "AI & Agents",
    tags: ["LangChain", "ChromaDB", "Ollama", "Python"],
    summary:
      "Fully offline retrieval-augmented generation engine indexing enterprise documents with embedded vectors to provide citation-backed contextual answers.",
    highlight: "Zero data leakage with 100% on-premise execution.",
    link: "https://github.com/Muhammad-JalalKhan",
  },
  {
    id: 8,
    title: "Geospatial Landfill & Ground Deformation Engine",
    category: "Computer Vision & Geospatial",
    filterTag: "Computer Vision & Geospatial",
    tags: ["Multispectral", "Spatial Segmentation", "PyTorch", "GIS"],
    summary:
      "Remote sensing computer vision system analyzing satellite and aerial imagery for landfill boundary tracking and ground subsidence risk detection.",
    highlight: "Developed during AI Engineering Internship at TechGenesys.",
    link: "https://github.com/Muhammad-JalalKhan",
  },
  {
    id: 9,
    title: "COD-RTO Reduction Rate Automation Pipeline",
    category: "Applied ML & IoT",
    filterTag: "Applied ML & IoT",
    tags: ["XGBoost", "Risk Scoring", "E-Commerce", "Python"],
    summary:
      "Algorithmic fraud and logistics risk-scoring workflow predicting return-to-origin (RTO) probability on cash-on-delivery orders before dispatch.",
    highlight: "Mitigates high-volume delivery failure losses for commercial vendors.",
    link: "https://github.com/Muhammad-JalalKhan",
  },
  {
    id: 10,
    title: "Distributed Computing Cluster (Dask + Tailscale)",
    category: "Systems & Infrastructure",
    filterTag: "Systems & Infrastructure",
    tags: ["Dask", "Docker", "Tailscale Mesh", "Distributed ML"],
    summary:
      "Master-worker distributed compute grid linking heterogeneous lab workstations across a private mesh network to run parallel hyperparameter search.",
    highlight: "Eliminates external GPU cloud rental overhead.",
    link: "https://github.com/Muhammad-JalalKhan/Distributed-Computing-Cluster-",
  },
  {
    id: 11,
    title: "HydroScan IoT & Aqualytica Platform",
    category: "Applied ML & IoT",
    filterTag: "Applied ML & IoT",
    tags: ["Arduino", "Analog Telemetry", "C++", "JSON Pipeline"],
    summary:
      "IoT-based water quality monitoring hardware array measuring pH, turbidity, and TDS levels with custom calibration curves streaming into a Python backend.",
    highlight: "Incubated at National Incubation Center (NIC) Quetta, Cohort 14.",
    link: "https://github.com/Muhammad-JalalKhan",
  },
  {
    id: 12,
    title: "AI-Driven SD-WAN: Intelligent Traffic Classifier",
    category: "Systems & Infrastructure",
    filterTag: "Systems & Infrastructure",
    tags: ["XGBoost", "SD-WAN", "Network QoS", "Python"],
    summary:
      "Autonomous network packet classification engine dynamically routing network paths and prioritizing latency-sensitive enterprise traffic.",
    highlight: "Achieved 94.1% classification accuracy under variable packet loads.",
    link: "https://github.com/Muhammad-JalalKhan/Intelligent-Network-Traffic-Classifier-SD-WAN",
  },
  {
    id: 13,
    title: "Pneumonia Detection via Deep CNN & Grad-CAM",
    category: "Computer Vision & Geospatial",
    filterTag: "Computer Vision & Geospatial",
    tags: ["TensorFlow", "DenseNet121", "Grad-CAM", "Medical AI"],
    summary:
      "Deep convolutional neural network suite classifying chest X-ray scans with Grad-CAM heatmap overlays providing visual explainability for clinical regions.",
    highlight: "Production-grade transfer learning architecture.",
    link: "https://github.com/Muhammad-JalalKhan/Pneumonia_Detection_Using_CNN_Models",
  },
  {
    id: 14,
    title: "VOD Cloud Platform (Adaptive HLS & Web3 DRM)",
    category: "Systems & Infrastructure",
    filterTag: "Systems & Infrastructure",
    tags: ["FastAPI", "Docker", "MinIO", "Kafka", "HLS.js"],
    summary:
      "Decoupled microservices video-on-demand infrastructure running automated multi-resolution video transcoding with token-gated digital rights management.",
    highlight: "End-to-end event-driven video streaming architecture.",
    link: "https://github.com/Muhammad-JalalKhan/Video-Streaming-Platform-with-Adaptive-Bitrate-",
  },
  {
    id: 15,
    title: "HassleFree-Pulse BI Engine",
    category: "Applied ML & IoT",
    filterTag: "Applied ML & IoT",
    tags: ["Random Forest", "Business Intelligence", "Streamlit", "ML"],
    summary:
      "Operational machine learning toolkit built for a campus service enterprise, predicting peak printing demand hours and customer churn patterns.",
    highlight: "Applied predictive modeling running on live operational data.",
    link: "https://github.com/Muhammad-JalalKhan/HussleFree-Pulse_BI",
  },
  {
    id: 16,
    title: "Buniyad & Internal Automation Tooling",
    category: "Systems & Infrastructure",
    filterTag: "Systems & Infrastructure",
    tags: ["Claude Code", "React", "Tailwind CSS", "Microservices"],
    summary:
      "Full-stack responsive management interface and property automation portal developed using agentic Claude Code pair-programming workflows.",
    highlight: "Rapidly translated technical system specs into production UI.",
    link: "https://github.com/Muhammad-JalalKhan",
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
  "Computer Vision & Geospatial",
  "Systems & Infrastructure",
  "Applied ML & IoT",
] as const;

export type FilterCategory = (typeof filterCategories)[number];
