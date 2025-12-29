"use client";

import Header from "./common/Header";
import CountUp from "./ui/countUp";

const stats = [
  {
    value: 150,
    subText: "+",
    title: "Trading Instruments",
  },
  {
    value: "6",
    title: "Global Offices",
  },
  {
    value: "99.9",
    subText: "%",
    title: "Uptime Reliability",
  },

];

export default function Stats() {
  return (
    <section id="stats" className="relative bg-[var(--background)] py-20 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header subtitle={"Our Stats"} title={"Numbers will not lie"} />
        <br />

        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-lg text-gray-600 leading-relaxed opacity-0 animate-fade-in-up animation-delay-100">
            Equivest Prime delivers exceptional trading solutions with industry-leading performance metrics and proven results—empowering traders worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`opacity-0 animate-fade-in-up animation-delay-${(index + 2) * 100} p-6 lg:p-8 rounded-2xl bg-background border border-border z-10 h-full`}
              style={{
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
              }}
            >
              <div className="space-y-4">
                <span className="block text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--foreground)]">
                  <CountUp
                    from={0}
                    to={Number(stat.value)}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  {stat.subText || ""}
                </span>
                <span className="text-xl font-medium tracking-tighter text-muted-foreground">
                  {stat.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
