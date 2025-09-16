"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Add `image` property to hackathon objects
const hackathons = [
  {
    name: "Smart India Hackathon",
    description:
      "The SIH Internal Round Selection, organized by the Incubation Cell, TIT-E.",
    teamLink: "https://forms.gle/teguh4ZYFsWoKpG7A",
    soloLink: "https://forms.gle/v23gE8qHLk6FHSFs7",
    image: "/SIH.png",
  },
];

export default function Hackathons() {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-32">
        <h1 className="text-3xl font-bold text-center mb-8 tracking-tight">
          TIT-E Incubation Cell Hackathons
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hackathons.map((hackathon, idx) => (
            <Card
              key={idx}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-sm"
            >
              <CardHeader className="flex flex-col items-center">
                {hackathon.image ? (
                  <Image
                    src={hackathon.image}
                    alt={hackathon.name}
                    width={80}
                    height={80}
                    className="mb-4 rounded-xl"
                  />
                ) : (
                  <span className="text-4xl mb-4">🚀</span>
                )}
                <CardTitle className="text-xl text-white text-center">
                  {hackathon.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400 mb-4 text-center">
                  {hackathon.description}
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group"
                  onClick={() => window.open(hackathon.teamLink, "_blank")}
                >
                  Join Team ( we have team )
                </Button>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center group mt-4"
                  onClick={() => window.open(hackathon.soloLink, "_blank")}
                >
                  Join Solo ( I need team )
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Extra card for "More coming soon" */}
          <Card className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-sm flex items-center justify-center text-center p-6">
            <CardContent>
              <p className="text-neutral-400 text-lg">
                🚀 More hackathons will be added soon...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
