export type MediaType = "screenshot" | "pdf" | "code" | "mixed";

const CONFIGS: Record<MediaType, { label: string; hint: string }> = {
  screenshot: { label: "Add screenshot",   hint: "PNG · JPG · WEBP" },
  pdf:        { label: "Add PDF",           hint: "PDF document"     },
  code:       { label: "Add code file",     hint: ".java · Source"   },
  mixed:      { label: "Add media",         hint: "Screenshot · PDF · Code" },
};

function ScreenshotIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
      stroke="currentColor" strokeWidth="1.2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="1" width="20" height="15" rx="2" />
      <path d="M6 21h10M11 16v5" />
      <circle cx="11" cy="8" r="3" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
      stroke="currentColor" strokeWidth="1.2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="13,2 13,9 19,9" />
      <line x1="7" y1="13" x2="15" y2="13" />
      <line x1="7" y1="17" x2="12" y2="17" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
      stroke="currentColor" strokeWidth="1.2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15,17 21,11 15,5" />
      <polyline points="7,5 1,11 7,17" />
    </svg>
  );
}

function MixedIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
      stroke="currentColor" strokeWidth="1.2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z" />
      <polyline points="12,2 12,8 18,8" />
    </svg>
  );
}

const ICONS: Record<MediaType, () => React.JSX.Element> = {
  screenshot: ScreenshotIcon,
  pdf:        PdfIcon,
  code:       CodeIcon,
  mixed:      MixedIcon,
};

export default function MediaPlaceholder({
  type,
  tall = false,
}: {
  type: MediaType;
  tall?: boolean;
}) {
  const { label, hint } = CONFIGS[type];
  const Icon = ICONS[type];

  return (
    <div
      className={`rounded-xl border border-dashed border-white/[0.09] bg-white/[0.015]
        flex flex-col items-center justify-center gap-3 px-6 text-center
        transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.025]
        group/mp ${tall ? "py-16" : "py-10"}`}
    >
      <div className="text-[#525260] transition-colors duration-300 group-hover/mp:text-[#7a7a88]">
        <Icon />
      </div>
      <div>
        <p className="text-[0.8125rem] font-medium text-[#7a7a88] transition-colors duration-300 group-hover/mp:text-[#9a9aa8]">
          {label}
        </p>
        <p className="font-mono text-[10px] text-[#525260] mt-1.5 tracking-[0.14em] uppercase transition-colors duration-300 group-hover/mp:text-[#6a6a78]">
          {hint}
        </p>
      </div>
    </div>
  );
}
