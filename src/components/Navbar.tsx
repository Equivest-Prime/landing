"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#features" },
  { label: "Regulations", href: "#regulations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="relative w-40 h-10">
            <Image
              src="/assets/images/logo.png"
              alt="Equivest"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-full">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-[15px] font-medium text-black cursor-pointer transition-colors duration-200"
              >
                <span className="relative z-10 text-black">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="px-5 py-2.5 bg-[var(--foreground)] text-white text-base font-medium rounded-full hover:bg-[#1e293b] transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/10 hover:-translate-y-0.5"
            >
              <Link href="#solutions">Explore Solutions</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[var(--foreground)]"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed inset-x-0 top-0 z-50 p-4 md:hidden animate-in fade-in slide-in-from-top duration-200">
            {/* Header */}
            <div className="bg-gray-100 rounded-full px-6 py-4 flex items-center justify-between">
              <Link href="/" className="relative w-32 h-8" onClick={closeMenu}>
                <Image
                  src="/assets/images/logo.png"
                  alt="Equivest"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
              <button
                onClick={closeMenu}
                className="p-1 text-black"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Card */}
            <div className="bg-white rounded-3xl mt-4 py-8 px-6 shadow-xl animate-in fade-in slide-in-from-top duration-300">
              <nav className="flex flex-col items-center space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="py-3 text-lg font-medium text-gray-800 hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="mt-6 flex justify-center">
                <Button
                  asChild
                  className="py-3 h-auto bg-[var(--primary)] text-white text-base font-medium rounded-lg hover:bg-[var(--primary-hover)]"
                >
                  <Link href="#solutions" onClick={closeMenu}>
                    Explore Solutions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
