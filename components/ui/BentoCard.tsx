"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

type BentoCardProps = {
  className?: string;
  children: React.ReactNode;
  delay?: number;
};

/** Card with a cursor-following spotlight; reveals itself on first scroll into view. */
export function BentoCard({ className = "", children, delay = 0 }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`card group relative overflow-hidden p-6 md:p-7 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), var(--glow), transparent 65%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
