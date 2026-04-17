"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, DURATION, EASE } from "@/lib/gsap";
import { motion } from "motion/react";
import { CountUp } from "@/components/CountUp";

export function Act1Quote() {
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const attribRef = useRef<HTMLParagraphElement>(null);
  const statsHeadRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (quoteRef.current) {
      const split = new SplitText(quoteRef.current, { type: "lines", mask: "lines" });
      const tl = gsap.timeline({ delay: 2.4 });
      tl.from(split.lines, {
        yPercent: 110,
        duration: DURATION.slow,
        stagger: 0.18,
        ease: EASE.inOutSlow,
      });
      if (attribRef.current) {
        tl.from(
          attribRef.current,
          { opacity: 0, y: 20, duration: DURATION.base, ease: EASE.outSoft },
          "-=0.4"
        );
      }
    }

    if (statsHeadRef.current) {
      const split = new SplitText(statsHeadRef.current, { type: "lines", mask: "lines" });
      gsap.from(split.lines, {
        scrollTrigger: { trigger: statsHeadRef.current, start: "top 80%" },
        yPercent: 110,
        duration: DURATION.slow,
        stagger: 0.15,
        ease: EASE.inOutSlow,
      });
    }
  });

  return (
    <>
      {/* Act I — Stage Dark, the quote */}
      <section
        data-palette="dark"
        data-act="1"
        className="relative min-h-screen flex flex-col justify-between overflow-hidden px-8 md:px-14 py-16"
      >
        <header className="flex items-start justify-between z-10">
          <div>
            <p className="text-[10px] tracking-[0.4em] font-mono opacity-60">
              ACT
            </p>
            <p
              className="italic text-5xl md:text-7xl font-serif mt-1"
              style={{ color: "var(--color-accent)" }}
            >
              I
            </p>
          </div>
          <p className="text-[10px] tracking-[0.4em] font-mono opacity-60 text-right">
            THE QUOTE
            <br />
            OPENING
          </p>
        </header>

        <div className="flex-1 flex items-center z-10">
          <div className="max-w-4xl">
            <span
              aria-hidden
              className="block font-serif italic text-7xl md:text-9xl leading-none mb-2 -ml-2"
              style={{ color: "var(--color-accent)" }}
            >
              &ldquo;
            </span>
            <p
              ref={quoteRef}
              className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.25] tracking-tight"
            >
              <em>如果能努力</em>十年、二十年，
              <br />
              影響的人會漸漸增加，
              <br />
              也可以長出台灣<em>自己鮮明的文化</em>。
            </p>
            <p
              ref={attribRef}
              className="mt-12 text-xs font-mono tracking-widest opacity-60"
            >
              — 袁浩程 / YUAN HAO-CHENG
              <br />
              RIDGE STUDIO FOUNDER
              <br />
              《樹冠 CANOPI》專訪 · 2024
            </p>
          </div>
        </div>

        <footer className="flex items-end justify-between z-10">
          <p className="text-[10px] tracking-[0.4em] font-mono opacity-40">
            IWARE × RIDGE STUDIO
          </p>
          <p className="text-[10px] tracking-[0.4em] font-mono opacity-40">
            PITCH · 2026
          </p>
        </footer>

        {/* Background giant numeral */}
        <div className="chapter-num text-[60vw] right-[-10vw] bottom-[-18vw]">
          01
        </div>
      </section>

      {/* Act I·b — Cream Paper, the statistics manifesto */}
      <section
        data-palette="cream"
        data-act="1b"
        className="relative min-h-screen overflow-hidden px-8 md:px-14 py-24"
      >
        <div className="chapter-num text-[55vw] -left-[8vw] top-[-14vw]">
          I.b
        </div>

        <div
          aria-hidden
          className="halftone-dots absolute top-0 right-0 w-64 h-64"
          style={{ color: "var(--color-accent)" }}
        />

        <header className="grid md:grid-cols-3 gap-4 mb-16 relative z-10">
          <div className="md:col-span-1">
            <p
              className="text-[10px] tracking-[0.4em] font-mono mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              ACT I · SCENE B
            </p>
            <p className="text-xs tracking-widest uppercase font-mono opacity-60">
              A PITCH PREPARED
            </p>
          </div>
          <div className="md:col-span-2 text-right">
            <p className="text-xs font-mono opacity-50 tracking-wider">
              一份做了功課的提案。
              <br />
              以下是它做過的功課。
            </p>
          </div>
        </header>

        <h2
          ref={statsHeadRef}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-16 relative z-10"
        >
          <span data-numeric className="italic mr-4" style={{ color: "var(--color-accent)" }}>
            <CountUp to={12} />
          </span>
          <em>works.</em>
          <br />
          <span data-numeric className="italic mr-4" style={{ color: "var(--color-accent)" }}>
            <CountUp to={4} />
          </span>
          <em>practices.</em>
          <br />
          <span data-numeric className="italic mr-4" style={{ color: "var(--color-accent)" }}>
            <CountUp to={180} />
          </span>
          <em>坪的倉庫。</em>
        </h2>

        <hr className="hairline-accent mb-12 relative z-10" />

        <div className="grid md:grid-cols-12 gap-8 mb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-5"
          >
            <p className="text-[10px] tracking-[0.4em] font-mono opacity-60 mb-4">
              BEHANCE ACCUMULATED
            </p>
            <p className="text-3xl md:text-5xl font-serif italic mb-2">
              <span data-numeric style={{ color: "var(--color-accent)" }}>
                <CountUp to={29260} />
              </span>
            </p>
            <p className="text-xs font-mono tracking-wider opacity-60 mb-4">
              VIEWS / 瀏覽
            </p>
            <div className="flex gap-8 text-sm">
              <span>
                <span data-numeric className="text-lg" style={{ color: "var(--color-accent)" }}>
                  <CountUp to={414} />
                </span>
                <span className="opacity-50 ml-2">APPRECIATIONS</span>
              </span>
              <span>
                <span data-numeric className="text-lg" style={{ color: "var(--color-accent)" }}>
                  <CountUp to={371} />
                </span>
                <span className="opacity-50 ml-2">FOLLOWERS</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-6 md:col-start-7 md:border-l md:pl-8"
            style={{ borderColor: "var(--color-border-subtle)" }}
          >
            <p className="text-[10px] tracking-[0.4em] font-mono opacity-60 mb-4">
              FURTHER READING
            </p>
            <ul className="space-y-3 font-serif text-lg italic">
              <li>《樹冠 Canopi》袁浩程深度專訪</li>
              <li>PeePo 公民新聞 · 山峸二手書店報導</li>
              <li>LINE TODAY · 北投中心新村《心窗》</li>
            </ul>
          </motion.div>
        </div>

        <hr className="hairline mb-16 relative z-10" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="font-serif text-3xl md:text-5xl italic relative z-10"
        >
          我們花了一週。
          <br />
          <span style={{ color: "var(--color-accent)" }}>然後寫了這份提案。</span>
        </motion.p>
      </section>
    </>
  );
}
