# Muhammad Jalal — Personal Portfolio

[![Live Site](https://img.shields.io/badge/Live_Demo-Visit_Portfolio-black?style=for-the-badge&logo=vercel)](https://portfolio-website-rosy-six-60.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-black?style=flat&logo=framer)](https://www.framer.com/motion/)

> 🌐 **Live Website:** [portfolio-website-rosy-six-60.vercel.app](https://portfolio-website-rosy-six-60.vercel.app/)

A modern, typography-driven editorial portfolio website showcasing selected engineering works, autonomous multi-agent pipelines, edge computer vision architectures, and startup leadership[cite: 1, 2].
---

## ⚡ Key Highlights

- **Fluid Editorial Typography:** Built with dynamic CSS `clamp()` viewport typography to ensure zero layout clipping across ultrawide monitors, standard laptops, and mobile screens.
- **Glassmorphic Navigation:** Sticky frosted header with real-time availability indicator and responsive link collapsing.
- **Interactive Project Filtering:** Dynamic client-side sorting across 16 technical initiatives categorized by AI & Agents, Computer Vision & Geospatial, Systems & Infrastructure, and Applied ML & IoT.
- **Deep-Tech Showcase:** Covers end-to-end projects spanning LangGraph multi-agent systems, YOLOv8 edge vision pipelines, distributed Dask clusters, and startup incubation deliverables.
- **Direct PDF Asset Integration:** Seamlessly serves `/public/resume.pdf` for direct browser previews and downloads.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Hosting & CI/CD** | Vercel |

---

## 📂 Repository Structure

```text
├── app/
│   ├── globals.css          # Global typography rules & overflow reset
│   ├── layout.tsx           # SEO metadata & font definitions
│   └── page.tsx             # Master page assembling core sections
├── components/
│   ├── Navbar.tsx           # Glassmorphic header with status badge
│   ├── Hero.tsx             # Fluid editorial nameplate & quick links
│   ├── SelectedWork.tsx     # 16-project interactive grid with category filters
│   ├── Services.tsx         # Expandable service capability list
│   ├── Experience.tsx       # Dark-contrast industry & startup timeline
│   ├── CommunityBanner.tsx  # Hackathon awards & fellowship marquee
│   └── Footer.tsx           # Contact CTA & external profiles
├── public/
│   └── resume.pdf           # Live downloadable CV asset
├── portfolio-data.md        # Source-of-truth project data and copy
├── tailwind.config.ts       # Design tokens, spacing, and custom animations
└── tsconfig.json            # Strict TypeScript configuration
🚀 Featured Work HighlightsThis portfolio catalogs 16 production systems, research implementations, and civic-tech ventures:  Autonomous EHS Compliance Engine: Hybrid edge-to-cloud CV pipeline filtering 99% of normal video frames at the edge with YOLOv8 and zero-shot VLM hazard validation[cite: 2].ThermaX OS (FortyGuard Hackathon '26): Climate resilience engine combining temperature API telemetry with LangGraph multi-agent orchestration.  Dawae-Check (Alibaba Cloud AI Hackathon '26): National finalist anti-counterfeit pharmaceutical inspection model utilizing fine-tuned Qwen2.5-VL[cite: 1, 2].Self-Correcting Autonomous Coding Agent: Multi-node LangGraph execution loop with runtime AST parsing and automated self-debugging[cite: 1, 2].Sentinel AI: Decoupled LLM inference security firewall detecting prompt injection attacks in under 50ms[cite: 1, 2].Distributed Computing Cluster: High-performance grid over a Tailscale mesh network for parallel model hyperparameter tuning using Dask and Docker[cite: 1, 2].Aqualytica (HydroScan): IoT water-quality monitoring system incubated at the National Incubation Center (NIC) Quetta[cite: 1, 2].💻 Local DevelopmentClone the repository:Bashgit clone [https://github.com/Muhammad-JalalKhan/Portfolio-Website.git](https://github.com/Muhammad-JalalKhan/Portfolio-Website.git)
cd Portfolio-Website
Install dependencies:Bashnpm install
Start the development server:Bashnpm run dev
Build for production:Bashnpm run build
📬 Contact & ConnectAuthor: Muhammad Jalal  Affiliation: BS Artificial Intelligence, National University of Sciences and Technology (NUST)  Location: Quetta, Pakistan  Email: jalal.bsai24.nbc@student.nust.edu.pkGitHub: @Muhammad-JalalKhan  LinkedIn: Muhammad Jalal Khan
