import { ArrowRightIcon, Check } from "lucide-react";
import Header from "./common/Header";
import Image from "next/image";
import Link from "next/link";

// Arrow icon
import { ArrowBigDown } from "lucide-react";

const benefits = [
  "Proprietary aggregation technology",
  "Transparent pricing models",
  "Global market reach across multiple asset classes"
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background px-4">
      <div className="container  mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
          {/* Left - Heading */}
          <Header subtitle={"About Equivest"} title={"regulated, multi-asset liquidity provider committed to delivering exceptional trading infrastructure"} />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {/* Card 1 - Smart Workflow Automation (Large) */}
          <div className="bg-muted rounded-3xl p-6 lg:p-8 md:row-span-1">
            <p className="text-base text-muted-foreground mt-1">
              Equivest Prime was founded on a simple principle - to provide brokers, asset managers, proprietary trading firms, and financial institutions with reliable access to deep, consistent liquidity across global markets.
              <br />
              <br />
              We specialise in customised liquidity streams that are engineered for performance, scalability, and compliance. Whether you're a startup broker seeking support to launch or an established institution optimising execution flow, Equivest equips you with the technology and support needed to thrive in today's fast-paced trading environment.
            </p>
            <ul className="space-y-4 mt-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 ">
                    <Check className="text-green-500" />
                  </span>
                  <span className="text-base font-medium text-foreground leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 - Revenue Forecasting */}
          <div className="border border-gray-200 shadow-2xs rounded-3xl p-6 lg:p-8 flex flex-col justify-between"
            style={{
              boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
              backgroundImage: "url('/assets/images/bg3.png')",
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
            <h3 className="text-xl lg:text-4xl font-semibold tracking-tighter text-white">
              Our Vision
            </h3>
            <p className="text-xl font-normal text-white mt-1 leading-tight tracking-tight">
              To be the leading global liquidity provider, setting the standard for transparency, technology, and service.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-4 mt-4">
          {/* Right Side - Image */}
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px] w-full lg:w-2/3">
            <Image
              src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional woman in office setting holding documents"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Left Side - Text Card */}
          <div className="w-full lg:w-1/3 bg-muted rounded-3xl p-8 flex flex-col justify-between ">
            <Header subtitle={""} title={"Building Relationships"} />

            {/* Bottom Content */}
            <div className="mt-8">
              {/* Description */}
              <p className="text-muted-foreground text-base lg:text-base leading-relaxed mb-4">
                At Equivest, we don't just deliver liquidity - we build long-term relationships with our clients. Our approach is rooted in understanding your unique business model, your challenges, and your growth ambitions.
                <br />
                <br />
                Whether you're an emerging broker navigating launch, an established trading firm optimising execution, or a family office entering new markets, our team is here to support you with precision and care.
              </p>

              {/* Link */}
              <Link
                href="#contact"
                className="inline-flex items-center tracking-tighter gap-2 font-medium text-base transition-colors"
              >
                Contact Our Team
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
