"use client";

import { motion } from "motion/react";

const modules = [
  {
    no: "01",
    title: "Portfolio",
    subtitle: "大圖主導 + 類型篩選",
    body: "把 12 個代表作整合到單一作品集，依劇場 / 展場 / 活動 / 場域分類，主視覺以大圖為核心，hover 浮現案名與年份。",
  },
  {
    no: "02",
    title: "道具租賃系統",
    subtitle: "分類 × 庫存日曆 × 線上詢單",
    body: "把 180 坪倉庫的道具開放給劇團與活動主辦方，從 FB 私訊升級為線上目錄 + 詢單系統，類似 Airbnb 的體驗。",
  },
  {
    no: "03",
    title: "北投藝術鎮",
    subtitle: "satellite pages 整合",
    body: "二手書店、ART BAR、北投小戲節、30 人小劇場各自獨立 satellite page，從同一張鎮民地圖入口，生態系綜效從分散變整合。",
  },
  {
    no: "04",
    title: "3D 環景展示廳",
    subtitle: "你最近詢問的服務，在對的舞台",
    body: "把 3D 環景作品嵌入官網，可拖拽旋轉、滾輪縮放。同樣的 3D 內容，從 Drive 連結變成沉浸體驗。",
  },
];

export function Act6IfWebsite() {
  return (
    <section
      data-palette="cream"
      data-act="6"
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
            CHAPTER 06
          </p>
          <h2 className="text-4xl lg:text-6xl">
            假設你們有官網，
            <br />
            我們會這樣設計
          </h2>
        </motion.header>

        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
          className="hairline mb-20 origin-left"
        />

        <div className="space-y-32">
          {modules.map((m, i) => (
            <motion.article
              key={m.no}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid lg:grid-cols-12 gap-12"
            >
              <div className="lg:col-span-5">
                <p className="text-xs font-mono opacity-60 mb-4">{m.no}</p>
                <h3 className="text-3xl lg:text-4xl mb-4">{m.title}</h3>
                <p className="text-sm tracking-wider opacity-70 mb-8">{m.subtitle}</p>
                <p className="text-base leading-relaxed measure-body">{m.body}</p>
              </div>
              <div className="lg:col-span-7">
                <div
                  className="aspect-video w-full border"
                  style={{
                    borderColor: "var(--color-border-strong)",
                    background: "var(--color-bg-secondary)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center text-xs font-mono opacity-40">
                    [ mockup placeholder · {m.title} ]
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
