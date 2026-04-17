"use client";

import { motion } from "motion/react";

const buttons = [
  { label: "約 30 分鐘聊聊", href: "#contact-meeting", primary: true },
  { label: "想先了解大致預算", href: "#contact-budget", primary: false },
];

export function Act7CTA() {
  return (
    <section
      data-palette="white"
      data-act="7"
      className="section-pad min-h-screen flex items-center justify-center text-center"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
          className="text-4xl lg:text-6xl leading-tight mb-16"
        >
          如果這份提案打到你，
          <br />
          我們就是緣分。
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          {buttons.map((b) => (
            <motion.a
              key={b.label}
              href={b.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-block px-10 py-5 text-base tracking-wider relative"
              style={{
                border: "0.5px solid var(--color-text-primary)",
                color: "var(--color-text-primary)",
              }}
            >
              <motion.span
                initial={{ borderWidth: "0.5px" }}
                whileHover={{ borderWidth: "1.5px" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 pointer-events-none"
                style={{ borderColor: "var(--color-text-primary)", borderStyle: "solid" }}
              />
              {b.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 2, delay: 0.8 }}
          className="mt-24 text-xs font-mono tracking-widest"
        >
          IWARE × RIDGE STUDIO · 2026
        </motion.p>
      </div>
    </section>
  );
}
