"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText, DURATION, EASE } from "@/lib/gsap";

const platforms = [
  {
    no: "01",
    name: "BEHANCE",
    handle: "ridgestudio · 29,260 瀏覽",
    obs: "從你們的舞台設計圖，讀到對劇場光影的執著。",
  },
  {
    no: "02",
    name: "INSTAGRAM",
    handle: "@ridge.studio",
    obs: "從 2018 開站至今，每場演出的施工日常都被拍下來。",
  },
  {
    no: "03",
    name: "FACEBOOK",
    handle: "ridgestudio.production.design",
    obs: "每場活動的開幕、撤場、團隊合照都在這裡。",
  },
  {
    no: "04",
    name: "PORTALY",
    handle: "portaly.cc/ridgestudio",
    obs: "你們把山峸、書店、ART BAR、小戲節四個入口都串好了。",
  },
  {
    no: "05",
    name: "DEEP DIVE",
    handle: "《樹冠 Canopi》袁浩程專訪",
    obs: "從這篇我們認識了「北投藝術鎮」的十年願景。",
  },
];

export function Act2HowWeKnowYou() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      if (headlineRef.current) {
        const split = new SplitText(headlineRef.current, { type: "lines", mask: "lines" });
        gsap.from(split.lines, {
          scrollTrigger: { trigger: headlineRef.current, start: "top 80%" },
          yPercent: 110,
          duration: DURATION.slow,
          stagger: 0.15,
          ease: EASE.inOutSlow,
        });
      }

      const items = sectionRef.current.querySelectorAll("[data-platform-item]");
      ScrollTrigger.batch(items, {
        start: "top 90%",
        onEnter: (batch) =>
          gsap.from(batch, {
            opacity: 0,
            y: 50,
            duration: DURATION.slow,
            stagger: 0.12,
            ease: EASE.outSoft,
          }),
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      data-palette="cream"
      data-act="2"
      className="relative min-h-screen overflow-hidden px-8 md:px-14 py-24"
    >
      <div className="chapter-num text-[55vw] -right-[8vw] top-[-12vw]">II</div>

      <header className="grid md:grid-cols-12 gap-4 mb-20 relative z-10">
        <div className="md:col-span-2">
          <p
            className="text-[10px] tracking-[0.4em] font-mono mb-2"
            style={{ color: "var(--color-accent)" }}
          >
            ACT II
          </p>
          <p className="text-xs tracking-widest uppercase font-mono opacity-60">
            OBSERVATION
          </p>
        </div>
        <div className="md:col-span-10">
          <h2
            ref={headlineRef}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-10"
          >
            <em>我們是這樣</em>
            <br />
            認識<em style={{ color: "var(--color-accent)" }}>你們</em>的。
          </h2>
          <p className="text-base md:text-lg font-serif italic opacity-80 max-w-2xl">
            以下是我們花過時間的地方。每一處，都讓我們更靠近 Ridge Studio 一點。
          </p>
        </div>
      </header>

      <hr className="hairline-accent mb-0 relative z-10" />

      <ul className="relative z-10">
        {platforms.map((p, i) => (
          <li
            key={p.no}
            data-platform-item
            className="group grid md:grid-cols-12 gap-x-8 gap-y-4 py-10 border-b"
            style={{ borderColor: "var(--color-border-subtle)" }}
          >
            <span
              className="md:col-span-1 text-xs font-mono opacity-50 pt-2"
              data-numeric
            >
              0{i + 1}
            </span>
            <div className="md:col-span-4">
              <p
                className="text-xs tracking-[0.3em] font-mono mb-1"
                style={{ color: "var(--color-accent)" }}
              >
                {p.name}
              </p>
              <p className="text-xs font-mono opacity-50">{p.handle}</p>
            </div>
            <p className="md:col-span-7 font-serif text-2xl md:text-3xl italic leading-snug">
              「{p.obs}」
            </p>
          </li>
        ))}
      </ul>

      <footer className="mt-16 grid md:grid-cols-12 gap-4 relative z-10">
        <div className="md:col-span-10 md:col-start-3">
          <p className="text-sm font-mono opacity-60 leading-relaxed">
            <span style={{ color: "var(--color-accent)" }}>— </span>
            最近你們來信詢問 3D 環景。這是契機，但我們想聊更深的事。
          </p>
        </div>
      </footer>
    </section>
  );
}
