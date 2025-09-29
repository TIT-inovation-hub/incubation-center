"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
    category: string;
    description: string;
  }>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const gallery = [
    {
      src: "/audience.jpeg",
      category: "Coordinators",
      title: "Amar Nayak",
      description: "Leading the coordination efforts with excellence.",
    },
    {
      src: "/certificate.jpeg",
      category: "Developers",
      title: "Ram Sahu",
      description: "Core developer contributing to our projects.",
    },
    {
      src: "/certificate2.jpeg",
      category: "Event",
      title: "Hackathon 2025",
      description: "A vibrant hackathon bringing ideas to life.",
    },
    {
      src: "/certificate3.jpeg",
      category: "Event",
      title: "Community Meetup",
      description: "Networking and learning together as a community.",
    },
    {
      src: "/certificate4.jpeg",
      category: "Event",
      title: "Tech Workshop",
      description: "Hands-on technical workshop for innovation.",
    },
    {
      src: "/dignitories.jpg",
      category: "Coordinators",
      title: "Amar Nayak",
      description: "Welcoming dignitaries with respect and gratitude.",
    },
    {
      src: "/dignitories2.jpeg",
      category: "Coordinators",
      title: "Rachna Kamble",
      description: "Playing a key role in event coordination.",
    },
    {
      src: "/dignitories3.jpeg",
      category: "Developers",
      title: "Ram Sahu",
      description: "Showcasing technical skills during the event.",
    },
    {
      src: "/dignitories4.jpeg",
      category: "Event",
      title: "Hackathon 2025",
      description: "Celebrating creativity and collaboration.",
    },
    {
      src: "/directorSpeech.jpeg",
      category: "Event",
      title: "Community Meetup",
      description: "Director addressing the community gathering.",
    },
    {
      src: "/lightninglamp.jpeg",
      category: "Event",
      title: "Tech Workshop",
      description: "Lamp lighting ceremony marking the beginning.",
    },
    {
      src: "/lightninglamp2.jpeg",
      category: "Developers",
      title: "Ram Sahu",
      description: "Actively participating in the inaugural ceremony.",
    },
    {
      src: "/lightninglamp3.jpeg",
      category: "Event",
      title: "Hackathon 2025",
      description: "Exciting moments from the hackathon opening.",
    },
    {
      src: "/nationalanthem.jpeg",
      category: "Event",
      title: "Community Meetup",
      description: "Honoring the nation with the anthem.",
    },
    {
      src: "/organisers.jpg",
      category: "Event",
      title: "Tech Workshop",
      description: "Behind-the-scenes efforts by organisers.",
    },
    {
      src: "/welcomeGuest.jpeg",
      category: "Event",
      title: "Tech Workshop",
      description: "Welcoming esteemed guests to the workshop.",
    },
  ];

  const categories = ["All", ...new Set(gallery.map((item) => item.category))];

  const filteredGallery = gallery.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  const handleDownload = (src: string, title: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = title.replace(/\s+/g, "_").toLowerCase();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Explore the moments, faces, and memories that define our community.
          </motion.p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <Input
            placeholder="Search by title or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 w-full md:w-1/2"
          />
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <Badge
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-pointer px-3 py-1 text-sm rounded-full transition-all ${
                  filter === cat
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                onClick={() => setSelectedImage(item)}
                className="cursor-pointer bg-black border border-gray-800 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all overflow-hidden rounded-2xl p-0"
              >
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent opening modal when clicking download
                      handleDownload(item.src, item.title);
                    }}
                    className="absolute bottom-3 right-3 bg-black/70 hover:bg-blue-500 text-white p-1 rounded transition"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-blue-400 text-sm mb-1">{item.category}</p>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full p-6"
            >
              {/* Close Button (always top-right, responsive) */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/70 text-black rounded p-2"
              >
                <X className="w-6 h-6" />
              </Button>

              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1000}
                height={600}
                className="max-h-[80vh] w-full sm:w-auto mx-auto rounded-2xl border border-blue-400 shadow-lg shadow-blue-500/30 object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
