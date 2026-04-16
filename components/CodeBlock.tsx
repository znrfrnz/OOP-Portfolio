import { highlightJava, type Token } from "@/lib/highlight";

const TOKEN_COLORS: Record<string, string> = {
  keyword: "#4a9eff",
  type: "#7dd3fc",
  string: "#86efac",
  comment: "#525259",
  annotation: "#c084fc",
  number: "#fdba74",
  text: "#b0b0bc",
};

export default function CodeBlock({
  code,
  filename,
}: {
  code: string;
  filename?: string;
}) {
  const lines = highlightJava(code);

  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.07] bg-[#0f0f14] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">
      {/* Header bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.05] bg-[#111116]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/60" />
        {filename && (
          <span className="ml-3 font-mono text-[10px] text-[#3a3a44]">
            {filename}
          </span>
        )}
      </div>

      {/* Code area — scrollable vertically and horizontally */}
      <div className="overflow-auto max-h-[480px]">
        <div className="flex text-[11px] font-mono leading-[1.75] min-w-max">
          {/* Line numbers */}
          <div className="sticky left-0 select-none px-3 py-4 text-right text-[#3a3a44] border-r border-white/[0.04] min-w-[32px] bg-[#0f0f14]">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Highlighted code */}
          <pre className="flex-1 px-4 py-4">
            {lines.map((lineTokens: Token[], i: number) => (
              <div key={i} className="whitespace-pre">
                {lineTokens.length === 0
                  ? "\u00a0"
                  : lineTokens.map((token: Token, j: number) => (
                      <span
                        key={j}
                        style={{ color: TOKEN_COLORS[token.type] ?? "#b0b0bc" }}
                      >
                        {token.text}
                      </span>
                    ))}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
}
