"use client";

import { useState } from "react";
import Image from "next/image";

// Kresna X Icon
const KresnaIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

// Document icon
const DocumentIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-500"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

// Person icon
const PersonIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-500"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

interface TabContent {
  label: string;
  title: string;
  description: string;
  image: string;
  stats: { icon: "document" | "person"; label: string; value: string }[];
  quote: string;
  action: string;
}

const tabs: { id: string; label: string }[] = [
  { id: "sales", label: "Sales Reps" },
  { id: "revops", label: "RevOps Manager" },
  { id: "leaders", label: "Revenue Leaders" },
  { id: "finance", label: "Finance Teams" },
];

const tabContent: Record<string, TabContent> = {
  sales: {
    label: "For Sales Reps",
    title: "Focus on selling, not admin.",
    description:
      "Let Kresna log calls, update CRM fields, and draft follow-ups automatically.",
    image: "/assets/images/sales-rep.jpg",
    stats: [
      { icon: "document", label: "Potential Earnings", value: "$143.5" },
      { icon: "person", label: "New clients", value: "321" },
    ],
    quote: '"Saved me 10+ hours a week"',
    action: "Draft follow-up emails",
  },
  revops: {
    label: "For RevOps Manager",
    title: "Streamline every workflow.",
    description:
      "Automate data hygiene, pipeline updates, and reporting with intelligent workflows.",
    image: "/assets/images/revops-manager.jpg",
    stats: [
      { icon: "document", label: "Reports Generated", value: "48" },
      { icon: "person", label: "Team members", value: "12" },
    ],
    quote: '"Our data is finally clean"',
    action: "Generate weekly reports",
  },
  leaders: {
    label: "For Revenue Leaders",
    title: "Lead with real-time insights.",
    description:
      "Get instant forecasts, pipeline visibility, and team performance metrics.",
    image: "/assets/images/revenue-leader.jpg",
    stats: [
      { icon: "document", label: "Forecast Accuracy", value: "94%" },
      { icon: "person", label: "Direct reports", value: "8" },
    ],
    quote: '"Forecasting is now effortless"',
    action: "View live dashboard",
  },
  finance: {
    label: "For Finance Teams",
    title: "Close books faster.",
    description:
      "Sync revenue data, automate reconciliation, and ensure compliance.",
    image: "/assets/images/finance-team.jpg",
    stats: [
      { icon: "document", label: "Time Saved", value: "20hrs" },
      { icon: "person", label: "Integrations", value: "15" },
    ],
    quote: '"Month-end is now stress-free"',
    action: "Sync financial data",
  },
};

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("sales");
  const content = tabContent[activeTab];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span
            className="text-muted-foreground text-sm mb-4 block"
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
            }}
          >
            Usecases
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Kresna adapts to every
            <br />
            role in your revenue team.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">
            Whether you&apos;re closing deals, optimizing ops, or leading the
            forecast, Kresna works like an AI teammate that fits your
            day-to-day.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-foreground text-background"
                  : "bg-transparent border border-border text-foreground hover:bg-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Column - Gray Card */}
          <div className="bg-muted rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[400px] lg:min-h-[480px]">
            <div>
              <span
                className="text-muted-foreground text-sm mb-4 block"
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontStyle: "italic",
                }}
              >
                {content.label}
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                {content.title.split(",")[0]}
                {content.title.includes(",") && (
                  <>
                    ,<br />
                    {content.title.split(",")[1]}
                  </>
                )}
              </h3>
            </div>

            <p className="text-muted-foreground text-sm lg:text-base mt-auto">
              {content.description}
            </p>
          </div>

          {/* Right Column - Image with floating elements */}
          <div className="relative min-h-[400px] lg:min-h-[480px]">
            {/* Main Image */}
            <div className="relative h-full rounded-3xl overflow-hidden bg-muted">
              <Image
                src={content.image}
                alt={content.label}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Floating Stat Cards */}
              <div className="absolute top-4 right-4 space-y-2">
                {content.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      {stat.icon === "document" ? (
                        <DocumentIcon />
                      ) : (
                        <PersonIcon />
                      )}
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-lg font-bold">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Handwritten Quote */}
              <div
                className="absolute right-4 bottom-20 text-foreground/80 text-sm max-w-[140px] text-right"
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontStyle: "italic",
                }}
              >
                {content.quote}
              </div>

              {/* Action Badge */}
              <div className="absolute bottom-4 right-4">
                <div className="bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
                    }}
                  >
                    <KresnaIcon className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-medium">{content.action}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
