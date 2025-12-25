import Image from "next/image";
import Link from "next/link";

// Arrow icon
const ArrowRightIcon = () => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function About() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Text Card */}
          <div className="bg-muted rounded-3xl p-8 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
            {/* Top Content */}
            <div>
              {/* Label */}
              <span
                className="text-muted-foreground text-sm mb-4 block"
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontStyle: "italic",
                }}
              >
                About Kresna
              </span>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                Built by
                <br />
                Practitioners,
                <br />
                not Theorist
              </h2>
            </div>

            {/* Bottom Content */}
            <div className="mt-8 lg:mt-0">
              {/* Description */}
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-4 max-w-sm">
                Founded by experts who&apos;ve led high-growth teams — now
                building the tools they once wished existed.
              </p>

              {/* Link */}
              <Link
                href="#about"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                Get to know Kresna
                <ArrowRightIcon />
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px]">
            <Image
              src="/assets/images/about-image.jpg"
              alt="Professional woman in office setting holding documents"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
