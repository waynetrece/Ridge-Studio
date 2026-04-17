"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, Flip, SplitText, DURATION, EASE } from "@/lib/gsap";

const works = [
  { name: "蒙藏文化館《生生不息》", year: "2026", platform: "BEHANCE" },
  { name: "臺中國家歌劇院《LOVE STORY》", year: "2025", platform: "BEHANCE" },
  { name: "妖山祭《妖光乍現》", year: "2025", platform: "INSTAGRAM" },
  { name: "城西生活節《印一個所在》", year: "2025", platform: "BEHANCE" },
  { name: "中華文化總會《新活水樂園》", year: "2024", platform: "FACEBOOK" },
  { name: "第一銀行《第一數位超市》", year: "2024", platform: "BEHANCE" },
  { name: "臺北眷村文化節《開箱吧，眷村！》", year: "2025", platform: "INSTAGRAM" },
  { name: "酉鬼啤酒六週年派對", year: "2024", platform: "FACEBOOK" },
  { name: "春浪音樂節 20th", year: "2024", platform: "BEHANCE" },
  { name: "北投中心新村《心窗》", year: "2024", platform: "PORTALY" },
  { name: "臺北時裝週《臺灣色感》", year: "2024", platform: "BEHANCE" },
  { name: "北投老爺酒店《天亮前的那卡西》", year: "2025", platform: "INSTAGRAM" },
];

export function Act4Scattered() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const closerRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !gridRef.current || !headlineRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>("[data-work]", gridRef.current);

      const headlineSplit = new SplitText(headlineRef.current, {
        type: "lines",
        mask: "lines",
      });
      gsap.from(headlineSplit.lines, {
        scrollTrigger: { trigger: headlineRef.current, start: "top 75%" },
        yPercent: 110,
        duration: DURATION.slow,
        stagger: 0.15,
        ease: EASE.inOutSlow,
      });

      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const xRange = isDesktop ? 260 : 100;
      const yRange = isDesktop ? 170 : 70;
      const rotRange = isDesktop ? 14 : 6;

      cards.forEach((card) => {
        gsap.set(card, {
          x: gsap.utils.random(-xRange, xRange),
          y: gsap.utils.random(-yRange, yRange),
          rotation: gsap.utils.random(-rotRange, rotRange),
          opacity: 0,
        });
      });

      gsap.to(cards, {
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        opacity: 1,
        duration: DURATION.base,
        stagger: { each: 0.04, from: "random" },
        ease: EASE.outSoft,
      });

      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 30%",
        once: true,
        onEnter: () => {
          const state = Flip.getState(cards);
          gsap.set(cards, { clearProps: "x,y,rotation" });
          Flip.from(state, {
            duration: DURATION.dramatic,
            ease: "power2.inOut",
            stagger: { each: 0.04, from: "random" },
          });
        },
      });

      if (closerRef.current) {
        gsap.from(closerRef.current, {
          scrollTrigger: { trigger: closerRef.current, start: "top 85%" },
          opacity: 0,
          y: 30,
          duration: DURATION.slow,
          ease: EASE.outSoft,
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      data-palette="dark"
      data-act="4"
      className="relative min-h-screen overflow-hidden px-8 md:px-14 py-24"
    >
      <div
        className="chapter-num text-[60vw] -right-[10vw] top-[-14vw]"
        style={{ opacity: 0.1, color: "var(--color-accent)" }}
      >
        IV
      </div>

      <header className="grid md:grid-cols-12 gap-4 mb-16 relative z-10">
        <div className="md:col-span-3">
          <p
            className="text-[10px] tracking-[0.4em] font-mono mb-2"
            style={{ color: "var(--color-accent)" }}
          >
            ACT IV
          </p>
          <p className="text-xs tracking-widest uppercase font-mono opacity-60">
            THE CLIMAX
          </p>
        </div>
        <div className="md:col-span-9">
          <h2
            ref={headlineRef}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05]"
          >
            我們發現
            <br />
            <em style={{ color: "var(--color-accent)" }}>一件事。</em>
          </h2>
        </div>
      </header>

      <p className="text-center text-xs md:text-sm font-mono tracking-[0.3em] opacity-60 mb-16 relative z-10">
        它們現在 —— 在這四個地方。
      </p>

      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24 relative z-10"
      >
        {works.map((w, i) => (
          <article
            key={w.name}
            data-work
            className="border p-4 text-left aspect-[4/3] flex flex-col justify-between"
            style={{
              borderColor: "var(--color-accent)",
              borderWidth: "0.5px",
              background: "rgba(14,14,14,0.6)",
            }}
          >
            <div className="flex items-start justify-between">
              <p
                className="text-[10px] font-mono tracking-[0.3em]"
                style={{ color: "var(--color-accent)" }}
              >
                {w.platform}
              </p>
              <p className="text-[10px] font-mono opacity-40">
                {String(i + 1).padStart(2, "0")}/12
              </p>
            </div>
            <div>
              <p className="text-sm leading-tight font-serif">{w.name}</p>
              <p className="text-[10px] font-mono opacity-50 mt-3 tracking-wider">
                {w.year}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p
        ref={closerRef}
        className="font-serif text-4xl md:text-6xl lg:text-7xl italic text-center relative z-10"
      >
        如果在<em style={{ color: "var(--color-accent)" }}>同一個地方</em>呢？
      </p>
    </section>
  );
}
