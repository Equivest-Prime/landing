import Header from "./common/Header";
import { Check } from "lucide-react";

// Kresna X Icon
const KresnaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 lg:w-12 lg:h-12">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const benefits = [
  "Client fund segregation",
  "Anti-money laundering (AML) procedures",
  "Know Your Customer (KYC) protocols",
  "Risk management frameworks",
  "Regular compliance audits",
  "Transparent reporting mechanisms",
];

export default function Regulations() {
  return (
    <section id="regulations" className="py-20 lg:py-28 bg-background overflow-hidden px-4">
      <div className="container  mx-auto max-w-7xl">
        {/* Top Section - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-20">
          {/* Left - Heading */}
          <Header subtitle="Fully Regulated" title="Operating under the highest standards of regulatory compliance" />

          {/* Right - Description */}
          <div className="flex items-end">
            <p className="text-muted-foreground text-base lg:text-base leading-relaxed">
              Our commitment to excellence guarantees that every process is meticulously monitored, fostering trust and reliability in our operations.
            </p>
          </div>
        </div>

        {/* Visual Diagram Section */}
        <div className="">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-start">
            <div
              className="flex flex-col p-6 lg:p-8 rounded-2xl bg-background border border-border z-10"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
              }}
            >
              {/* Heading */}
              <span className="text-xl lg:text-2xl font-semibold tracking-tighter mb-6">
                Overview
              </span>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed">
                Equivest Prime is the flagship liquidity solution of Equivest (Mauritius) Limited, a regulated financial services provider authorised and supervised by the Financial Services Commission (FSC) of Mauritius.
                <br />
                <br />
                Operating under Investment Dealer (Full Service Dealer, excluding underwriting) License No. GB24203378, Equivest Prime is fully licensed to provide investment dealer services to a global client base.
                <br />
                <br />
                This regulatory framework allows us to offer a broad spectrum of multi-asset liquidity solutions to brokers, asset managers, family offices, and institutional clients worldwide.
              </p>
            </div>
            <div
              className="flex flex-col p-6 lg:p-8 rounded-2xl border border-border z-10 h-full"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
                backgroundImage: "url('/assets/images/bg3.png')",
              }}
            >
              {/* Heading */}
              <h3 className="text-xl lg:text-2xl font-semibold tracking-tighter mb-16 text-white ">
                Compliance Standards
              </h3>

              {/* Benefits List */}
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 ">
                      <Check className="text-white" />
                    </span>
                    <span className="text-base text-white leading-relaxed">
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
