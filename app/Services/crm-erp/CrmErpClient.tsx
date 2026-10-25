// app/Services/crm-erp/CrmErpClient.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Database,
  Layers,
  BarChart,
  Bot,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Users,
  LineChart,
  Workflow,
  Cpu,
  Lock,
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  Building2,
  ShieldCheck,
  TrendingUp,
  Server,
  DollarSign,
} from "lucide-react";
import ServiceFAQ from "@/app/components/section/service/ServiceFAQ";
import { getServiceBySlug } from "@/content/services";

const service = getServiceBySlug("crm-erp")!;

export default function CrmErpClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"modules" | "roi" | "process" | "deliverables">("modules");
  const [activePreview, setActivePreview] = useState<"erp" | "crm">("erp");

  const stats = [
    { value: "$0", label: "Per-Seat Licensing Fees", desc: "Unlimited team members with zero monthly user taxes" },
    { value: "100%", label: "Data Sovereignty", desc: "Hosted on your private cloud with direct SQL access" },
    { value: "45%", label: "Operational Efficiency Gain", desc: "Automate approvals, invoicing, and reporting" },
    { value: "99.9%", label: "System Availability", desc: "Enterprise Postgres database with automated backups" },
  ];

  const clientProblems = [
    {
      title: "Exorbitant Per-Seat SaaS Licensing Taxes",
      desc: "Commercial CRMs like Salesforce or SAP charge $150 to $300 per user every month. As your team grows, software bills skyrocket to tens of thousands of dollars annually for basic access.",
      icon: <DollarSign className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Data Trapped Across Disconnected Spreadsheets",
      desc: "When sales uses one tool, warehouse tracks inventory on Excel, and accounting uses another system, records desynchronize—causing missed orders, double entries, and blind reporting.",
      icon: <FileSpreadsheet className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Forced to Bend Your Workflows to Rigid Software",
      desc: "Off-the-shelf platforms force your business into generic templates. Customizing basic approval fields or multi-tier pricing requires expensive proprietary consultants.",
      icon: <AlertTriangle className="w-5 h-5 text-blue-500" />,
    },
  ];

  const caseStudies = [
    {
      title: "Manufacturing & Inventory ERP Dashboard",
      image: "/portfolio/erp-dashboard.jpg",
      category: "Operations & Supply Chain",
      description: "End-to-end operational platform connecting raw material procurement, assembly line tracking, automated invoice generation, and real-time ledger accounting.",
      metric: "Eliminated 15+ weekly hours of manual spreadsheet data entry",
      tech: "Next.js, Node.js, PostgreSQL, Prisma, Redis, Docker",
    },
    {
      title: "Real Estate Property & Lead Intelligence CRM",
      image: "/portfolio/realestate-crm.png",
      category: "High-Ticket Sales Pipeline",
      description: "Custom pipeline management system with automated ad lead distribution, site visit calendar scheduling, document vaults, and agent commission tracking.",
      metric: "Scaled from 5 to 60 sales agents with zero licensing cost increase",
      tech: "React, Next.js App Router, Tailwind CSS, PostgreSQL, WebSockets",
    },
  ];

  const modules = [
    {
      icon: <Workflow className="w-6 h-6 text-white" />,
      tag: "Sales Pipeline",
      title: "Intelligent Lead Pipeline & Opportunity Routing",
      description:
        "Custom Kanban sales boards, automated round-robin lead assignment, activity timeline logging, and automated WhatsApp/Email follow-up triggers tailored to your sales milestones.",
      problemSolved: "Stops leads from sitting unassigned and prevents sales reps from dropping follow-ups.",
      clientBenefit: "Accelerates deal velocity and gives leadership full visibility into closing rates.",
      tech: "PostgreSQL, WebSockets, Redis, Next.js",
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      tag: "Inventory & Warehouses",
      title: "Real-Time Inventory & Multi-Location Stock Control",
      description:
        "Barcode/QR scanning integration, low-stock threshold alerts, automated purchase order generation, and multi-warehouse stock transfer tracking with real-time valuation updates.",
      problemSolved: "Eliminates warehouse stockouts, dead stock, and discrepancies between physical and digital inventory.",
      clientBenefit: "100% accurate inventory levels and automated supplier replenishment.",
      tech: "PostgreSQL, Prisma ORM, Barcode API, Node.js",
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      tag: "Finance & Invoicing",
      title: "Automated Invoicing, Ledgers & Tax Compliance",
      description:
        "Generate multi-currency PDF invoices with one click, automate recurring subscription billing, calculate GST/VAT automatically, and track accounts receivable with automated payment reminders.",
      problemSolved: "Replaces manual invoice typing and tedious end-of-month reconciliations.",
      clientBenefit: "Get paid faster and maintain audit-ready financial records with zero manual calculation errors.",
      tech: "Node.js, PDFKit, Stripe Billing, Bank Reconciliation APIs",
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      tag: "Security & Compliance",
      title: "Granular Role-Based Access Control (RBAC) & Audit Logs",
      description:
        "Strict permission controls ensuring employees only view data pertinent to their role. Immutable timestamped audit trails record every record view, edit, export, and deletion.",
      problemSolved: "Prevents rogue employee data exfiltration and accidental client record deletion.",
      clientBenefit: "Bank-grade data confidentiality and compliance readiness for enterprise audits.",
      tech: "JWT, Row-Level Security, Encrypted PostgreSQL, Audit Trail Triggers",
    },
  ];

  const roiComparison = [
    {
      aspect: "Monthly User Licensing Cost",
      custom: "$0 per user. Add 5, 50, or 500 team members with zero fee increase",
      saas: "$150 - $300/user/month ($90,000/yr for 25 sales reps)",
    },
    {
      aspect: "Database & Data Sovereignty",
      custom: "100% hosted on your own AWS/Postgres instance with direct SQL access",
      saas: "Stored in proprietary vendor silos with limited export APIs",
    },
    {
      aspect: "Business Logic Customization",
      custom: "Engineered specifically to mirror your company's exact workflow rules",
      saas: "Rigid standard templates requiring expensive third-party consultants",
    },
    {
      aspect: "Integrations & API Freedom",
      custom: "Unlimited custom REST/GraphQL endpoints and direct webhook connections",
      saas: "API rate limits, extra charges for enterprise API tiers",
    },
    {
      aspect: "3-Year Total Cost of Ownership",
      custom: "Single milestone development investment; low hosting overhead",
      saas: "Compounding annual subscription costs that never end",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Operational Audit & Workflow Mapping",
      description:
        "We shadow your key departments, document your current spreadsheet structures, and map out the exact data relationships required across teams.",
      clientProvides: "Sample spreadsheets, workflow documents, and department lead interviews.",
    },
    {
      number: "02",
      title: "Database Architecture & Schema Modeling",
      description:
        "We architect a normalized relational PostgreSQL database schema with strict foreign keys, indexing, and row-level security policies.",
      clientProvides: "Approval of business rules and entity relationship diagrams.",
    },
    {
      number: "03",
      title: "Custom Module Engineering & API Integrations",
      description:
        "We build the custom dashboard interfaces in Next.js, connecting business logic, automated notifications, PDF generators, and external accounting tools.",
      clientProvides: "Weekly review on the live staging environment.",
    },
    {
      number: "04",
      title: "Legacy Data Migration & Verification",
      description:
        "We clean, transform, and import your existing spreadsheets or legacy database records with automated validation scripts to guarantee zero lost records.",
      clientProvides: "Historical export files for migration.",
    },
    {
      number: "05",
      title: "Team Training, Role Setup & Production Cutover",
      description:
        "We configure user roles, conduct hands-on staff training sessions, provide video runbooks, and deploy the system to your secure private cloud.",
      clientProvides: "Staff attendance for training and operational sign-off.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs md:text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                Zero Per-Seat Fees • Custom Enterprise Systems
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              Custom CRM &amp; ERP Platforms Built for Your{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Exact Business Logic
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Break free from rigid SaaS constraints and expensive per-seat subscription licenses ($150+/user/month). We engineer bespoke CRM and ERP platforms tailored to your exact operational workflows, inventory tracking, and lead pipelines with 100% data privacy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact?service=CRM+%26+ERP"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Discuss Your Custom CRM/ERP Scope
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#dashboard-showcase"
                className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-indigo-500 text-gray-700 dark:text-gray-200 rounded-xl font-semibold text-base hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all flex items-center justify-center gap-2"
              >
                Explore System Architecture
              </Link>
            </div>

            {/* Trust statement */}
            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              100% Direct SQL Database Ownership • Zero Per-Seat User Taxes • Role-Based Access Control
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-md shadow-sm text-center"
              >
                <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Enterprise Dashboard Showcase */}
      <section id="dashboard-showcase" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2 block">
              Enterprise Dashboard Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Real Custom Platforms in Production
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Inspect actual custom dashboards we have delivered for real operations—clean data hierarchies, actionable KPIs, and zero visual clutter.
            </p>

            {/* View Switcher Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setActivePreview("erp")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activePreview === "erp"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-indigo-600"
                }`}
              >
                <Layers className="w-4 h-4" />
                Enterprise Resource Planning (ERP)
              </button>
              <button
                onClick={() => setActivePreview("crm")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activePreview === "crm"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-indigo-600"
                }`}
              >
                <Users className="w-4 h-4" />
                Lead &amp; Property CRM Pipeline
              </button>
            </div>
          </div>

          {/* Image Showcase Container */}
          <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 p-4 md:p-8 shadow-xl relative overflow-hidden">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-950 border border-gray-200/50 dark:border-gray-800/50">
              {activePreview === "erp" ? (
                <Image
                  src="/portfolio/erp-dashboard.jpg"
                  alt="Custom Enterprise ERP Operations Dashboard by Maxora Technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              ) : (
                <Image
                  src="/portfolio/realestate-crm.png"
                  alt="Custom Lead Pipeline & Real Estate CRM System by Maxora Technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              )}
            </div>

            {/* Performance Callout Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 block text-base mb-0.5">Live Data Sync</span>
                <span className="text-gray-500 dark:text-gray-400">WebSockets updates keep all staff screens synced in real-time</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-blue-600 dark:text-blue-400 block text-base mb-0.5">Immutable Audit Trail</span>
                <span className="text-gray-500 dark:text-gray-400">Every record view, export, and modification is logged with timestamps</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-purple-600 dark:text-purple-400 block text-base mb-0.5">Zero Per-Seat Fees</span>
                <span className="text-gray-500 dark:text-gray-400">Unlimited user accounts and granular role-based permissions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Client's Real Problems Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-red-600 dark:text-red-400 tracking-wider uppercase mb-2 block">
              Operational Chaos
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Why Off-The-Shelf SaaS Platforms Hold Growing Teams Back
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Relying on generic tools forces your business into someone else&apos;s cookie-cutter workflows while charging you an escalating penalty for every employee you hire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-red-200 dark:border-red-900/30 hover:border-red-400 dark:hover:border-red-800 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 flex items-center justify-center mb-6">
                    {prob.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                    {prob.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-gray-800/60 text-xs text-red-600 dark:text-red-400 font-medium">
                  Direct drain on operational margins
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs: Modules, SaaS vs Custom Comparison, Process & Deliverables */}
      <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 gap-1">
              <button
                onClick={() => setActiveTab("modules")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "modules"
                    ? "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Core Modules
              </button>
              <button
                onClick={() => setActiveTab("roi")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "roi"
                    ? "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Custom vs SaaS ROI
              </button>
              <button
                onClick={() => setActiveTab("process")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "process"
                    ? "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Implementation Process
              </button>
              <button
                onClick={() => setActiveTab("deliverables")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "deliverables"
                    ? "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Scope &amp; Deliverables
              </button>
            </div>
          </div>

          {/* TAB 1: CORE MODULES */}
          {activeTab === "modules" && (
            <div className="grid md:grid-cols-2 gap-8">
              {modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-indigo-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        {mod.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
                        {mod.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                      {mod.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {mod.description}
                    </p>

                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200/60 dark:border-gray-700/60 mb-6 text-xs space-y-2">
                      <div className="text-red-700 dark:text-red-300">
                        <strong className="text-red-600 dark:text-red-400">Problem Solved:</strong> {mod.problemSolved}
                      </div>
                      <div className="text-emerald-700 dark:text-emerald-300">
                        <strong className="text-emerald-600 dark:text-emerald-400">Business Benefit:</strong> {mod.clientBenefit}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-mono text-indigo-600 dark:text-indigo-400">Stack: {mod.tech}</span>
                    <Link
                      href="/contact?service=CRM+%26+ERP"
                      className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Scope This <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: ROI COMPARISON */}
          {activeTab === "roi" && (
            <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white uppercase font-bold text-xs border-b border-gray-200 dark:border-gray-800">
                    <tr>
                      <th className="py-4 px-6">Evaluation Category</th>
                      <th className="py-4 px-6 text-indigo-600 dark:text-indigo-400">Maxora Custom CRM / ERP Platform</th>
                      <th className="py-4 px-6 text-gray-500 dark:text-gray-400">Salesforce / SAP / Zoho (Off-the-shelf)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {roiComparison.map((row, idx) => (
                      <tr key={idx} className="bg-white dark:bg-gray-950/60 hover:bg-gray-50/50 dark:hover:bg-gray-900/50">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                          {row.aspect}
                        </td>
                        <td className="py-4 px-6 text-indigo-700 dark:text-indigo-300 font-medium">
                          ✓ {row.custom}
                        </td>
                        <td className="py-4 px-6 text-gray-500 dark:text-gray-400">
                          ✗ {row.saas}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: 5-STAGE PROCESS */}
          {activeTab === "process" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-extrabold text-indigo-600/30 dark:text-indigo-400/30 font-mono mb-3 block">
                      {st.number}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                      {st.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {st.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/60 dark:border-gray-800/60 text-[11px] text-indigo-600 dark:text-indigo-400">
                    <strong>Client Provides:</strong> {st.clientProvides}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: DELIVERABLES */}
          {activeTab === "deliverables" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Standard System Deliverables
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>Complete custom web dashboard (Next.js &amp; Tailwind CSS) with unlimited user seats</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>Normalized PostgreSQL database schema with row-level security &amp; automated backups</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>Role-based access control (Admin, Manager, Rep, Accounting) and immutable audit trails</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>Data migration script from existing spreadsheets or legacy SQL databases</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>Private cloud deployment on AWS / DigitalOcean with SSL encryption</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>Comprehensive staff video runbooks and 30-day post-launch optimization warranty</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  Enterprise Add-Ons
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2 shrink-0" />
                    <span>Custom mobile field app (React Native) for offline warehouse or driver logging</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2 shrink-0" />
                    <span>Bi-directional accounting sync with Tally, QuickBooks, or Zoho Books</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2 shrink-0" />
                    <span>Automated WhatsApp Business notification triggers for invoice payment reminders</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2 shrink-0" />
                    <span>HIPAA / SOC2 compliance readiness data masking and retention policies</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing & Scoping Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2 block">
            Transparent Scoping
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
            How Custom System Engagements Are Scoped
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Instead of perpetual per-seat licenses, our custom CRM/ERP projects are scoped on a clear milestone basis according to module count and workflow complexity.
          </p>

          <div className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 text-left grid md:grid-cols-3 gap-6 shadow-sm">
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase block mb-1">Departmental CRM</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sales Pipeline System</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Lead distribution, deal stages, client document vault, and automated follow-up alerts with unlimited user logins.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase block mb-1">Operations ERP</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Inventory &amp; Invoicing</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Multi-warehouse stock tracking, vendor purchase orders, automated invoice generation, and financial ledgers.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase block mb-1">Enterprise Suite</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Full Business Platform</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Complete multi-department platform connecting Sales, Procurement, Manufacturing, HR, and Accounting with RBAC.</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact?service=CRM+%26+ERP"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-indigo-500/25 transition-all"
            >
              Request Custom CRM/ERP Scope Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <ServiceFAQ service={service} />

      {/* Related Services */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white text-center mb-8">
            Complementary Engineering Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/Services/ai-automation"
              className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-indigo-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  AI Agents &amp; Workflow Automation
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Connect autonomous voice callers and document extraction agents directly to your custom CRM.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/Services/web-development"
              className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-indigo-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Custom Web Development
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Public customer portals and web applications backed by your internal ERP database.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex p-4 rounded-3xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50 mb-8">
            <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white mb-6">
            Ready to Take 100% Control of Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Business Data &amp; Operations
            </span>
            ?
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop paying monthly per-user taxes for rigid SaaS software that doesn&apos;t fit how you work. Schedule an architectural consultation to map your custom CRM/ERP roadmap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/contact?service=CRM+%26+ERP")}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              Schedule System Architecture Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => router.push("/Services")}
              className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-base hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Browse All Services
            </button>
          </div>

          <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
            Guaranteed 24hr response • Requirement-based milestone scoping • Zero recurring per-user fees
          </p>
        </div>
      </section>
    </>
  );
}
