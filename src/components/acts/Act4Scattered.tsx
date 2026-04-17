"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, Flip, SplitText, DURATION, EASE } from "@/lib/gsap";

const works = [
  { name: "蒙藏文化館《生生不息》", year: "2026", platform: "Behance" },
  { name: "臺中國家歌劇院《LOVE STORY》", year: "2025", platform: "Behance" },
  { name: "妖山祭《妖光乍現》", year: "2025", platform: "Instagram" },
  { name: "城西生活節《印一個所在》", year: "2025", platform: "Behance" },
  { name: "中華文化總會《新活水樂園》", year: "2024", platform: "Facebook" },
  { name: "第一銀行《第一數位超市》", year: "2024", platform: "Behance" },
  { name: "臺北眷村文化節《開箱吧，眷村！》", year: "2025", platform: "Instagram" },
  { name: "酉鬼啤酒六週年派對", year: "2024", platform: "Facebook" },
  { name: "春浪音樂節 20th", year: "2024", platform: "Behance" },
  { name: "北投中心新村《心窗》", year: "2024", platform: "Portaly" },
  { name: "臺北時裝週《臺灣色感》", year: "2024", platform: "Behance" },
  { name: "北投老爺酒店《天亮前的那卡西》", year: "2025", platform: "Instagram" },
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

      // Headline reveal
      const headlineSplit = new SplitText(headlineRef.current, {
        type: "lines",
        mask: "lines",
      });
      gsap.from(headlineSplit.lines, {
        scrollTrigger: { trigger: headlineRef.current, start: "top 75%" },
        yPercent: 100,
        duration: DURATION.slow,
        stagger: 0.12,
        ease: EASE.inOutSlow,
      });

      // Initial scatter — applied immediately, mobile gets reduced range
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const xRange = isDesktop ? 220 : 90;
      const yRange = isDesktop ? 140 : 60;
      const rotRange = isDesktop ? 12 : 6;

      cards.forEach((card) => {
        gsap.set(card, {
          x: gsap.utils.random(-xRange, xRange),
          y: gsap.utils.random(-yRange, yRange),
          rotation: gsap.utils.random(-rotRange, rotRange),
          opacity: 0,
        });
      });

      // Fade scattered cards in first
      gsap.to(cards, {
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        opacity: 1,
        duration: DURATION.base,
        stagger: { each: 0.04, from: "random" },
        ease: EASE.outSoft,
      });

      // Reorganize via Flip when scrolled past mid
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 35%",
        once: true,
        onEnter: () => {
          const state = Flip.getState(cards);
          gsap.set(cards, { clearProps: "x,y,rotation" });
          Flip.from(state, {
            duration: DURATION.dramatic,
            ease: "power2.inOut",
            stagger: { each: 0.04, from: "random" },
            absolute: false,
          });
        },
      });

      // Closer reveal
      if (closerRef.current) {
        gsap.from(closerRef.current, {
          scrollTrigger: { trigger: closerRef.current, start: "top 80%" },
          opacity: 0,
          y: 20,
          duration: DURATION.slow,
          ease: EASE.outSoft,
        });
      }

      return () => headlineSplit.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      data-palette="dark"
      data-act="4"
      className="section-pad min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2
          ref={headlineRef}
          className="text-4xl lg:text-6xl mb-16"
          style={{ color: "var(--color-accent)" }}
        >
          我們發現一件事。
        </h2>

        <p className="text-base opacity-70 mb-12 font-mono tracking-wider">
          它們現在在這四個地方。
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16"
        >
          {works.map((w) => (
            <article
              key={w.name}
              data-work
              className="border p-4 text-left aspect-[4/3] flex flex-col justify-between bg-transparent"
              style={{ borderColor: "var(--color-accent)", borderWidth: "0.5px" }}
            >
              <p className="text-xs font-mono opacity-60">{w.platform}</p>
              <div>
                <p className="text-sm leading-tight">{w.name}</p>
                <p className="text-xs font-mono opacity-50 mt-2">{w.year}</p>
              </div>
            </article>
          ))}
        </div>

        <p ref={closerRef} className="text-2xl lg:text-3xl opacity-90">
          如果在同一個地方呢？
        </p>
      </div>
    </section>
  );
}
