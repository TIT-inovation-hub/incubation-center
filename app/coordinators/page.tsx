"use client";

import React, { useState } from "react";
import { Linkedin, Mail, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

export default function HallOfFame() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const team = [
    {
      name: "Aman Mishra",
      role: "ROLE",
      expertise: [
        "Event Management",
        "Community Building",
        "Technical Support",
      ],
      contact: "8602968862",
      email: "aman2005mishra@gmail.com",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHRuQHlYd0YyQ/profile-displayphoto-shrink_800_800/B4DZZJVbhJH4Ac-/0/1744987078803?e=1760572800&v=beta&t=XYRfbsI1INugUzSUcHSOXqe5CqRFkkAPlK4PGtpB9ok",
      socials: {
        github: "https://github.com/shreyashristi25",
        linkedin: "https://www.linkedin.com/in/aman-mishra-116b6328",
        instagram: "https://www.instagram.com/shristi_shreya002",
      },
    },
    {
      name: "Kushagra Dwivedi",
      role: "ROLE",
      expertise: [
        "Event Management",
        "Community Building",
        "Technical Support",
      ],
      contact: "9984753791",
      email: "kushdwivedikd@gmail.com",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQG5-iwtXiZvTg/profile-displayphoto-shrink_800_800/B4EZRxNdDQHgAc-/0/1737066140641?e=1760572800&v=beta&t=iRQ78wsSzkj1rTSglODL2w1_oMVAw8bkjQRqVCsnxwg",
      socials: {
        github: "https://github.com/shreyashristi25",
        linkedin: "https://www.linkedin.com/in/kushagra-dwivedi-0342062b8",
        instagram: "https://www.instagram.com/shristi_shreya002",
      },
    },
    {
      name: "Prakhar Shrivastav",
      role: "ROLE",
      expertise: [
        "Event Management",
        "Community Building",
        "Technical Support",
      ],
      contact: "7000673152",
      email: "prakhar.aka.nb@gmail.com",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHslmGH_WiX6w/profile-displayphoto-shrink_800_800/B4DZPBifRWHQAc-/0/1734118865362?e=1760572800&v=beta&t=w6LvIlinB-LRcUPfQlRSdmfaBW3-Ae3B5K0NFslgSu0",
      socials: {
        github: "https://github.com/shreyashristi25",
        linkedin: "https://www.linkedin.com/in/prakhar-shrivastav-a98bb8337",
        instagram: "https://www.instagram.com/shristi_shreya002",
      },
    },
  ];

  const categories = [{ id: "all", label: "All Members" }];

  const filteredTeam = team.filter((member) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "volunteers" && member.role === "Volunteers");

    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.expertise.some((exp) =>
        exp.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Team
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Meet the dedicated individuals who make our community thrive
          </motion.p>
        </div>

        {/* Search + Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? "bg-white text-black font-semibold border border-blue-400"
                      : "bg-black border border-gray-700 text-gray-300 hover:border-blue-400 hover:text-blue-400"
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl overflow-hidden bg-black border border-gray-800 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <div className="relative p-6 pb-4">
                <div className="flex items-start gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover border border-gray-700"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-blue-400">{member.role}</p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-4">
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400 mr-2" />
                    <span>{member.email}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-black flex items-center justify-center space-x-6 border-t border-gray-800">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
