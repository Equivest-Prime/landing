"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Header from "./common/Header";
import { Globe, ShieldCheck, Zap } from "lucide-react";
import { Button } from "./ui/button";

interface TabContent {
  label: string;
  title?: string;
  description: { heading: string; text: string }[];
  image: string;
  features?: { icon?: string; label: string; value?: string }[];
}

const tabs: { id: string; label: string }[] = [
  { id: "liquidity", label: "Liquidity Solutions" },
  { id: "brokerage", label: "Brokerage Support" },
  { id: "institutional", label: "Institutional Support" },
];

const tabContent: Record<string, TabContent> = {
  liquidity: {
    label: "Liquidity Solutions",
    title: "Delivering precise liquidity streams that empower your trading operations with unprecedented market access and execution quality",
    image: "/assets/images/liquid.png",
    description: [
      {
        heading: "Aggregated multi-asset liquidity",
        text: "By intelligently consolidating liquidity from tier-1 banks, non-bank market makers, and premier ECNs, we provide clients with deeper order books, tighter spreads, and minimised slippage.",
      }, {
        heading: "Low latency execution",
        text: "Our ultra-low latency execution architecture delivers microsecond-level trade processing, ensuring your orders reach the market with exceptional speed and precision.",
      }
    ],
    features: [
      {
        icon: "Zap",
        label: "Customisable price feeds",
        value: "Fully tailored price feeds that align precisely with your business model and client base, allowing you to define spread widths and markup models."
      },
      {
        icon: "Globe",
        label: "150+ trading instruments",
        value: "Seamless access to over 150 trading instruments across multiple asset classes, including FX pairs, precious metals, commodities and indices."
      },
      {
        icon: "ShieldCheck",
        label: "FIX API connectivity",
        value: "Institutional-grade connectivity solutions with flexible integration pathways tailored to your technological infrastructure and business requirements."
      },
    ],
  },
  brokerage: {
    label: "Brokerage Support",
    title: " Equivest, we go beyond liquidity - we become your infrastructure partner. Our comprehensive brokerage support solutions are designed to help you launch, scale, and optimise your operations with confidence.",
    image: "/assets/images/buy.png",
    description: [
      {
        heading: "White-label trading platforms",
        text: "Fully customisable solutions with your branding. Rapid deployment to get you to market faster",
      },
      {
        heading: "Risk management tools",
        text: "Advanced systems to monitor and manage exposure. Protect your brokerage and clients",
      },
      {
        heading: "Regulatory guidance",
        text: "Expert assistance with compliance requirements. Stay ahead of regulatory changes with our comprehensive support.",
      }
    ],
    features: [
      {
        label: "Tailored liquidity streams for startups & established brokers",
      },
      {
        label: "Negative balance protection options",
      },
      {
        label: "24/7 technical support",
      },
      {
        label: "White label support with backend analytics",
      },
      {
        label: "Deep integration with the leading trading platforms",
      },
      {
        label: "Customisable risk parameters",
      },

    ],
  },
  institutional: {
    label: "Institutional Support",
    title: "Supporting global institutions with market-leading solutions.",
    image: "/assets/images/insti.png",
    description: [
      {
        heading: "Liquidity for hedge funds, family offices & proprietary firms",
        text: "Access deep pools of liquidity tailored to institutional trading strategies and requirements.",
      },
      {
        heading: "Cross-connected infrastructure for optimal execution",
        text: "Leverage our state-of-the-art infrastructure to achieve superior trade execution and operational efficiency.",
      },
      {
        heading: "Transparent pricing models",
        text: "Benefit from clear and competitive pricing structures designed to meet the needs of institutional clients.",
      }
    ],
    features: [
      {
        label: "Customised Liquidity",
        value: "Tailored solutions to meet specific trading needs with deep liquidity pools from Tier-1 banks."
      },
      {
        label: "Optimised Execution",
        value: "Efficient order routing algorithms that reduce market impact, especially for large volumes."
      },
      {
        label: "Emerging Markets Access",
        value: "Access to emerging markets, enabling institutions to capitalize on new opportunities."
      },
    ],
  },
};

export default function Solutions() {
  const [activeTab, setActiveTab] = useState("liquidity");
  const content = tabContent[activeTab];

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-background px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 max-w-2xl">
          <Header className="max-w-xl mx-auto" subtitle={"Comprehensive Solutions"} title={"Equivest delivers institutional-grade liquidity and infrastructure solutions tailored to your specific needs."} />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-start gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-base font-medium transition-all cursor-pointer ${activeTab === tab.id
                ? "bg-foreground text-background"
                : "bg-transparent border border-border text-foreground hover:bg-muted"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-4 items-stretch">
          {/* Left Column - Gray Card */}
          <div className="bg-muted rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[400px] lg:min-h-[480px]">
            {/* Main Image */}
            <div className="relative right-0 mb-6 lg:mb-8 w-full h-48 lg:h-64">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={content.image}
                  alt={content.label}
                  height={200}
                  width={200}
                  className="object-contain object-top grayscale"
                />
              </motion.div>
            </div>
            <div>
              <span
                className="text-muted-foreground text-base mb-4 block"
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontStyle: "italic",
                }}
              >
                {content.label}
              </span>
              <h3 className="text-3xl lg:text-3xl font-semibold tracking-tighter capitalize ">
                {content.title}
              </h3>
            </div>
            <br />
            <Button className="w-fit p-6 rounded-xl" >Get Started</Button>
          </div>

          {/* Right Column - Image with floating elements */}
          <div className="h-full grid grid-cols-1 gap-4">
            {content.description.map((desc, index) => (
              <div
                className="flex flex-col p-6 lg:p-8 rounded-2xl bg-background border border-border z-10 "
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
                }}
                key={index}
              >
                {/* Heading */}
                <span className="text-xl lg:text-2xl font-semibold tracking-tighter mb-4 capitalize">
                  {desc.heading}
                </span>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {desc.text}
                </p>
              </div>
            ))}
          </div>

        </div>
        {/* Features Grid */}
        <div className="mt-8 block md:hidden lg:hidden xl:hidden">
          <span>
            <h3 className=" text-xl lg:text-4xl font-semibold tracking-tighter text-foreground">
              Key Features
            </h3>
          </span>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-4">
          {content.features?.map((feature, index) => {
            let IconComponent;
            switch (feature.icon) {
              case "Zap":
                IconComponent = Zap;
                break;
              case "Globe":
                IconComponent = Globe;
                break;
              case "ShieldCheck":
                IconComponent = ShieldCheck;
                break;
              default:
                IconComponent = null;
            }
            return (
              <div
                key={index}
                className="flex flex-col p-6 lg:p-8 rounded-2xl bg-background border border-border h-full"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
                }}
              >
                <div className="mb-4">
                  {IconComponent && <IconComponent className="w-6 h-6 text-foreground" />}
                </div>
                <span className="text-lg lg:text-xl font-semibold tracking-tighter mb-2">
                  {feature.label}
                </span>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
