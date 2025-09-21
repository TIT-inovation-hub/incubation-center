"use client";

import React from "react";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black text-white pt-20"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Build the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Future
            </span>
          </h1>

          {/* 👇 Desktop Text */}
          <p className="hidden sm:block text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your innovative ideas into successful startups with expert
            mentorship, funding support, and a thriving entrepreneurial
            community.
          </p>

          {/* 👇 Mobile Text */}
          <p className="block sm:hidden text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your innovative ideas into successful startups.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* External link → keep <a> */}
            <Link
              href="/hackathons/sih"
              className="bg-gradient-to-r bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              Register for SIH
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdNiv7sd0J4CHGh8jsIMmuBNNWkLS4k2rpXVMgjdEjGePYEtQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-900 transition-all duration-300 flex items-center justify-center group"
            >
              Apply for Incubation
              <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">10+</p>
              <p className="text-sm text-gray-400">Students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">4+</p>
              <p className="text-sm text-gray-400">Startups</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">10+</p>
              <p className="text-sm text-gray-400">Mentors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
