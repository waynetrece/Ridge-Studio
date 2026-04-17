"use client";

import { motion } from "motion/react";

const philosophy = ["聆聽", "溝通", "觀察", "設計"];

const cases = [
  { name: "工研院 AI 機器學習平台", category: "工業 / 政府學術" },
  { name: "室內雜誌", category: "出版" },
  { name: "喬登美語線上教育", category: "教育" },
  { name: "美琪生技", category: "生技" },
  { name: "奇蹟精品", category: "電商" },
  { name: "臺北市校園空間活化", category: "公共服務" },
];

export function Act5IWARE() {
  return (
    <section
      data-palette="white"
      data-act="5"
      className="section-pad min-h-screen"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase font-mono opacity-60 mb-6">
            CHAPTER 05
          </p>
          <h2 className="text-4xl lg:text-6xl">為什麼是 IWARE</h2>
        </motion.header>

        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
          className="hairline mb-16 origin-left"
          style={{ background: "var(--color-text-primary)", height: "2px" }}
        />

        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-4">
            <p className="text-sm tracking-widest uppercase font-mono opacity-60 mb-8">
              我們的設計哲學
            </p>
            <ul className="space-y-4 text-2xl">
              {philosophy.map((word, i) => (
                <motion.li
                  key={word}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 1, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex items-baseline gap-4"
                >
                  <span className="font-mono text-sm opacity-50 w-6">
                    0{i + 1}
                  </span>
                  <span>{word}</span>
                </motion.li>
              ))}
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-12 text-sm opacity-70 leading-relaxed"
            >
              客製不套版，跟你們對藝術品質的堅持同頻。
            </motion.p>
          </aside>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -4 }}
                className="aspect-[4/3] border p-6 flex flex-col justify-between cursor-default"
                style={{ borderColor: "var(--color-border-subtle)" }}
              >
                <p className="text-xs font-mono opacity-60">{c.category}</p>
                <p className="text-base">{c.name}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
