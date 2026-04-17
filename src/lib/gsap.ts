"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, Flip);
}

export const DURATION = {
  fast: 0.4,
  base: 0.8,
  slow: 1.5,
  dramatic: 2,
} as const;

export const EASE = {
  outSoft: "power1.out",
  inOutSlow: "power2.inOut",
  sineInOut: "sine.inOut",
  slow: "slow(0.5, 0.8)",
} as const;

export { gsap, ScrollTrigger, SplitText, DrawSVGPlugin, Flip };
