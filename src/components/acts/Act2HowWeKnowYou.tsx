"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText, DURATION, EASE } from "@/lib/gsap";

const platforms = [
  { name: "Behance", value: "29,260 瀏覽 · 414 讚 · 371 追蹤" },
  { name: "Instagram", value: "@ridge.studio" },
  { name: "Facebook", value: "ridgestudio.production.design" },
  { name: "Portaly", value: "portaly.cc/ridgestudio" },
  { name: "深度報導", value: "《樹冠 Canopi》袁浩程專訪" },
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
          scrollTrigger: { trigger: headlineRef.current, start: "top 75%" },
          yPercent: 100,
          duration: DURATION.slow,
          stagger: 0.12,
          ease: EASE.inOutSlow,
        });
      }

      const items = sectionRef.current.querySelectorAll("[data-platform-item]");
      ScrollTrigger.batch(items, {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.from(batch, {
            opacity: 0,
            y: 30,
            duration: DURATION.base,
            stagger: 0.12,
            ease: EASE.outSoft,
          }),
      });

      const lines = sectionRef.current.querySelectorAll("[data-divider]");
      gsap.from(lines, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
        scaleX: 0,
        transformOrigin: "left center",
        duration: DURATION.slow,
        stagger: 0.08,
        ease: EASE.inOutSlow,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      data-palette="white"
      data-act="2"
      className="section-pad min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12 lg:gap-20">
        <div className="lg:col-span-2">
          <p className="text-sm tracking-widest uppercase opacity-60 mb-8 font-mono">
            CHAPTER 02
          </p>
          <h2 ref={headlineRef} className="text-4xl lg:text-6xl leading-tight">
            我們是這樣
            <br />
            認識你們的。
          </h2>
          <p className="mt-12 text-base opacity-70 measure-body">
            最近你們來信詢問 3D 環景。這是契機，但我們想聊更深的事。
          </p>
        </div>

        <div className="lg:col-span-3">
          <ul className="space-y-0">
            {platforms.map((p) => (
              <li
                key={p.name}
                data-platform-item
                className="grid grid-cols-[auto_1fr] gap-6 items-baseline py-6"
              >
                <span className="text-xs tracking-widest uppercase opacity-50 font-mono w-24">
                  {p.name}
                </span>
                <span className="text-base opacity-90">{p.value}</span>
              </li>
            ))}
          </ul>
          <hr data-divider className="hairline" />
        </div>
      </div>
    </section>
  );
}
