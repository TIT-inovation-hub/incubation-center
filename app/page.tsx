"use client";

import HeroSection from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/Navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export default function HeroPage() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <Footer />
    </>
  );
}
