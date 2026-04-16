"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
  { href: "#quizzes",    label: "Quizzes"    },
  { href: "#seatwork",   label: "Seatwork"   },
  { href: "#activities", label: "Activities" },
  { href: "#exam",       label: "Exam"       },
];

export default function MidtermTabNav() {
  const [active, setActive]   = useState("quizzes");
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const idleTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── section tracking ───────────────────────────── */
  useEffect(() => {
    const ids = TABS.map((t) => t.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-20% 0px -65% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── scroll hide / show ──────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const y     = window.scrollY;
      const delta = y - lastScrollY.current;

      if (Math.abs(delta) > 6) {
        // hide when scrolling down past the hero zone
        setVisible(delta < 0 || y < 160);
        lastScrollY.current = y;
      }

      // re-surface after 1.6 s of idle scroll
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setVisible(true), 1600);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    /* outer wrapper: pointer-events-none so the transparent gap
       above/below the pill never blocks content clicks              */
    <div
      className={`
        fixed top-[86px] inset-x-0 z-40 flex justify-center
        pointer-events-none
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
      `}
    >
      <nav
        aria-label="Midterm sections"
        className="
          pointer-events-auto
          flex items-center gap-1 p-1.5
          rounded-2xl
          bg-[#0d0d12]/80 backdrop-blur-xl
          border border-white/[0.09]
          shadow-[0_16px_48px_-8px_rgba(0,0,0,0.64)]
        "
      >
        {TABS.map((tab) => {
          const id       = tab.href.replace("#", "");
          const isActive = active === id;
          return (
            <a
              key={tab.href}
              href={tab.href}
              className={`
                relative shrink-0 px-5 py-2 rounded-[10px]
                text-[13px] font-medium
                transition-all duration-200
                ${isActive
                  ? "text-[#f0f0f4] bg-white/[0.08]"
                  : "text-[#7a7a88] hover:text-[#c0c0cc] hover:bg-white/[0.04]"
                }
              `}
            >
              {tab.label}
              {isActive && (
                <span className="
                  absolute bottom-[5px] left-1/2 -translate-x-1/2
                  w-[18px] h-[2px] rounded-full bg-[#4a9eff]
                " />
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
