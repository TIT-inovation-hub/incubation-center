import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden">
                <Image
                  src="/logoincubation.png"
                  alt="Incubation logo"
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                  priority
                />
              </div>
              <span className="font-bold text-lg sm:text-xl">INCUBATION</span>
              <span className="font-bold text-[#EF6C00] text-lg sm:text-xl">
                TITE
              </span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Fostering innovation and entrepreneurship among students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#mentors"
                  className="hover:text-accent transition-colors"
                >
                  Mentors
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-accent transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#coordinators"
                  className="hover:text-accent transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@titexcellence.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 7000673152</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>TIT Excellence, B-block, 2nd floor, Bhopal</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>
            &copy; 2025 TIT Excellence Incubation Cell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
