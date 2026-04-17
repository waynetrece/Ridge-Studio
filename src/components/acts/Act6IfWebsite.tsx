"use client";

import { motion } from "motion/react";

const modules = [
  {
    no: "01",
    title: "Portfolio",
    subtitle: "AS A MAIN STAGE",
    body: "把 12 個代表作整合到單一作品集，依劇場 / 展場 / 活動 / 場域分類。主視覺以大圖為核心，hover 浮現案名與年份。",
  },
  {
    no: "02",
    title: "道具租賃",
    subtitle: "WAREHOUSE, OPEN",
    body: "180 坪倉庫從 FB 私訊升級為線上目錄 + 庫存日曆 + 詢單系統 —— Airbnb 式體驗。",
  },
  {
    no: "03",
    title: "北投藝術鎮",
    subtitle: "SATELLITE CITY",
    body: "二手書店、ART BAR、北投小戲節、30 人小劇場各自獨立 satellite page，從同一張鎮民地圖入口進入。",
  },
  {
    no: "04",
    title: "3D 環景展示廳",
    subtitle: "THE RIGHT STAGE",
    body: "把 3D 環景作品嵌入官網，可拖拽旋轉、滾輪縮放。同樣的 3D 內容，從 Drive 連結變成沉浸體驗。",
  },
];

export function Act6IfWebsite() {
  return (
    <section
      data-palette="dark"
      data-act="6"
      className="relative min-h-screen overflow-hidden px-8 md:px-14 py-24"
    >
      <div className="chapter-num text-[55vw] -right-[8vw] top-[-14vw]">VI</div>

      <header className="grid md:grid-cols-12 gap-4 mb-20 relative z-10">
        <div className="md:col-span-4">
          <p
            className="text-[10px] tracking-[0.4em] font-mono mb-2"
            style={{ color: "var(--color-accent)" }}
          >
            ACT VI
          </p>
          <p className="text-xs tracking-widest uppercase font-mono opacity-60">
            THE PROPOSAL
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
            <em>假設你們</em>
            <br />
            <span style={{ color: "var(--color-accent)" }}>有官網。</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="mt-6 text-base font-serif italic opacity-70 max-w-2xl"
          >
            我們會這樣設計它。不是網站，而是 Ridge Studio 在線上的策展空間。
          </motion.p>
        </div>
      </header>

      <hr className="hairline-accent mb-0 relative z-10" />

      <div className="relative z-10">
        {modules.map((m, i) => (
          <motion.article
            key={m.no}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid md:grid-cols-12 gap-x-8 gap-y-6 py-20 border-b"
            style={{ borderColor: "var(--color-border-subtle)" }}
          >
            <div className="md:col-span-2">
              <p
                className="font-serif italic text-6xl md:text-7xl leading-none"
                style={{ color: "var(--color-accent)" }}
                data-numeric
              >
                {m.no}
              </p>
            </div>
            <div className="md:col-span-5">
              <p
                className="text-[10px] font-mono tracking-[0.3em] mb-3 opacity-60"
              >
                MODULE · {m.subtitle}
              </p>
              <h3 className="font-serif text-3xl md:text-4xl italic mb-6">
                {m.title}
              </h3>
              <p className="text-base leading-relaxed opacity-85 measure-body">
                {m.body}
              </p>
            </div>
            <div className="md:col-span-5">
              <div
                className="aspect-[4/3] border relative overflow-hidden"
                style={{
                  borderColor: "var(--color-accent)",
                  borderWidth: "0.5px",
                }}
              >
                <div
                  aria-hidden
                  className="halftone-dots absolute inset-0"
                  style={{ color: "var(--color-accent)" }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <p
                    className="text-[10px] font-mono tracking-[0.3em] mb-3"
                    style={{ color: "var(--color-accent)" }}
                  >
                    MOCKUP · {m.no}
                  </p>
                  <p className="font-serif text-xl italic opacity-70">
                    {m.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
