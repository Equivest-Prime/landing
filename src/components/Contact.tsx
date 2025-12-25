"use client";

import { useState } from "react";

// Arrow icon for external link
const ArrowUpRightIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        {/* Main Card Container */}
        <div className="rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          {/* Left Side - Blue Gradient */}
          <div
            className="relative lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[580px]"
            style={{
              background:
                "linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #3b82f6 100%)",
            }}
          >
            {/* Glow Effect */}
            <div
              className="absolute top-1/4 left-1/2 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, transparent 70%)",
                transform: "translate(-50%, -50%)",
                filter: "blur(40px)",
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Label */}
              <span
                className="text-white/80 text-sm mb-4 block"
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontStyle: "italic",
                }}
              >
                Contact Us
              </span>

              {/* Heading */}
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
                We&apos;re just one
                <br />
                message away.
              </h2>

              {/* Description */}
              <p className="text-white/70 text-sm lg:text-base leading-relaxed max-w-md">
                Have questions or ideas? Reach out and we&apos;ll guide you
                through how Kresna can fit into your sales workflow.
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 mt-8 lg:mt-0">
              <span
                className="text-white/80 text-sm block mb-2"
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontStyle: "italic",
                }}
              >
                Prefer a call?
              </span>
              <p className="text-white text-sm">
                Book 30-mins intro call with us?{" "}
                <a
                  href="#"
                  className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-white/80 transition-colors"
                >
                  Book a Call
                  <ArrowUpRightIcon />
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 bg-white p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name + Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write message..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-y min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-xl bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
