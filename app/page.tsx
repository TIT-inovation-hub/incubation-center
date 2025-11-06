"use client";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Mentors from "@/components/mentors";
import Coordinators from "@/components/coordinators";
import Events from "@/components/events";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />

      <About />
      <Mentors />
      <Coordinators />
      <Events />
      <Footer />
    </main>
  );
}
