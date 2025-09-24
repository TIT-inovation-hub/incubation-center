"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const hackathons = [
  {
    name: "Smart India Hackathon",
    description:
      "The SIH Internal Round Selection, organized by the Incubation Cell, TIT-E.",
    image: "/SIH.png",
  },
  {
    name: "EY Techathon 6.0",
    description:
      "The SIH Internal Round Selection, organized by the Incubation Cell, TIT-E.",
    image: "/techathon.jpeg",
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
                <div className="flex">
                  <Link href={"/hackathons/sih"} className="mx-auto">
                    <Button
                      className="bg-blue-800 font-bold text-white px-6 py-2 rounded 
                   hover:bg-blue-700 transition-colors duration-200"
                    >
                      Join Hackathon
                    </Button>
                  </Link>
                </div>
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
