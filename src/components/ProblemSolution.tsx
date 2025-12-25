// Checkmark icon
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-500"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Kresna X Icon
const KresnaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 lg:w-12 lg:h-12">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const benefits = [
  "Calls, notes, and updates are logged automatically.",
  "Reports and dashboards sync themselves in real time.",
  "Deals move through stages with instant AI approvals.",
  "Forecasts stay accurate and always up to date.",
];

export default function ProblemSolution() {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Top Section - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-20">
          {/* Left - Heading */}
          <div>
            <span
              className="text-muted-foreground text-sm mb-4 block"
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
              }}
            >
              The Bottleneck in Revenue Teams
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Revenue teams are
              <br />
              drowning in manual work.
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex items-end">
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-md">
              Kresna fixes that by automating the manual parts of your process.
              Your workflows stay clean, connected, and effortless.
            </p>
          </div>
        </div>

        {/* Visual Diagram Section */}
        <div className="relative">
          {/* Connection Lines Container */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
            {/* 3D Kresna Icon */}
            <div className="relative flex-shrink-0 z-10">
              {/* Shadow/Glow */}
              <div
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{
                  background: "rgba(59, 130, 246, 0.3)",
                  transform: "translateY(8px) scale(0.9)",
                }}
              />
              {/* 3D Icon */}
              <div
                className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
                  transform: "perspective(500px) rotateX(5deg) rotateY(-10deg)",
                  boxShadow:
                    "0 25px 50px -12px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.1)",
                }}
              >
                <KresnaIcon />
              </div>
            </div>

            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden md:block flex-1 relative h-40 lg:h-48">
              {/* SVG Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 600 200"
                preserveAspectRatio="none"
                fill="none"
              >
                {/* Gradient Definition */}
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Main horizontal line */}
                <path
                  d="M 0 100 L 200 100 Q 220 100 220 80 L 220 40 Q 220 20 240 20 L 600 20"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Branch line 1 */}
                <path
                  d="M 150 100 Q 170 100 170 120 L 170 140 Q 170 160 190 160 L 600 160"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Middle line */}
                <path
                  d="M 100 100 L 600 100"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Connection dots */}
                <circle cx="100" cy="100" r="4" fill="#3b82f6" />
                <circle cx="150" cy="100" r="3" fill="#60a5fa" />
                <circle cx="200" cy="100" r="3" fill="#60a5fa" />
              </svg>
            </div>

            {/* Solution Card */}
            <div
              className="flex-shrink-0 w-full md:w-80 lg:w-96 p-6 lg:p-8 rounded-2xl bg-background border border-border z-10"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
              }}
            >
              {/* Label */}
              <span
                className="text-blue-500 text-sm mb-3 block"
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontStyle: "italic",
                }}
              >
                After Kresna
              </span>

              {/* Heading */}
              <h3 className="text-xl lg:text-2xl font-bold mb-6">
                Automated and effortless
              </h3>

              {/* Benefits List */}
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
