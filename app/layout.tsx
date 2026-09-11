import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Jalal — AI Engineer & System Architect",
  description:
    "Portfolio of Muhammad Jalal — Designing autonomous agents, edge vision pipelines, and scalable distributed systems. NUST AI student, startup founder, and hackathon finalist.",
  keywords: [
    "Muhammad Jalal",
    "AI Engineer",
    "System Architect",
    "Portfolio",
    "NUST",
    "Machine Learning",
    "Computer Vision",
    "LangGraph",
    "Agentic AI",
  ],
  authors: [{ name: "Muhammad Jalal" }],
  openGraph: {
    title: "Muhammad Jalal — AI Engineer & System Architect",
    description:
      "Designing autonomous agents, edge vision pipelines, and scalable distributed systems.",
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Jalal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Jalal — AI Engineer & System Architect",
    description:
      "Designing autonomous agents, edge vision pipelines, and scalable distributed systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
