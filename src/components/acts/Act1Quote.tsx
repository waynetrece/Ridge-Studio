"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, DURATION, EASE } from "@/lib/gsap";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 12, label: "代表作" },
  { value: 4, label: "業務線" },
  { value: 180, label: "坪倉庫" },
  { value: 29260, label: "Behance 瀏覽" },
  { value: 414, label: "Behance 讚" },
  { value: 371, label: "追蹤者" },
];

function CountUpNumber({ to, format }: { to: number; format?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  useGSAP(
    () => {
      if (!inView) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: to,
        duration: DURATION.slow,
        ease: EASE.outSoft,
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = format
              ? format(Math.round(obj.val))
              : Math.round(obj.val).toLocaleString("en-US");
          }
        },
      });
    },
    { dependencies: [inView, to] }
  );

  return <span ref={ref}>0</span>;
}

export function Act1Quote() {
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const attribRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!quoteRef.current) return;
      const split = new SplitText(quoteRef.current, { type: "lines", mask: "lines" });
      const tl = gsap.timeline({ delay: 0.4 });
      tl.from(split.lines, {
        yPercent: 100,
        duration: DURATION.slow,
        stagger: 0.15,
        ease: EASE.inOutSlow,
      });
      if (attribRef.current) {
        tl.from(
          attribRef.current,
          { opacity: 0, duration: DURATION.base, ease: EASE.outSoft },
          "-=0.4"
        );
      }
      return () => split.revert();
    },
    { scope: quoteRef }
  );

  return (
    <>
      {/* Phase A: Dark quote */}
      <section
        data-palette="dark"
        data-act="1"
        className="section-pad min-h-screen flex flex-col items-center justify-center text-center"
      >
        <div className="px-6 max-w-4xl">
          <p
            ref={quoteRef}
            className="text-2xl md:text-4xl lg:text-5xl leading-relaxed measure-hero mx-auto"
          >
            如果能努力十年、二十年，
            <br />
            影響的人會漸漸增加，
            <br />
            也可以長出台灣自己鮮明的文化。
          </p>
          <p ref={attribRef} className="mt-12 text-sm font-mono opacity-70">
            — 袁浩程，Ridge Studio 創辦人
            <br />
            《樹冠 Canopi》專訪，2024
          </p>
        </div>
      </section>

      {/* Phase B: Cream statistics */}
      <section
        data-palette="cream"
        data-act="1b"
        className="section-pad min-h-screen flex flex-col justify-center"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            className="text-xs tracking-widest uppercase font-mono opacity-60 mb-8"
          >
            我們花了一週讀完你們
          </motion.p>

          <hr className="hairline mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-16">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="font-mono text-3xl md:text-5xl mb-2" data-numeric>
                  <CountUpNumber to={s.value} />
                </p>
                <p className="text-xs tracking-widest uppercase opacity-60">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <hr className="hairline mb-8" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-base opacity-70"
          >
            然後寫了這份提案。
          </motion.p>
        </div>
      </section>
    </>
  );
}
