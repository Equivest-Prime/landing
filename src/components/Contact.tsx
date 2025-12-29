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
    <section id="contact" className="py-20 lg:py-28 bg-background px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Main Card Container */}
        <div className="rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row gap-8 p-4 lg:p-8" style={{
          backgroundImage: "url('/assets/images/bg3.png')",
          backgroundPosition: 'right center',
        }}>
          {/* Left Side - Blue Gradient */}
          <div
            className="relative lg:w-1/2 flex flex-col justify-between min-h-[400px] lg:min-h-[580px] bg-cover bg-center bg-no-repeat">
            {/* Content */}
            <div className="relative z-10">
              {/* Label */}
              <span
                className="text-white/80 text-base mb-4 block"
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontStyle: "italic",
                }}
              >
                Contact Us
              </span>

              {/* Heading */}
              <h2 className="text-3xl lg:text-5xl tracking-tighter font-semibold text-white leading-tighter mb-6">
                We&apos;re just one message away.
              </h2>

              {/* Description */}
              <p className="text-white/70 text-base lg:text-base leading-relaxed max-w-md">
                Have questions about our liquidity solutions? Our team is ready to assist you.
              </p>
            </div>

            {/* Contact Information */}
            <div className="relative z-10 mt-8 lg:mt-0 space-y-6">
              <h3 className="text-xl font-medium text-white mb-4 tracking-tighter">Contact Information</h3>

              {/* Email */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-white font-medium text-base mb-1">Email</p>
                  <a href="mailto:info@equivestprime.com" className="text-white/70 text-base block hover:text-white transition-colors">info@equivestprime.com</a>
                  <a href="mailto:Sales@equivestprime.com" className="text-white/70 text-base block hover:text-white transition-colors">Sales@equivestprime.com</a>
                </div>
              </div>

              {/* Headquarters */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white font-medium text-base mb-1">Headquarters</p>
                  <p className="text-white/70 text-base">Silicon Avenue, 40 Cybercity</p>
                  <p className="text-white/70 text-base">The Cyberati Lounge, Ground Floor</p>
                  <p className="text-white/70 text-base">The Catalyst 72201 Ebène</p>
                  <p className="text-white/70 text-base">MAURITIUS</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-white font-medium text-base mb-1">Hours</p>
                  <p className="text-white/70 text-base">24/7 Support Available</p>
                  <p className="text-white/70 text-base">Office Hours: Monday-Friday, 9am-6pm (Local Time)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 bg-white p-4 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name + Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-base text-muted-foreground mb-2"
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
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-base text-muted-foreground mb-2"
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
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-base text-muted-foreground mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base text-muted-foreground mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-base text-muted-foreground mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-y min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-xl bg-foreground text-background font-medium text-base hover:opacity-90 transition-opacity"
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
