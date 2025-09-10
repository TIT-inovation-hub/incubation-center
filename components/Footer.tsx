"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Startups", href: "#startups" },
  { label: "Mentors", href: "#mentors" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Innovation & Incubation Cell
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering young innovators and startups with mentorship,
              resources, and a thriving entrepreneurial ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(link.href)}
                  className="justify-start p-0 h-auto text-gray-400 hover:text-white"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact Us</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                Incubation Cell, Your Institute/Organization
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                contact@incubationcell.org
              </p>
            </div>

            <Button
              onClick={() => scrollToSection("#contact")}
              className="w-full md:w-auto bg-gray-800 hover:bg-gray-700 text-white"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Innovation & Incubation Cell. All
            rights reserved.
          </p>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-900 border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white hover:border-gray-500 hover:scale-110 transition-transform shadow-sm"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
