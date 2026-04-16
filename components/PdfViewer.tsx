"use client";

import { useState } from "react";

function PdfPlaceholder({ tall = false }: { tall?: boolean }) {
  return (
    <div
      className={`rounded-xl border border-dashed border-white/[0.09] bg-white/[0.015]
        flex flex-col items-center justify-center gap-3 px-6 text-center
        transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.025]
        group/mp ${tall ? "py-16" : "py-10"}`}
    >
      <div className="text-[#525260]">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
          stroke="currentColor" strokeWidth="1.2"
          strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13,2 13,9 19,9" />
          <line x1="7" y1="13" x2="15" y2="13" />
          <line x1="7" y1="17" x2="12" y2="17" />
        </svg>
      </div>
      <div>
        <p className="text-[0.8125rem] font-medium text-[#7a7a88]">Add PDF</p>
        <p className="font-mono text-[10px] text-[#525260] mt-1.5 tracking-[0.14em] uppercase">
          PDF document
        </p>
      </div>
    </div>
  );
}

export default function PdfViewer({
  src,
  filename,
  tall = false,
}: {
  src?: string;
  filename?: string;
  tall?: boolean;
}) {
  const [fallback, setFallback] = useState(false);

  if (!src) return <PdfPlaceholder tall={tall} />;

  const displayName = filename ?? src.split("/").pop() ?? "document.pdf";
  const iframeHeight = tall ? 560 : 440;

  if (fallback) {
    return (
      <div
        className={`rounded-xl border border-white/[0.09] bg-white/[0.02]
          flex flex-col items-center justify-center gap-4 px-6 text-center
          ${tall ? "py-16" : "py-10"}`}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
          stroke="#525260" strokeWidth="1.2"
          strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13,2 13,9 19,9" />
          <line x1="7" y1="13" x2="15" y2="13" />
          <line x1="7" y1="17" x2="12" y2="17" />
        </svg>
        <p className="text-[#7a7a88] text-sm">{displayName}</p>
        <a
          href={src}
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
            text-[13px] font-medium text-[#4a9eff]
            border border-[#4a9eff]/30 bg-[#4a9eff]/[0.06]
            hover:bg-[#4a9eff]/[0.12] transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
            stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 2v8M4 7l4 4 4-4" />
            <path d="M2 13h12" />
          </svg>
          Open PDF
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.09] bg-[#0a0a0f]">
      {/* title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.07] bg-white/[0.02]">
        <div className="flex items-center gap-2.5 min-w-0">
          <svg width="13" height="13" viewBox="0 0 22 22" fill="none"
            stroke="#525260" strokeWidth="1.4"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M13 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <polyline points="13,2 13,9 19,9" />
          </svg>
          <span className="font-mono text-[11px] text-[#6a6a78] truncate">
            {displayName}
          </span>
        </div>
        <a
          href={src}
          download
          aria-label="Download PDF"
          className="flex items-center gap-1.5 px-3 py-1 rounded-md
            text-[11px] font-mono text-[#7a7a88]
            border border-white/[0.07] bg-white/[0.02]
            hover:text-[#a0a0b0] hover:border-white/[0.12] hover:bg-white/[0.04]
            transition-all duration-200 shrink-0"
        >
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none"
            stroke="currentColor" strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 2v8M4 7l4 4 4-4" />
            <path d="M2 13h12" />
          </svg>
          Download
        </a>
      </div>

      {/* iframe embed */}
      <iframe
        src={`${src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
        title={displayName}
        width="100%"
        height={iframeHeight}
        className="block bg-[#0a0a0f]"
        onError={() => setFallback(true)}
      />
    </div>
  );
}
