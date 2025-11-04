"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(
    null
  );

  const events = [
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
    {
      id: 4,
      title: "Tech Innovation Summit",
      date: "April 5, 2024",
      category: "Summit",
      image: "/technology-innovation-summit-conference.jpg",
      description:
        "Annual summit featuring keynote speeches, panel discussions, and exhibitions showcasing cutting-edge technologies and innovative startups.",
      highlights: [
        "500+ Attendees",
        "Tech Exhibitions",
        "Panel Discussions",
        "Startup Showcase",
      ],
    },
    {
      id: 5,
      title: "Mentorship Program Launch",
      date: "January 20, 2024",
      category: "Program",
      image: "/mentorship-program-training-development.jpg",
      description:
        "Launch of our structured mentorship program pairing students with experienced mentors for personalized guidance and skill development.",
      highlights: [
        "1-on-1 Mentoring",
        "6-Month Program",
        "Skill Workshops",
        "Career Guidance",
      ],
    },
    {
      id: 6,
      title: "Hackathon 2024",
      date: "April 20-21, 2024",
      category: "Hackathon",
      image: "/hackathon-coding-competition-event.jpg",
      description:
        "24-hour hackathon where teams build innovative solutions to real-world problems. Collaborate, code, and create the next big thing.",
      highlights: [
        "24-Hour Event",
        "₹3 Lakhs Prize",
        "Free Food & Drinks",
        "Tech Mentors",
      ],
    },
  ];

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our exciting events and initiatives designed to foster
            innovation and entrepreneurship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="group cursor-pointer bg-background border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {event.date}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>
                <div className="mt-4 text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  View Details →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-border bg-background">
              <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <img
                src={selectedEvent.image || "/placeholder.svg"}
                alt={selectedEvent.title}
                className="w-full h-96 object-cover rounded-lg"
              />

              <div>
                <h3 className="text-lg font-semibold mb-2">Event Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold">{selectedEvent.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-semibold text-accent">
                      {selectedEvent.category}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {selectedEvent.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-lg hover:bg-accent/90 transition-colors">
                Register for Event
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
