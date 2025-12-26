import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import Navbar from "@/components/Navbar";
import FloatingBadge from "@/components/FloatingBadge";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Equivest Prime - Institutional-Grade Access to Global Financial Markets",
  description: "Automate CRM updates, follow-ups, and deal tracking so your team can focus on closing deals and growing revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <FloatingBadge />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
