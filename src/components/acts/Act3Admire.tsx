"use client";

import { motion } from "motion/react";

const points = [
  {
    no: "01",
    title: "一條龍製作的信念",
    body: "100 萬經費讓 70-80 萬真正創造價值。",
    note: "袁浩程，2024 樹冠專訪",
    align: "left" as const,
  },
  {
    no: "02",
    title: "北投藝術鎮的十年願景",
    body: "山峸二手書店、ART BAR、北投小戲節。",
    note: "四個副品牌共構生態系",
    align: "right" as const,
  },
  {
    no: "03",
    title: "永續製作的實踐",
    body: "180 坪倉庫，反一次性浪費。",
    note: "道具租賃、繪景重製",
    align: "left" as const,
  },
  {
    no: "04",
    title: "跨域的策展能力",
    body: "蒙藏文化館、台中歌劇院、妖山祭、城西生活節。",
    note: "12 個代表作 · 4 條業務線",
    align: "right" as const,
  },
];

export function Act3Admire() {
  return (
    <section
      data-palette="cream"
      data-act="3"
      className="section-pad min-h-screen"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-widest uppercase font-mono opacity-60 mb-6">
            CHAPTER 03
          </p>
          <h2 className="text-4xl lg:text-6xl">我們欣賞的 Ridge Studio</h2>
        </motion.header>

        <hr className="hairline mb-20" />

        <div className="space-y-24">
          {points.map((p, i) => (
            <motion.article
              key={p.no}
              initial={{ opacity: 0, x: p.align === "left" ? -40 : 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{
                duration: 1.2,
                delay: 0.05 * i,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`grid lg:grid-cols-2 gap-8 ${
                p.align === "right" ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-xs font-mono opacity-60 mb-4">{p.no}</p>
                <h3 className="text-2xl lg:text-3xl mb-6">{p.title}</h3>
                <p className="text-base opacity-85 leading-relaxed">{p.body}</p>
                <p className="text-xs opacity-60 mt-6 font-mono">{p.note}</p>
              </div>
              <div></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
