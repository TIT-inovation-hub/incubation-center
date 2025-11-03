"use client";
import { useEffect, useState } from "react";

interface Dot {
  top: string;
  left: string;
  delay: string;
}

export default function AnimatedDots() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    // Generate random dots after hydration (client-side only)
    const newDots = Array.from({ length: 20 }).map((_, i) => ({
      top: `${10 + Math.random() * 80}%`,
      left: `${5 + Math.random() * 90}%`,
      delay: `${i * 0.4}s`,
    }));
    setDots(newDots);
  }, []);

  return (
    <>
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-[4px] h-[4px] bg-cyan-400 rounded-full opacity-80 shadow-[0_0_8px_#00BCD4] animate-float"
          style={{
            top: dot.top,
            left: dot.left,
            animationDelay: dot.delay,
          }}
        ></div>
      ))}
    </>
  );
}
