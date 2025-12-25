"use client";

const stats = [
  {
    value: "8.9M+",
    title: "User reach rate",
    description: "Empowering brands with, high-performing designs",
  },
  {
    value: "65+",
    title: "Projects completed",
    description: "Empowering brands with, high-performing designs",
  },
  {
    value: "78%",
    title: "Client retention rate",
    description: "Empowering brands with, high-performing designs",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-[var(--background)] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[var(--foreground)] uppercase mb-6 opacity-0 animate-fade-in-up">
            Numbers Won&apos;t Lie
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed opacity-0 animate-fade-in-up animation-delay-100">
            Delivering record-breaking results backed by powerful metrics
            and real impact—because great design drives real growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`opacity-0 animate-fade-in-up animation-delay-${(index + 2) * 100}`}
            >
              <div className="space-y-4">
                <span className="block text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--foreground)]">
                  {stat.value}
                </span>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {stat.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
