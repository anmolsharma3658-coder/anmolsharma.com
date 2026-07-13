"use client";

import { useEffect, useRef, useState } from "react";

// Splits "$775.6M" → ["$", "775.6", "M"]. Values whose prefix ends in a letter
// or hyphen (e.g. "ERC-3643") are rendered statically — counting them up would
// read as nonsense.
const NUM_RE = /^([\s\S]*?)(\d[\d,]*(?:\.\d+)?)([\s\S]*)$/;

type Props = {
  value: string;
  className?: string;
  duration?: number;
};

export default function CountUp({ value, className, duration = 900 }: Props) {
  const match = value.match(NUM_RE);
  const animatable = !!match && !/[A-Za-z-]$/.test(match[1]);
  const prefix = animatable ? match![1] : "";
  const suffix = animatable ? match![3] : "";
  const target = animatable ? parseFloat(match![2].replace(/,/g, "")) : 0;
  const decimals =
    animatable && match![2].includes(".") ? match![2].split(".")[1].length : 0;
  const grouped = animatable && match![2].includes(",");

  const ref = useRef<HTMLSpanElement>(null);
  const fromRef = useRef(0);
  const rafRef = useRef(0);
  const seenRef = useRef(false);
  const [text, setText] = useState(value);

  useEffect(() => {
    if (!animatable) {
      setText(value);
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(value);
      fromRef.current = target;
      return;
    }

    const format = (n: number) =>
      prefix +
      n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: grouped,
      }) +
      suffix;

    const run = () => {
      cancelAnimationFrame(rafRef.current);
      const from = fromRef.current;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setText(format(from + (target - from) * eased));
        if (p < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          fromRef.current = target;
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    if (seenRef.current) {
      run();
      return () => cancelAnimationFrame(rafRef.current);
    }

    setText(value);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          seenRef.current = true;
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
