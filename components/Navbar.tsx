"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const prev = scrollYProgress.getPrevious();
    if (typeof current === "number" && typeof prev === "number") {
      const direction = current - prev;
      if (current < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0); // scroll up = show, scroll down = hide
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-8 py-4 backdrop-blur-lg backdrop-saturate-150 shadow-lg items-center justify-center space-x-6",
            className
          )}
          style={{
            background: "rgba(20, 25, 40, 0.65)", // darker glassy background
            border: "1px solid rgba(255, 255, 255, 0.1)", // subtle border
            borderRadius: "16px",
            backdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative flex items-center space-x-2 text-neutral-200 hover:text-white transition-colors duration-200"
            >
              {navItem.icon && (
                <span className="block sm:hidden">{navItem.icon}</span>
              )}
              <span className="text-sm font-medium !cursor-pointer">
                {navItem.name}
              </span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
