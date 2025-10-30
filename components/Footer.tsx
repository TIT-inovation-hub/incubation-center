import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">TIT</span>
              </div>
              <span className="font-bold">TIT Excellence</span>
            </div>
            <p className="text-sm opacity-80">
              Fostering innovation and entrepreneurship among students.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
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

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@titexcellence.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 (0) 123-456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>TIT Campus, City</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>
            &copy; 2025 TIT Excellence Incubation Cell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
