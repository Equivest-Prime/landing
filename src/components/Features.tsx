// Kresna X Icon
const KresnaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

// Checkmark icon
const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Arrow up icon
const ArrowUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

// Smart Workflow Automation Card Content
function WorkflowAutomationVisual() {
  return (
    <div className="relative mt-6 h-64 lg:h-72">
      {/* 3D Kresna Icon */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
            boxShadow:
              "0 10px 25px -5px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <KresnaIcon className="w-7 h-7" />
        </div>
      </div>

      {/* Connection Lines */}
      <svg
        className="absolute left-14 top-0 w-32 h-full"
        viewBox="0 0 100 200"
        fill="none"
      >
        <path
          d="M 0 100 L 30 100 L 30 30 L 100 30"
          stroke="#e5e7eb"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 0 100 L 100 100"
          stroke="#e5e7eb"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 0 100 L 30 100 L 30 170 L 100 170"
          stroke="#e5e7eb"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Task Cards */}
      <div className="absolute left-36 lg:left-44 top-0 right-0 space-y-3">
        {/* Follow up bubble */}
        <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-sm border border-border">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <CheckIcon className="w-3 h-3 text-blue-600" />
          </div>
          <span className="text-xs">
            Follow up with <span className="font-medium">Radit J.</span>
            <br />
            and <span className="font-medium">100+ others</span>?
          </span>
        </div>

        {/* Task List Card */}
        <div className="bg-white rounded-xl shadow-sm border border-border p-3 max-w-[200px]">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">Send Follow up Email</span>
              <span className="text-[10px] text-muted-foreground">10:00 AM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">LinkedIn connect</span>
              <span className="text-[10px] text-muted-foreground">01:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">Scheduled demo</span>
              <span className="text-[10px] text-muted-foreground">
                03:30 PM - 04:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Monthly Recap */}
      <div className="absolute left-36 lg:left-44 bottom-0">
        <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-sm border border-border">
          <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center">
            <CheckIcon className="w-3 h-3 text-green-600" />
          </div>
          <span className="text-xs">
            Generate <span className="font-medium">Monthly Recap</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// Revenue Forecasting Card Content
function RevenueForecastingVisual() {
  return (
    <div className="mt-6 bg-white rounded-2xl border border-border p-4 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
          }}
        >
          <KresnaIcon className="w-4 h-4" />
        </div>
        <span className="font-semibold text-sm">Kresna</span>
      </div>

      {/* Forecast */}
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">Next quarter forecast</p>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold">$2.8M</span>
          <span className="text-green-500">
            <ArrowUpIcon />
          </span>
        </div>
        <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
          <ArrowUpIcon />
          <span>High Confidence</span>
        </div>
      </div>
    </div>
  );
}

// Deal Intelligence Card Content
function DealIntelligenceVisual() {
  const bars = [40, 65, 45, 80, 55, 70];

  return (
    <div className="mt-6 bg-white rounded-2xl border border-border p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium">Deals Dashboard</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end gap-2 h-24 mb-3">
        {bars.map((height, i) => (
          <div
            key={i}
            className="flex-1 bg-blue-500 rounded-t"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      {/* Target */}
      <div className="text-xs text-muted-foreground">
        Target: <span className="text-blue-600 font-medium">$1M</span>
      </div>
    </div>
  );
}

// Auto Engage Card Content
function AutoEngageVisual() {
  const members = [
    { name: "Kumala Sari", color: "bg-purple-100" },
    { name: "Mark Kumoro", color: "bg-blue-100" },
    { name: "Joe Kristanto", color: "bg-green-100" },
  ];

  return (
    <div className="mt-6 relative">
      {/* Avatar bubble - Kumala Sari */}
      <div className="absolute left-0 top-0">
        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-sm border border-border">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-600">
            KS
          </div>
          <span className="text-xs font-medium">Kumala Sari</span>
        </div>
      </div>

      {/* Members Card */}
      <div className="absolute right-0 top-0 bg-white rounded-2xl border border-border p-3 shadow-sm w-44">
        <p className="text-xs text-muted-foreground mb-2">Members</p>
        <div className="space-y-2">
          {members.map((member, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full ${member.color} flex items-center justify-center text-[10px] font-medium`}
              >
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <span className="text-xs">{member.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Avatar bubble - Karina Larasati */}
      <div className="absolute left-0 bottom-0">
        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-sm border border-border">
          <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs font-medium text-pink-600">
            KL
          </div>
          <span className="text-xs font-medium">Karina Larasati</span>
        </div>
      </div>

      {/* Spacer for layout */}
      <div className="h-40" />
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
          {/* Left - Heading */}
          <div>
            <span
              className="text-muted-foreground text-sm mb-4 block"
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
              }}
            >
              Meet Kresna
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Your AI Co-Pilot for
              <br />
              Revenue Operations.
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex items-end">
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
              Kresna automates every repetitive, low-impact task across your
              sales cycle — logging calls, generating proposals, routing
              approvals, and updating forecasts — powered by contextual AI that
              learns from your team&apos;s workflow.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {/* Card 1 - Smart Workflow Automation (Large) */}
          <div className="bg-muted rounded-3xl p-6 lg:p-8 md:row-span-1">
            <h3 className="text-lg lg:text-xl font-semibold">
              Smart Workflow Automation
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Let Kresna handle CRM updates, follow-ups, and reports.
            </p>
            <WorkflowAutomationVisual />
          </div>

          {/* Card 2 - Revenue Forecasting */}
          <div className="bg-muted rounded-3xl p-6 lg:p-8">
            <h3 className="text-lg lg:text-xl font-semibold">
              Revenue Forecasting
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Know your numbers before anyone else does.
            </p>
            <RevenueForecastingVisual />
          </div>

          {/* Card 3 - Deal Intelligence */}
          <div className="bg-muted rounded-3xl p-6 lg:p-8">
            <h3 className="text-lg lg:text-xl font-semibold">
              Deal Intelligence
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Spot which opportunities are heating up before the quarter ends.
            </p>
            <DealIntelligenceVisual />
          </div>

          {/* Card 4 - Auto Engage */}
          <div className="bg-muted rounded-3xl p-6 lg:p-8">
            <h3 className="text-lg lg:text-xl font-semibold">Auto Engage</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Turn conversation into conversion instantly with AI.
            </p>
            <AutoEngageVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
