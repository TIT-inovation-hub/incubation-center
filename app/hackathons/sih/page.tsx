"use client";

import { Data, getTeams } from "@/actions/actions";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function SIH() {
  const [search, setSearch] = useState("");
  const [teams, setTeams] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    async function loadFunction() {
      setLoading(true);
      const teams = await getTeams();
      setTeams(teams);
      setLoading(false);
    }
    loadFunction();
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-09-25T00:00:00+05:30"); // IST

    function updateTimer() {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Registration Closed");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }

    updateTimer(); // initial call
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  // Filter teams based on search query
  const filteredTeams = teams.filter(
    (team) =>
      team.teamName.toLowerCase().includes(search.toLowerCase()) ||
      team.leader.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Countdown Timer */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Registration Ends In:
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-teal-400">
            {timeLeft}
          </p>
        </div>

        {/* Registration Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 sm:mb-16">
          <div className="bg-gray-900 p-6 sm:p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Register as a Team
            </h2>
            <p className="text-gray-400 mb-6">
              Have your dream team ready? Register now to compete together.
              Click here{" "}
              <span
                className="text-blue-400 underline"
                onClick={() => {
                  document.getElementById("teams-section")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                view registered teams
              </span>
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={"https://forms.gle/MKWnK22EQMS1eoah7"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Register Team
              </a>
            </div>
          </div>
          <div className="bg-gray-900 p-6 sm:p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Register as Solo
            </h2>
            <p className="text-gray-400 mb-6">
              Don&apos;t have a team yet? No worries! Register as a solo
              participant and find your team.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={"https://forms.gle/v23gE8qHLk6FHSFs7"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center"
              >
                Register Solo
              </a>
            </div>
          </div>
        </div>

        {/* Teams Section */}
        <div id="teams-section" className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Registered Teams
          </h2>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Teams Grid */}
          {loading ? (
            <p className="text-center text-gray-400 text-lg sm:text-xl font-semibold">
              Loading teams...
            </p>
          ) : filteredTeams.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredTeams.map((team, index) => {
                const isOpen = expanded === index;
                return (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 relative rounded-lg border border-gray-700"
                  >
                    {/* Header Row */}
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold">
                          {team.teamName.toUpperCase()}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                          Leader:{" "}
                          {team.leader.name
                            .toLowerCase()
                            .split(" ")
                            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                            .join(" ")}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-2xl sm:text-3xl font-bold text-blue-400">
                          # {index + 1}
                        </p>
                        <button
                          onClick={() => setExpanded(isOpen ? null : index)}
                          className="p-2 rounded-full hover:bg-gray-700"
                        >
                          {isOpen ? (
                            <ChevronUp className="w-6 h-6" />
                          ) : (
                            <ChevronDown className="w-6 h-6" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Status Tag */}
                    {team.status && (
                      <span
                        className={`absolute bottom-0 right-0 inline-block mt-2 px-3 py-1 text-xs font-medium rounded-br-lg
                        ${
                          team.status === "presenting"
                            ? "bg-red-600/20 text-red-400 border border-red-600/40"
                            : team.status === "next"
                            ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600/40"
                            : "bg-gray-600/20 text-gray-400 border border-gray-600/40"
                        }`}
                      >
                        {team.status.charAt(0).toUpperCase() +
                          team.status.slice(1)}
                      </span>
                    )}

                    {/* Dropdown Content */}
                    {isOpen && (
                      <div className="mt-4 space-y-3 text-sm text-gray-300">
                        <div>
                          <p className="font-semibold text-white">
                            Problem Statement:
                          </p>
                          <p>Theme: {team.problemStatement.theme}</p>
                          <p>ID: {team.problemStatement.id}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">
                            Leader Info:
                          </p>
                          <p>Enrollment: {team.leader.enrollement}</p>
                          <p>
                            Phone:{" "}
                            <a
                              href={`tel:${team.leader.phone}`}
                              className="text-blue-400 hover:underline"
                            >
                              {team.leader.phone}
                            </a>
                          </p>
                        </div>

                        <div>
                          <p className="font-semibold text-white">Members:</p>
                          {team.members.length > 0 ? (
                            <ul className="list-disc pl-5">
                              {team.members.map((m, i) => (
                                <li key={i}>{m.enrollement}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>No members</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-400">
              No teams found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
