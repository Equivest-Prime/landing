"use client";

import Image from "next/image";
import { ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[var(--background)] px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col items-center lg:flex-row gap-12 lg:gap-16 lg:items-center">
          {/* Left Column - Content */}
          <div className="w-full lg:w-auto space-y-8 mt-4">
            {/* Announcement Badge */}
            <div className="opacity-0 animate-fade-in-up">
              <Badge
                variant="outline"
                className="px-4 py-2 bg-white/80 backdrop-blur-sm text-sm font-medium text-[var(--primary)] hover:border-[var(--primary)]/30 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer group"
              >
                <span className="relative md:flex h-2 w-2 mr-2 hidden ">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]" />
                </span>
                Licensed & Regulated Prime Liquidity Provider
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6 opacity-0 animate-fade-in-up animation-delay-100">
              <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tighter text-[var(--foreground)]">
                Institutional-Grade Access to{" "}
                <span className="relative">
                  <span className="relative z-10">Global Financial Markets</span>
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Seamless connectivity. Multi-asset coverage. Complete regulatory compliance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-300">
              <Button
                size="lg"
                className="group relative px-7 py-3.5 h-auto bg-[var(--primary)] text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-[var(--primary-hover)] hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Explore Solutions</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-7 py-3.5 h-auto bg-white border border-[var(--border)] text-[var(--foreground)] font-medium rounded-lg transition-all duration-300 hover:border-[var(--foreground)]/20 hover:bg-gray-50 hover:-translate-y-0.5"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Column - Image with Floating Cards */}
          <div className="relative lg:h-[600px] opacity-0 animate-slide-in-right animation-delay-200 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="animate-bounce-subtle">
              <Image src="/assets/images/ep.png" alt="Kresna" width={1200} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
