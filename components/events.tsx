"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface EventItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const events: EventItem[] = [
    {
      id: 1,
      title: "Startup Pitch Competition",
      date: "March 15, 2024",
      category: "Competition",
      image: "/startup-pitch-competition-event.jpg",
      description:
        "A thrilling competition where student entrepreneurs pitch their innovative ideas to a panel of investors and industry experts. Winners receive funding and mentorship opportunities.",
      highlights: [
        "Prize Pool: ₹5 Lakhs",
        "50+ Participants",
        "Industry Judges",
        "Networking Session",
      ],
    },
    {
      id: 2,
      title: "Entrepreneurship Workshop",
      date: "February 28, 2024",
      category: "Workshop",
      image: "/entrepreneurship-workshop-training.jpg",
      description:
        "Comprehensive workshop covering business fundamentals, market research, and startup strategies. Learn from successful entrepreneurs and industry veterans.",
      highlights: [
        "Expert Speakers",
        "200+ Attendees",
        "Hands-on Sessions",
        "Certificates",
      ],
    },
    {
      id: 3,
      title: "Investor Meet & Greet",
      date: "March 22, 2024",
      category: "Networking",
      image: "/investor-networking-event-meeting.jpg",
      description:
        "Exclusive networking event connecting student entrepreneurs with angel investors and venture capitalists. Showcase your ideas and secure potential funding.",
      highlights: [
        "20+ Investors",
        "One-on-One Meetings",
        "Refreshments",
        "Follow-up Support",
      ],
    },
  ];

  return (
    <section
      id="events"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8F2] to-white dark:from-[#0B0B0B] dark:to-[#050505] transition-colors duration-500"
    >
      {/* === BACKGROUND ELEMENTS === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-cyan-400/10 rounded-full blur-[140px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 to-orange-400/10 rounded-full blur-[160px] animate-blob delay-700"></div>
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Our Events
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore exciting initiatives and experiences that foster innovation
            and entrepreneurship.
          </p>
        </div>

        {/* === EVENT GRID === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="group relative cursor-pointer bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-gray-200/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#EF6C00] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {event.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-sm font-medium text-[#EF6C00] dark:text-[#FF9800] mb-3">
                  {event.date}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === EVENT MODAL === */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#111] border border-gray-200/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200/10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedEvent.title}
              </h2>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-80 object-cover rounded-lg"
              />

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedEvent.description}
              </p>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Highlights
                </h3>
                <ul className="grid grid-cols-2 gap-3">
                  {selectedEvent.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-[#EF6C00] rounded-full" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#EF6C00] text-white font-semibold py-3 rounded-lg hover:bg-[#FF9800]/90 transition">
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === ANIMATIONS === */}
      <style jsx global>{`
        @keyframes blob {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 18s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
