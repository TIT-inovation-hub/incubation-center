"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button"; // shadcn button
import { Card } from "@/components/ui/card"; // shadcn card

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gallery = [
    { src: "/amar.png", category: "Coordinators", title: "Amar Nayak" },
    { src: "/rachana.png", category: "Coordinators", title: "Rachna Kamble" },
    { src: "/ram.png", category: "Developers", title: "Ram Sahu" },
    { src: "/event1.png", category: "Event", title: "Hackathon 2025" },
    { src: "/event2.png", category: "Event", title: "Community Meetup" },
    { src: "/event3.png", category: "Event", title: "Tech Workshop" },
  ];

  return (
    <section className="py-24 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                onClick={() => setSelectedImage(item.src)}
                className="cursor-pointer bg-black border border-gray-800 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-blue-400 text-sm">{item.category}</p>
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
              <Image
                src={selectedImage}
                alt="Selected"
                width={1000}
                height={600}
                className="w-full h-auto rounded-2xl border border-blue-400 shadow-lg shadow-blue-500/30"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-blue-400"
              >
                <X className="w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
