"use client";

import { useEffect } from "react";

/**
 * Global scroll effects, mounted once per navigation (via app/template.tsx):
 * - reveals every [data-reveal] element when it enters the viewport
 * - applies a gentle parallax translate to [data-parallax] elements
 * Both are disabled for prefers-reduced-motion; parallax is skipped on mobile.
 */
export default function ScrollFx() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (reduced) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    revealEls.forEach((el) => io.observe(el));

    // Parallax — desktop only, transform-only, rAF-throttled.
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const parallaxEls = isMobile
      ? []
      : Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]")).map(
          (el) => ({
            el,
            factor: parseFloat(el.dataset.parallax || "0.15"),
            top: 0,
          }),
        );

    let raf = 0;
    const measure = () => {
      parallaxEls.forEach((p) => {
        p.el.style.transform = "";
        const rect = p.el.getBoundingClientRect();
        p.top = rect.top + window.scrollY;
      });
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        parallaxEls.forEach((p) => {
          p.el.style.transform = `translate3d(0, ${((y - p.top) * p.factor).toFixed(1)}px, 0)`;
        });
      });
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    if (parallaxEls.length) {
      measure();
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
    }

    return () => {
      io.disconnect();
      if (parallaxEls.length) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      }
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
