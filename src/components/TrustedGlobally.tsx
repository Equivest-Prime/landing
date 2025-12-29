import Image from "next/image";
import Link from "next/link";
import Header from "./common/Header";

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

export default function TrustedGlobally() {
  return (
    <section id="trusted-globally" className="py-20 bg-background px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-4 lg:h-[600px]">
          {/* Left Side - Text Card */}
          <div className="w-full lg:w-1/3 bg-muted rounded-3xl p-8 flex flex-col justify-between">
            <Header subtitle={"Trusted Globally"} title={"Building partnerships based on reliability, technology and excellence"} />

            {/* Bottom Content */}
            <div className="mt-8">
              {/* Description */}
              <p className="text-muted-foreground text-base lg:text-base leading-relaxed mb-4">
                Equivest Prime is trusted by a growing network of brokers, financial institutions, and asset managers who rely on us for consistent, high-quality liquidity solutions. Our global reach reflects the confidence placed in our services by market participants across the financial landscape.
              </p>

              {/* Link */}
              <Link
                href="#about"
                className="inline-flex items-center gap-2 font-medium text-base transition-colors"
              >
                Become a Partner
                <ArrowRightIcon />
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative rounded-3xl overflow-hidden w-full lg:w-2/3 aspect-[4/3] lg:aspect-auto lg:h-full flex-shrink-0">
            <Image
              src="/assets/images/partner.jpg"
              alt="Professional woman in office setting holding documents"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
