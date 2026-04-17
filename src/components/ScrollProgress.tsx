"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const percent = useTransform(scrollYProgress, (v) =>
    Math.round(v * 100).toString().padStart(2, "0")
  );

  return (
    <aside
      aria-hidden
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-center gap-4"
    >
      <motion.span
        className="text-[10px] tracking-[0.3em] font-mono"
        style={{ color: "var(--color-accent)" }}
      >
        <motion.span>{percent}</motion.span>
      </motion.span>
      <div
        className="relative w-px h-40"
        style={{ background: "var(--color-border-subtle)" }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full origin-top"
          style={{
            height: "100%",
            background: "var(--color-accent)",
            scaleY,
          }}
        />
      </div>
      <span
        className="text-[10px] tracking-[0.3em] font-mono rotate-90 origin-center mt-8"
        style={{ color: "var(--color-text-muted)" }}
      >
        SCROLL
      </span>
    </aside>
  );
}
