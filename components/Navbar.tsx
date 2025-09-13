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
    isSpecial?: boolean;
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
        setVisible(direction < 0);
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
            // mobile = wide, lg+ = shrink and float
            "flex w-[90%] sm:w-[80%] lg:w-auto lg:max-w-fit fixed z-[5000] top-6 inset-x-0 mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 backdrop-blur-lg backdrop-saturate-150 shadow-lg items-center justify-center space-x-3 sm:space-x-6 !cursor-pointer",
            className
          )}
          style={{
            background: "rgba(20, 25, 40, 0.65)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            backdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-2 transition-colors duration-200 px-2 sm:px-3 py-1 rounded-md text-neutral-200 hover:text-white hover:underline underline-offset-4"
              )}
            >
              {navItem.icon && <span>{navItem.icon}</span>}
              <span className="text-xs sm:text-sm md:text-base">
                {navItem.name}
              </span>

              {navItem.isSpecial && (
                <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full absolute -top-3 -right-2">
                  New
                </span>
              )}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
