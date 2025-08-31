"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Bullet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  resting: boolean; // new flag for bullets that landed
};

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [firing, setFiring] = useState(false);
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const rafRef = useRef<number | null>(null);

  const gravity = 0.6;
  const friction = 0.8; // reduce bounce
  const floorY = typeof window !== "undefined" ? window.innerHeight - 8 : 0; // floor (adjusted for bullet size)

  // Preload sound
  const gunSound =
    typeof window !== "undefined" ? new Audio("/shoot.aac") : null;
  if (gunSound) gunSound.volume = 0.5;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setFiring(true);
      if (gunSound) {
        gunSound.currentTime = 0;
        gunSound.play();
      }

      // Spawn bullet
      setBullets((prev) => [
        ...prev,
        {
          x: position.x,
          y: position.y,
          vx: -40, // shoot left
          vy: -10, // little upward force
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

  // Animate bullets with physics
  useEffect(() => {
    const updateBullets = () => {
      setBullets((prev) =>
        prev.map((b) => {
          if (b.resting) return b;

          let { x, y, vx, vy } = b;

          // Apply gravity
          vy += gravity;

          // Move
          x += vx;
          y += vy;

          // Collide with floor
          if (y >= floorY) {
            y = floorY;
            vy = 0;
            vx *= 0.5; // slow down
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

      rafRef.current = requestAnimationFrame(updateBullets);
    };

    rafRef.current = requestAnimationFrame(updateBullets);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

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
      {/* Bullets */}
      <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-40">
        {bullets.map((b, i) => (
          <Image
            key={i}
            src="/bullet.png"
            alt="Bullet"
            width={16} // adjust size
            height={16}
            className="absolute"
            style={{
              left: b.x,
              top: b.y,
              transform: `rotate(${Math.atan2(b.vy, b.vx)}rad)`, // rotate in direction of travel
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CustomCursor;
