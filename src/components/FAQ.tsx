"use client";

import { useState } from "react";
import { FileTextIcon, Handshake, Plus, X, } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What regulatory licenses does Equivest hold?",
    answer:
      "Equivest (Mauritius) Limited holds an Investment Dealer (Full Service Dealer, excluding underwriting) License No. GB24203378, issued by the Financial Services Commission (FSC) of Mauritius.",
  },
  {
    question: "How are client funds protected?",
    answer:
      "Client funds are held in segregated accounts at tier-1 banks, separate from company operational funds. This ensures that client money is protected and not used for any other purpose.",
  },
  {
    question: "What AML/KYC procedures are in place?",
    answer:
      "We implement comprehensive AML/KYC procedures in compliance with international standards. This includes identity verification, source of funds verification, ongoing monitoring, and regular risk assessments.",
  },
  {
    question: "How does Equivest ensure operational compliance?",
    answer:
      "We maintain a robust compliance framework with regular internal audits, staff training, and external reviews. Our dedicated compliance team ensures adherence to all regulatory requirements and industry best practices.",
  }
];

const terms = [
  {
    title: "Terms & Conditions",
    description: "View PDF",
    icon: Handshake,
    link: "https://equivestprime.com/document/Terms%20&%20Conditions%20Equivest.pdf",
  },
  {
    title: "Privacy Policy",
    description: "View PDF",
    icon: FileTextIcon,
    link: "https://equivestprime.com/document/Privacy%20Policy%20Equivest.pdf",
  },
]

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="rounded-2xl bg-muted overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-muted/80"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-xl tracking-tighter text-foreground pr-4">{item.question}</span>
        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-background flex items-center justify-center text-muted-foreground">
          {isOpen ? <X /> : <Plus />}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-base text-muted-foreground leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  // Initially open items 2 and 4 (0-indexed) to match the reference image
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([2, 4]));

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-background px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Header */}
          <div className="flex flex-col justify-between">
            <div>
              <span
                className="text-muted-foreground text-base mb-3 block"
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontStyle: "italic",
                }}
              >
                FAQ
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                Frequently
                <br />
                Asked Questions
              </h2>
            </div>
            <div className="flex flex-row w-full gap-4 mt-8">
              {/* Chat to Sales Card */}
              {terms.map((term, index) => (
                <a
                  key={index}
                  href={term.link}
                  target="_blank"
                  className="flex flex-col items-start p-4 rounded-2xl border border-gray-200 transition-colors hover:border hover:border-accent hover:shadow-lg w-full"
                >
                  <div className="bg-accent/10 rounded-lg mb-4">
                    <term.icon className="size-5 text-gray-500" />
                  </div>
                  <div>
                    <h2 className="font-medium text-foreground">
                      {term.title}
                    </h2>
                    <p className="text-base text-muted-foreground">
                      {term.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-3">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openItems.has(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
