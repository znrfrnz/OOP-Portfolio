import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Finals — Franz Emmanuel F. Baes",
  description: "Finals outputs for OOP class. Coming soon.",
};

function PulsingDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4a9eff] opacity-50" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4a9eff]" />
    </span>
  );
}

export default function FinalsPage() {
  return (
    <>
      <Navbar />
      <main className="relative grid-bg min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">

        {/* Radial vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_50%_50%,transparent_30%,#0d0d12_100%)]" />

        <div className="relative max-w-[1400px] mx-auto w-full px-6 md:px-12 py-28 flex flex-col gap-10">

          {/* Display heading */}
          <div
            className="reveal"
            style={{ "--d": "1" } as React.CSSProperties}
          >
            <h1 className="font-serif italic text-[clamp(4.5rem,11vw,9rem)] leading-[0.88] tracking-tight text-[#f0f0f4]">
              Finals.
            </h1>
          </div>

          {/* Status + message */}
          <div
            className="reveal border-t border-white/[0.06] pt-8 flex flex-col gap-6 max-w-[480px]"
            style={{ "--d": "2" } as React.CSSProperties}
          >
            {/* Status badge */}
            <div className="flex items-center gap-2.5">
              <PulsingDot />
              <span className="font-mono text-[11px] text-[#4a9eff] tracking-[0.2em] uppercase">
                Under Construction
              </span>
            </div>

            <p className="text-[#7a7a88] text-[0.9375rem] leading-relaxed border-l-2 border-white/[0.08] pl-4">
              Midterm just wrapped up. This section will be filled with finals
              outputs — activities, seatwork, quizzes, and the final exam — once
              the finals period begins.
            </p>

            {/* Placeholder slots */}
            <div className="flex flex-col gap-3 pt-2">
              {["Activities", "Seatwork", "Quizzes", "Final Exam"].map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-between border border-white/[0.06] rounded px-4 py-3 bg-white/[0.02]"
                >
                  <span className="font-mono text-[11px] text-[#3a3a48] tracking-[0.15em] uppercase">
                    {label}
                  </span>
                  <span className="font-mono text-[10px] text-[#2e2e3a] tracking-[0.12em] uppercase">
                    — Pending
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
