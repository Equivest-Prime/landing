"use client";

import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function WorldMapSection() {
  return (
    <section className="relative bg-[var(--background)] max-w-7xl mx-auto border border-gray-400/10 rounded-3xl p-8">
      <div className="">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
            Global Presence
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed opacity-0 animate-fade-in-up animation-delay-100">
            With strategic locations across the globe, Equivest Prime delivers consistent liquidity and support to clients worldwide. Our offices in key financial centers ensure we're always available when you need us.
          </p>
        </div>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 51.5074, lng: -0.1278, label: "London" },
            end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
          },
          {
            start: { lat: 51.5074, lng: -0.1278, label: "London" },
            end: { lat: 35.1264, lng: 33.4299, label: "Cyprus" },
          },
          {
            start: { lat: 51.5074, lng: -0.1278, label: "London" },
            end: { lat: 18.4207, lng: -64.6399, label: "British Virgin Islands" },
          },
          {
            start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
            end: { lat: 22.3193, lng: 114.1694, label: "Hong Kong" },
          },
          {
            start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
            end: { lat: -20.3484, lng: 57.5522, label: "Mauritius" },
          },
          {
            start: { lat: 35.1264, lng: 33.4299, label: "Cyprus" },
            end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
          },
        ]}
      />
    </section>
  );
}
