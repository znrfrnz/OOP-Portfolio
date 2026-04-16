export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] max-w-[1400px] mx-auto px-6 md:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2 text-[#52525e]">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="0.75" y="0.75" width="14.5" height="14.5" rx="3.25"
              stroke="currentColor" strokeWidth="1.1" />
            <path d="M4.5 8.5h3M8 5.5l3.5 3-3.5 3"
              stroke="currentColor" strokeWidth="1.1"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase">
            F.E.F.B
          </span>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <span className="font-mono text-[11px] text-[#4a4a58]">
            OOP Subject · AY 2025–2026
          </span>
          <span className="h-3 w-px bg-[#3a3a48] hidden md:block" />
          <span className="font-mono text-[11px] text-[#4a4a58]">
            Java SE · Object-Oriented Programming
          </span>
        </div>
      </div>
    </footer>
  );
}
