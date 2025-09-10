"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";

type Bullet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  resting: boolean;
};

type Ghost = {
  id: number;
  x: number;
  y: number;
  alive: boolean;
};

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [firing, setFiring] = useState(false);
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [ghosts, setGhosts] = useState<Ghost[]>([]);
  const [currentThought, setCurrentThought] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);
  const ghostIdRef = useRef(0);

  const gravity = 0.6;
  const friction = 0.8;

  const floorY = useMemo(
    () => (typeof window !== "undefined" ? window.innerHeight - 8 : 0),
    []
  );

  const thoughts = [
    "SIH25001: Smart Community Health Monitoring and Early Warning System for Water-Borne Diseases in Rural Northeast India",
    "SIH25002: Smart Tourist Safety Monitoring & Incident Response System using AI, Geo-Fencing, and Blockchain-based Digital ID",
    "SIH25003: Low-Cost smart transportation solution for agri produce from remote farms to nearest motorable road in NER Region",
    "SIH25004: Image based breed recognition for cattle and buffaloes of India",
    "SIH25006: Development of a Digital Farm Management Portal for implementing biosecurity measures in Pig and Poultry Farms",
    "SIH25008: Disaster Preparedness and Response Education System for Schools and Colleges",
    "SIH25009: Gamified Environmental Education Platform for Schools and Colleges",
    "SIH25013: Real-Time Public Transport Tracking for Small Cities",
    "SIH25014: Waste Segregation Monitoring System for Urban Local Bodies",
    "SIH25020: Development of indigenous contactless Integrated Track Monitoring Systems (ITMS) for Track Recording on Indian Railways",
    "SIH25023: AyurSutra — Panchakarma Patient Management and therapy scheduling",
    "SIH25025: E-tongue for Dravya identification",
    "SIH25026: Develop API code to integrate NAMASTE / ICD-11 Traditional Medicine Module 2 (TM2) into existing EMR systems",
    "SIH25030: AI-Based Crop Recommendation for Farmers",
    "SIH25033: AI-Based Smart Allocation Engine for PM Internship Scheme",
    "SIH25036: Development of Sensor for Detection of Microplastics",
    "SIH25038: Blockchain-Based Blue Carbon Registry and MRV System",
    "SIH25044: AI-Powered Crop Yield Prediction and Optimization",
    "SIH25051: Renewable Energy Monitoring System for Microgrids",
    "SIH25064: Improving the Renewable Energy hosting capacity in Distribution Feeders",
  ];

  const gunSoundRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      gunSoundRef.current = new Audio("/shoot.aac");
      gunSoundRef.current.volume = 0.5;
    }
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setFiring(true);

      if (gunSoundRef.current) {
        gunSoundRef.current.currentTime = 0;
        gunSoundRef.current.play();
      }

      setBullets((prev) => [
        ...prev,
        {
          x: position.x,
          y: position.y,
          vx: -40,
          vy: -10,
          resting: false,
        },
      ]);

      setTimeout(() => setFiring(false), 120);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [position]);

  // Ghost spawning
  useEffect(() => {
    const spawnGhost = () => {
      if (typeof window === "undefined") return;

      setGhosts((prev) => {
        if (prev.filter((g) => g.alive).length >= 10) return prev; // limit
        const x = Math.random() * (window.innerWidth - 40);
        const y = Math.random() * (window.innerHeight - 100);

        return [...prev, { id: ghostIdRef.current++, x, y, alive: true }];
      });
    };

    const interval = setInterval(spawnGhost, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate bullets and check collisions
  useEffect(() => {
    const updateBullets = () => {
      setBullets((prev) =>
        prev.map((b) => {
          if (b.resting) return b;

          let { x, y, vx, vy } = b;
          vy += gravity;
          x += vx;
          y += vy;

          // Collide with floor
          if (y >= floorY) {
            y = floorY;
            vy = 0;
            vx *= 0.5;
            if (Math.abs(vx) < 0.5) {
              vx = 0;
              return { ...b, x, y, vx, vy, resting: true };
            }
          }

          // Collide with walls
          if (x <= 0) {
            x = 0;
            vx = -vx * friction;
          }
          if (x >= window.innerWidth - 8) {
            x = window.innerWidth - 8;
            vx = -vx * friction;
          }

          return { ...b, x, y, vx, vy };
        })
      );

      // Check bullet ↔ ghost collisions
      setGhosts((prevGhosts) =>
        prevGhosts.map((ghost) => {
          if (!ghost.alive) return ghost;

          for (const b of bullets) {
            const dx = b.x - ghost.x;
            const dy = b.y - ghost.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 20) {
              // Pick random thought when ghost dies
              const randomThought =
                thoughts[Math.floor(Math.random() * thoughts.length)];
              setCurrentThought(randomThought);

              return { ...ghost, alive: false };
            }
          }
          return ghost;
        })
      );

      rafRef.current = requestAnimationFrame(updateBullets);
    };

    rafRef.current = requestAnimationFrame(updateBullets);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [floorY, gravity, friction, bullets]);

  return (
    <>
      {/* Gun Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <Image
          src="/gun.jpeg"
          alt="Gun Cursor"
          width={40}
          height={40}
          className="rotate-12 relative scale-x-[-1] z-20"
        />

        {firing && (
          <Image
            src="/muzzle-flash.png"
            alt="Muzzle Flash"
            width={30}
            height={30}
            className="absolute -left-6 -top-2 animate-ping z-10 rotate-12"
          />
        )}
      </div>

      {/* Bullets */}
      <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-40">
        {bullets.map((b, i) => (
          <Image
            key={i}
            src="/bullet.png"
            alt="Bullet"
            width={16}
            height={16}
            className="absolute"
            style={{
              left: b.x,
              top: b.y,
              transform: `rotate(${Math.atan2(b.vy, b.vx)}rad)`,
            }}
          />
        ))}
      </div>

      {/* Ghosts */}
      <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-30">
        {ghosts
          .filter((g) => g.alive)
          .map((g) => (
            <Image
              key={g.id}
              src="/ghost.png"
              alt="Ghost"
              width={40}
              height={40}
              className="absolute animate-bounce"
              style={{ left: g.x, top: g.y }}
            />
          ))}
      </div>

      {/* Funny Thought */}
      {currentThought && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 shadow-lg animate-slide-up">
            <p className="text-sm font-medium text-white tracking-tight">
              {currentThought}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomCursor;
