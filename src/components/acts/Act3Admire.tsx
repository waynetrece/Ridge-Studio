"use client";

import { motion } from "motion/react";

const points = [
  {
    no: "01",
    title: "一條龍製作的信念",
    titleEn: "END-TO-END CRAFT",
    body: "讓 100 萬經費裡，有 70–80 萬真正創造價值。",
    note: "袁浩程 · 2024 樹冠專訪",
  },
  {
    no: "02",
    title: "北投藝術鎮",
    titleEn: "A TOWN IN BEITOU",
    body: "山峸二手書店、ART BAR、北投小戲節、30 人小劇場。",
    note: "四個副品牌共構生態系",
  },
  {
    no: "03",
    title: "永續製作的實踐",
    titleEn: "SUSTAINABLE PRODUCTION",
    body: "180 坪倉庫，反一次性浪費。",
    note: "道具租賃 · 繪景重製",
  },
  {
    no: "04",
    title: "跨域的策展能力",
    titleEn: "CROSS-DOMAIN CURATION",
    body: "蒙藏文化館、台中歌劇院、妖山祭、城西生活節。",
    note: "12 個代表作 · 4 條業務線",
  },
];

export function Act3Admire() {
  return (
    <section
      data-palette="dark"
      data-act="3"
      className="relative min-h-screen overflow-hidden px-8 md:px-14 py-24"
    >
      <div className="chapter-num text-[55vw] -left-[8vw] top-[-14vw]">III</div>

      <header className="grid md:grid-cols-12 gap-4 mb-16 relative z-10">
        <div className="md:col-span-3">
          <p
            className="text-[10px] tracking-[0.4em] font-mono mb-2"
            style={{ color: "var(--color-accent)" }}
          >
            ACT III
          </p>
          <p className="text-xs tracking-widest uppercase font-mono opacity-60">
            WHAT WE ADMIRE
          </p>
        </div>
        <div className="md:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05]"
          >
            <em>我們欣賞的</em>
            <br />
            <span style={{ color: "var(--color-accent)" }}>Ridge Studio</span>
          </motion.h2>
        </div>
      </header>

      <hr className="hairline-accent mb-0 relative z-10" />

      <div className="relative z-10">
        {points.map((p, i) => (
          <motion.article
            key={p.no}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{
              duration: 1.2,
              delay: 0.08 * i,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="grid md:grid-cols-12 gap-x-8 gap-y-6 py-16 border-b"
            style={{ borderColor: "var(--color-border-subtle)" }}
          >
            <div className="md:col-span-2">
              <p
                className="font-serif italic text-5xl md:text-6xl leading-none"
                style={{ color: "var(--color-accent)" }}
                data-numeric
              >
                {p.no}
              </p>
            </div>
            <div className="md:col-span-4">
              <p
                className="text-[10px] tracking-[0.4em] font-mono mb-3 opacity-60"
              >
                {p.titleEn}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl italic">
                {p.title}
              </h3>
            </div>
            <div className="md:col-span-6 md:pl-8 md:border-l" style={{ borderColor: "var(--color-border-subtle)" }}>
              <p className="text-lg md:text-xl leading-relaxed">{p.body}</p>
              <p className="text-xs font-mono opacity-50 mt-6 tracking-wider">
                — {p.note}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
