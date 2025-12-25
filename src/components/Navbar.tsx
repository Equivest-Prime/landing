"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Regulations", href: "#regulations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative w-40 h-20">
            <Image src="/assets/images/logo.png" alt="Kresna" fill className="object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-[15px] font-medium text-gray-600 cursor-pointer hover:text-gray-900 transition-colors duration-200"
              >
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="px-5 py-2.5 bg-[var(--foreground)] text-white text-sm font-medium rounded-full hover:bg-[#1e293b] transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/10 hover:-translate-y-0.5"
            >
              <Link href="#trial">Explore Solutions</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-[var(--foreground)] hover:text-[var(--primary)]"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-white/95 backdrop-blur-lg border-b border-[var(--border)]">
              <div className="px-2 py-4 space-y-1">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-[15px] font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="pt-4 pb-2">
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full px-5 py-3 bg-[var(--foreground)] text-white text-sm font-medium rounded-full hover:bg-[#1e293b] transition-colors"
                    >
                      <Link href="#trial">Start Free Trial</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
