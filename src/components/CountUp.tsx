"use client";

import { useEffect, useRef } from "react";
import { gsap, DURATION, EASE } from "@/lib/gsap";

export function CountUp({
  to,
  format,
  duration = DURATION.slow,
}: {
  to: number;
  format?: (n: number) => string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          observer.disconnect();
          const obj = { val: 0 };
          gsap.to(obj, {
            val: to,
            duration,
            ease: EASE.outSoft,
            onUpdate: () => {
              if (node) {
                node.textContent = format
                  ? format(Math.round(obj.val))
                  : Math.round(obj.val).toLocaleString("en-US");
              }
            },
          });
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration, format]);

  return (
    <span ref={ref} data-numeric>
      0
    </span>
  );
}
