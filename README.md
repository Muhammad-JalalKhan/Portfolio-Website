# Muhammad Jalal — Personal Portfolio

[![Live Site](https://img.shields.io/badge/Live_Demo-Visit_Portfolio-black?style=for-the-badge&logo=vercel)](https://portfolio-website-rosy-six-60.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-black?style=flat&logo=framer)](https://www.framer.com/motion/)
[![Deployment Status](https://img.shields.io/badge/Vercel-Deployed-success?style=flat&logo=vercel)](https://portfolio-website-rosy-six-60.vercel.app/)

> 🌐 **Production URL:** [portfolio-website-rosy-six-60.vercel.app](https://portfolio-website-rosy-six-60.vercel.app/)

A typography-driven, responsive personal portfolio built with Next.js 14 and Tailwind CSS. The site communicates engineering capability through calm visual hierarchy, fluid viewport scaling, and distraction-free layouts showcasing autonomous agents, computer vision systems, and startup engineering initiatives.

---

## ⚡ Architectural Highlights

* **Fluid Responsive Typography:** Implements dynamic CSS `clamp()` viewport typography across large display headings, preventing text clipping and horizontal overflow across mobile (360px) to ultrawide (4K) viewports.
* **Glassmorphic Navigation:** Sticky header container with backdrop blur (`backdrop-blur-md`), ambient border contrast, an active availability pulse indicator, and responsive link collapsing for mobile devices.
* **Dynamic Work Filtering:** Interactive client-side filtering matrix organizing 16 engineering initiatives across four primary categories: *AI & Agents*, *Computer Vision & Geospatial*, *Systems & Infrastructure*, and *Applied ML & IoT*.
* **Integrated Static Document Delivery:** Native routing directly serves the verified curriculum vitae via `/public/resume.pdf` for in-browser inspection or download.
* **Type-Safe Component System:** Clean modular architecture built with Next.js App Router and TypeScript, ensuring zero build-time warnings or deployment failures.

---

## 🛠️ System Stack

| Layer | Technologies |
| :--- | :--- |
| **Core Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling & Design System** | Tailwind CSS, PostCSS |
| **Animation Engine** | Framer Motion |
| **Iconography** | Lucide React |
| **Hosting & CI/CD** | Vercel Edge Network |

---

## 📂 Repository Layout

```text
Portfolio-Website/
├── app/
│   ├── globals.css          # CSS reset, clamp scales, and custom scroll locks
│   ├── layout.tsx           # Application shell, font imports, and SEO metadata
│   └── page.tsx             # Master page assembling modular portfolio sections
├── components/
│   ├── Navbar.tsx           # Sticky frosted glass navigation with status indicator
│   ├── Hero.tsx             # Fluid nameplate, avatar badge, and quick outbound links
│   ├── SelectedWork.tsx     # 16-project dynamic grid with multi-category filtering
│   ├── Services.tsx         # Expandable service capability and architecture rows
│   ├── Experience.tsx       # Dark-contrast professional timeline and startup history
│   ├── CommunityBanner.tsx  # Marquee of hackathon accolades and campus achievements
│   └── Footer.tsx           # Contact CTA module and social profile directory
├── public/
│   └── resume.pdf           # Static curriculum vitae asset for browser preview
├── portfolio-data.md        # Source-of-truth project metrics, dates, and copy
├── tailwind.config.ts       # Breakpoint extensions and typography styling
├── tsconfig.json            # Strict TypeScript configuration
└── package.json             # Pinned project dependencies and scripts
'''text


🚀 Key Featured Initiatives
The portfolio showcases full-stack systems engineering across 16 technical projects:

Autonomous EHS Compliance Engine: Hybrid edge-to-cloud computer vision pipeline utilizing local YOLOv8 processing to filter 99% of normal frames, passing edge cases to cloud vision-language models for hazard auditing.

ThermaX OS: Climate resilience platform combining temperature API feeds with LangGraph multi-agent orchestration for urban cooling intervention (FortyGuard Global Heat Intelligence Hackathon).

Dawae-Check: Anti-counterfeit pharmaceutical packaging verification engine integrating fine-tuned Qwen2.5-VL models (National Finalist, Alibaba Cloud AI Hackathon Pakistan).

Self-Correcting Autonomous Coding Agent: Multi-node autonomous code synthesis and execution loop with AST trace analysis and self-healing debugging chains.

Sentinel AI: Decoupled LLM inference firewall detecting prompt injections and adversarial inputs in under 50ms using semantic embeddings and XGBoost.

Distributed Computing Cluster: Private compute grid running across workstations over a Tailscale mesh network for parallel ML training via Dask and Docker.

Aqualytica (HydroScan): IoT water-quality monitoring platform with analog sensor telemetry incubated at the National Incubation Center (NIC) Quetta.

💻 Local Setup & Execution
Prerequisites
Node.js: v18.17.0 or higher

npm: v9.0.0 or higher

Installation Steps
Clone the repository:

Bash
git clone [https://github.com/Muhammad-JalalKhan/Portfolio-Website.git](https://github.com/Muhammad-JalalKhan/Portfolio-Website.git)
cd Portfolio-Website
Install project dependencies:

Bash
npm install
Launch local development server:

Bash
npm run dev
Open http://localhost:3000 in your browser to view the application.

Compile for production:

Bash
npm run build
🌐 Continuous Deployment
The repository is linked with Vercel for automatic continuous deployment:

Plaintext
git push origin main ──► Vercel Build Pipeline ──► Production Edge Network
Every commit to the main branch triggers an automated preview and production deployment.

Static assets in /public are cached at edge locations for minimal latency worldwide.

📬 Contact & Profiles
Developer: Muhammad Jalal

Degree Program: BS Artificial Intelligence, National University of Sciences and Technology (NUST)

Location: Quetta, Pakistan

Institutional Email: jalal.bsai24.nbc@student.nust.edu.pk

GitHub: @Muhammad-JalalKhan

LinkedIn: Muhammad Jalal Khan
