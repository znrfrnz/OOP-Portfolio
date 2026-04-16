import RevealOnScroll from "./RevealOnScroll";

export default function IntroSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
      <RevealOnScroll>
        <div className="py-16 md:py-24 border-t border-white/[0.05]">

          {/* Part label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] text-[#6a6a78] tracking-[0.22em] uppercase">
              Java OOP
            </span>
          </div>

          {/* Serif display heading */}
          <h2 className="font-serif italic text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] tracking-tight text-[#f0f0f4] mb-12">
            Intro.
          </h2>

          {/* Editorial two-column text */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-20 items-start max-w-[860px]">
            <div className="md:pt-1">
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#7a7a88] text-[0.9375rem] leading-[1.85] italic border-l-2 border-[#4a9eff]/25 pl-5">
                [ Introduce yourself here — your name, degree program, year level, and what this e-portfolio is about. ]
              </p>
              <p className="text-[#7a7a88] text-[0.9375rem] leading-[1.85] italic border-l-2 border-white/[0.09] pl-5">
                [ Second paragraph  reflect on your experience with Object-Oriented Programming or what you aim to document and demonstrate in this portfolio. ]
              </p>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
}
