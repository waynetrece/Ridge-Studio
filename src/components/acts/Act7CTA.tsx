"use client";

import { motion } from "motion/react";

const buttons = [
  { label: "約 30 分鐘聊聊", sub: "30-MIN CONVERSATION", href: "#contact-meeting" },
  { label: "想先了解大致預算", sub: "BUDGET INQUIRY", href: "#contact-budget" },
];

export function Act7CTA() {
  return (
    <section
      data-palette="cream"
      data-act="7"
      className="relative min-h-screen overflow-hidden px-8 md:px-14 py-24 flex flex-col justify-between"
    >
      <div className="chapter-num text-[60vw] -right-[10vw] bottom-[-16vw]">
        VII
      </div>

      <header className="relative z-10">
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-3">
            <p
              className="text-[10px] tracking-[0.4em] font-mono mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              ACT VII
            </p>
            <p className="text-xs tracking-widest uppercase font-mono opacity-60">
              FIN.
            </p>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.5 }}
          className="text-[10px] tracking-[0.4em] font-mono mb-8"
          style={{ color: "var(--color-accent)" }}
        >
          — CURTAIN CALL
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-16"
        >
          <em>如果這份提案打到你，</em>
          <br />
          <span style={{ color: "var(--color-accent)" }}>我們就是緣分。</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-4 max-w-2xl"
        >
          {buttons.map((b) => (
            <motion.a
              key={b.label}
              href={b.href}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
              className="group relative block px-8 py-6 border"
              style={{
                borderColor: "var(--color-accent)",
                borderWidth: "0.5px",
              }}
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-[var(--color-accent)] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
                style={{
                  transformOrigin: "bottom",
                }}
              />
              <span className="relative z-10 transition-colors group-hover:text-[var(--color-paper)]">
                <span className="block text-[10px] font-mono tracking-[0.3em] mb-2 opacity-60 group-hover:opacity-80">
                  {b.sub}
                </span>
                <span className="font-serif text-xl md:text-2xl italic">
                  {b.label} →
                </span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <footer className="relative z-10 mt-16">
        <div className="grid md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-6">
            <p className="text-[10px] tracking-[0.4em] font-mono opacity-40">
              IWARE × RIDGE STUDIO
              <br />A PITCH IN SEVEN ACTS
              <br />
              APRIL 2026
            </p>
          </div>
          <div className="md:col-span-6 text-right">
            <p className="text-[10px] tracking-[0.4em] font-mono opacity-40">
              FIN.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
