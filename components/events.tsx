"use client";

import { useState } from "react";
import { X, Info } from "lucide-react";

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
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] to-white dark:from-[#0E0E0E] dark:to-[#080808] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* === Heading === */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          Our Events
        </h2>
        <p className="text-base sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed">
          Explore our lineup of inspiring competitions, workshops, and
          networking experiences — designed to spark innovation and empower
          entrepreneurs.
        </p>

        {/* === Event Grid === */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="group relative w-full max-w-sm mx-auto cursor-pointer rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-white/5 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* === Image === */}
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-2xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-[#EF6C00] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {event.category}
                </div>

                {/* === Minimal Hover Overlay === */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center pb-4 transition-all duration-300">
                  <div className="flex items-center gap-2 text-white text-sm font-medium tracking-wide">
                    <Info size={16} />
                    <span>View Details</span>
                  </div>
                </div>
              </div>

              {/* === Info === */}
              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#EF6C00] dark:text-[#FF9800] mb-3">
                  {event.date}
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 line-clamp-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Modal === */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/90 dark:bg-[#111]/90 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all">
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
                className="w-full h-80 object-cover rounded-xl"
              />

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                {selectedEvent.description}
              </p>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Highlights
                </h3>
                <ul className="grid grid-cols-2 gap-3 text-sm sm:text-base">
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

              <button className="w-full bg-[#EF6C00] text-white font-semibold py-3 rounded-lg hover:bg-[#FF9800]/90 transition text-sm sm:text-base">
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
