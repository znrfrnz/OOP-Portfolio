import MagneticButton from "./MagneticButton";
import TerminalMockup from "./TerminalMockup";

function ArrowRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M2.5 6.5h8M7 2.5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative grid-bg min-h-[100dvh] flex items-center overflow-hidden">
      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_50%_50%,transparent_30%,#0d0d12_100%)]" />

      <div className="relative max-w-[1400px] mx-auto w-full px-6 md:px-12 py-28">
        <div className="grid grid-cols-1 md:grid-cols-[42%_58%] gap-12 md:gap-4 items-center">

          {/* ── Left: Terminal (image side like Linear) ── */}
          <div
            className="reveal flex justify-center md:justify-start"
            style={{ "--d": "0" } as React.CSSProperties}
          >
            <TerminalMockup />
          </div>

          {/* ── Right: Editorial text ── */}
          <div className="flex flex-col gap-8 md:pl-10">

            {/* Serif display heading */}
            <div className="reveal" style={{ "--d": "1" } as React.CSSProperties}>
              <h1 className="font-serif italic text-[clamp(4rem,9vw,8rem)] leading-[0.88] tracking-tight text-[#f0f0f4]">
                OOP Portfolio.
              </h1>
            </div>

            {/* Metadata + CTA */}
            <div
              className="reveal border-t border-white/[0.05] pt-6 flex flex-col gap-5"
              style={{ "--d": "3" } as React.CSSProperties}
            >
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { label: "Name",     val: "Franz Emmanuel F. Baes" },
                  { label: "Section",  val: "BSIT 2-1"            },
                  { label: "Subject",  val: "OOP · 2nd Sem"          },
                ].map(({ label, val }) => (
                  <div key={label}>
                    <div className="font-mono text-[10px] text-[#525260] uppercase tracking-widest mb-0.5">
                      {label}
                    </div>
                    <div className="text-[13px] text-[#8a8a9a]">{val}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <MagneticButton href="/midterm" variant="primary">
                  View Midterm
                  <ArrowRightIcon />
                </MagneticButton>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
