"use client";

import { motion } from "motion/react";

const philosophy = [
  { en: "LISTEN", zh: "聆聽" },
  { en: "TALK", zh: "溝通" },
  { en: "OBSERVE", zh: "觀察" },
  { en: "DESIGN", zh: "設計" },
];

const cases = [
  { name: "工研院 AI 機器學習平台", category: "INDUSTRIAL / ACADEMIC" },
  { name: "室內雜誌", category: "PUBLISHING" },
  { name: "喬登美語線上教育", category: "EDUCATION" },
  { name: "美琪生技", category: "BIOTECH" },
  { name: "奇蹟精品", category: "E-COMMERCE" },
  { name: "臺北市校園空間活化", category: "PUBLIC SERVICE" },
];

export function Act5IWARE() {
  return (
    <section
      data-palette="cream"
      data-act="5"
      className="relative min-h-screen overflow-hidden px-8 md:px-14 py-24"
    >
      <div className="chapter-num text-[55vw] -left-[8vw] top-[-14vw]">V</div>

      <header className="grid md:grid-cols-12 gap-4 mb-20 relative z-10">
        <div className="md:col-span-4">
          <p
            className="text-[10px] tracking-[0.4em] font-mono mb-2"
            style={{ color: "var(--color-accent)" }}
          >
            ACT V
          </p>
          <p className="text-xs tracking-widest uppercase font-mono opacity-60">
            WHO WE ARE
          </p>
        </div>
        <div className="md:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05]"
          >
            <em>為什麼是</em>
            <br />
            <span style={{ color: "var(--color-accent)" }}>IWARE</span>？
          </motion.h2>
        </div>
      </header>

      <hr className="hairline-accent mb-16 relative z-10" />

      <div className="grid md:grid-cols-12 gap-12 relative z-10 mb-24">
        <aside className="md:col-span-5">
          <p className="text-[10px] tracking-[0.4em] font-mono opacity-60 mb-6">
            OUR DESIGN PHILOSOPHY
          </p>
          <ul className="space-y-6">
            {philosophy.map((p, i) => (
              <motion.li
                key={p.en}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-baseline gap-6 border-b pb-6"
                style={{ borderColor: "var(--color-border-subtle)" }}
              >
                <span
                  className="font-mono text-xs w-8"
                  style={{ color: "var(--color-accent)" }}
                  data-numeric
                >
                  0{i + 1}
                </span>
                <div className="flex-1 flex items-baseline justify-between">
                  <span className="font-serif text-3xl italic">{p.zh}</span>
                  <span className="text-[10px] font-mono opacity-50 tracking-[0.3em]">
                    {p.en}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="mt-10 text-base font-serif italic leading-relaxed opacity-80"
          >
            客製不套版 —— 跟你們對藝術品質的堅持同頻。
          </motion.p>
        </aside>

        <div className="md:col-span-7">
          <p className="text-[10px] tracking-[0.4em] font-mono opacity-60 mb-6">
            SELECTED WORKS · 6 OF 400
          </p>
          <div className="grid grid-cols-2 gap-4">
            {cases.map((c, i) => (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -6 }}
                className="aspect-[4/3] border p-5 flex flex-col justify-between"
                style={{ borderColor: "var(--color-border-subtle)" }}
              >
                <div className="flex items-start justify-between">
                  <p
                    className="text-[10px] font-mono tracking-[0.3em]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {c.category}
                  </p>
                  <p className="text-[10px] font-mono opacity-40">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <p className="font-serif text-base">{c.name}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <hr className="hairline mb-12 relative z-10" />

      <div className="grid md:grid-cols-12 gap-4 relative z-10">
        <div className="md:col-span-4">
          <p className="text-5xl md:text-7xl font-serif italic" style={{ color: "var(--color-accent)" }} data-numeric>
            30
          </p>
          <p className="text-[10px] tracking-[0.4em] font-mono opacity-60 mt-2">
            YEARS
          </p>
        </div>
        <div className="md:col-span-4">
          <p className="text-5xl md:text-7xl font-serif italic" data-numeric>
            6,000+
          </p>
          <p className="text-[10px] tracking-[0.4em] font-mono opacity-60 mt-2">
            CLIENT PROJECTS
          </p>
        </div>
        <div className="md:col-span-4">
          <p className="text-5xl md:text-7xl font-serif italic" data-numeric>
            400+
          </p>
          <p className="text-[10px] tracking-[0.4em] font-mono opacity-60 mt-2">
            WEBSITES LAUNCHED
          </p>
        </div>
      </div>
    </section>
  );
}
