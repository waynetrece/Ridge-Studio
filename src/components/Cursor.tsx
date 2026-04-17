"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = !!t.closest("a, button, [role='button'], input, textarea");
      setHoveringInteractive(interactive);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [x, y, visible]);

  return (
    <>
      {/* Ring */}
      <motion.div
        ref={ref}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: hoveringInteractive ? 56 : 28,
            height: hoveringInteractive ? 56 : 28,
            borderColor: "var(--color-accent)",
            backgroundColor: hoveringInteractive
              ? "rgba(179, 58, 43, 0.1)"
              : "rgba(179, 58, 43, 0)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="rounded-full border"
          style={{ mixBlendMode: "difference" }}
        />
      </motion.div>

      {/* Dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className="w-[6px] h-[6px] rounded-full"
          style={{ background: "var(--color-accent)" }}
        />
      </motion.div>
    </>
  );
}
