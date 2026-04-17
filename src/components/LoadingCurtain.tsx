"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingCurtain() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {/* Left curtain half */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full"
            style={{ background: "var(--color-stage-black)" }}
          />
          {/* Right curtain half */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full"
            style={{ background: "var(--color-stage-black)" }}
          />
          {/* Center vertical stage-red line, grows then splits */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full"
            style={{ background: "var(--color-accent)" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1] }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Brand label */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center">
              <p
                className="text-xs tracking-[0.4em] font-mono mb-3"
                style={{ color: "var(--color-accent)" }}
              >
                IWARE × RIDGE STUDIO
              </p>
              <p
                className="text-[10px] tracking-widest opacity-50 font-mono"
                style={{ color: "var(--color-paper)" }}
              >
                A PITCH, IN FIVE ACTS
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
