import { highlightJava, type Token } from "@/lib/highlight";

const TERMINAL_CODE = `public class Portfolio {
  private final String author;
  private final int activities;

  public Portfolio(String author) {
    this.author = author;
    this.activities = 6;
  }

  public String getAuthor() {
    return this.author;
  }

  public int count() {
    return this.activities;
  }
}`;

const TOKEN_COLORS: Record<string, string> = {
  keyword: "#4a9eff",
  type: "#7dd3fc",
  string: "#86efac",
  comment: "#525259",
  annotation: "#c084fc",
  number: "#fdba74",
  text: "#c0c0c8",
};

export default function TerminalMockup() {
  const lines = highlightJava(TERMINAL_CODE);

  return (
    <div className="float w-full max-w-[420px]">
      <div className="rounded-2xl overflow-hidden border border-white/[0.09] bg-[#0f0f14] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.05] bg-[#111116]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-4 flex-1 font-mono text-[11px] text-[#48484f] text-center">
            Portfolio.java
          </span>
          <span className="font-mono text-[10px] text-[#3a3a44]">Java</span>
        </div>

        {/* Code body */}
        <div className="flex text-xs font-mono leading-[1.75]">
          {/* Line numbers */}
          <div className="select-none px-3 py-4 text-right border-r border-white/[0.04] text-[#3a3a44] min-w-[36px]">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
            <div>{lines.length + 1}</div>
          </div>

          {/* Code content */}
          <pre className="flex-1 px-4 py-4 overflow-x-auto">
            {lines.map((lineTokens: Token[], i: number) => (
              <div key={i} className="whitespace-pre">
                {lineTokens.length === 0
                  ? "\u00a0"
                  : lineTokens.map((token: Token, j: number) => (
                      <span
                        key={j}
                        style={{ color: TOKEN_COLORS[token.type] ?? "#c0c0c8" }}
                      >
                        {token.text}
                      </span>
                    ))}
              </div>
            ))}
            {/* Blinking cursor on last line */}
            <div className="whitespace-pre text-[#c0c0c8]">
              {"  "}
              <span className="cursor-blink inline-block w-[7px] h-[13px] bg-[#4a9eff] rounded-[1px] align-middle opacity-80" />
            </div>
          </pre>
        </div>
      </div>
    </div>
  );
}
