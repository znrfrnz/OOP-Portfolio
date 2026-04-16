import RevealOnScroll from "./RevealOnScroll";

export default function IntroSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
      <RevealOnScroll>
        <div className="py-16 md:py-24 border-t border-white/[0.05]">

          {/* Top: label + heading */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] text-[#6a6a78] tracking-[0.22em] uppercase">
              About
            </span>
            <span className="h-px w-5 bg-[#4a4a58]" />
            <span className="font-mono text-[10px] text-[#525260] tracking-widest uppercase">
              Introduction
            </span>
          </div>

          <h2 className="font-serif italic text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-tight text-[#f0f0f4] mb-14">
            Intro.
          </h2>

          {/* Two-column text */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-20 items-start">
            <div className="md:pt-1" />

            <div className="flex flex-col gap-6 max-w-[65ch]">
              <div className="border-l-2 border-[#4a9eff]/25 pl-5">
                <p className="text-[#7a7a88] text-[0.9375rem] leading-[1.85] italic">
                  [ Introduce yourself and your background in programming. Share your journey in learning Object-Oriented Programming, any prior experience you had, and what motivated you to create this portfolio. ]
                </p>
              </div>
              <div className="border-l-2 border-white/[0.09] pl-5">
                <p className="text-[#7a7a88] text-[0.9375rem] leading-[1.85] italic">
                  [ Second paragraph  reflect on your experience with Object-Oriented Programming or what you aim to document and demonstrate in this portfolio. ]
                </p>
              </div>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
}
