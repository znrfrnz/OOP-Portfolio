import { type Quiz } from "@/lib/quiz";
import CodeBlock from "./CodeBlock";
import PdfViewer from "./PdfViewer";

export default function QuizRow({
  quiz,
  index,
  showMedia = false,
  codeOverride,
}: {
  quiz: Quiz;
  index: number;
  showMedia?: boolean;
  codeOverride?: string;
}) {
  const isEven = index % 2 === 1;
  const paddedNum = String(quiz.id).padStart(2, "0");

  return (
    <article className="relative py-16 md:py-24 border-t border-white/[0.09] overflow-hidden group">
      <div
        className={`text-stroke font-mono leading-none absolute top-1/2 -translate-y-1/2 text-[clamp(88px,11vw,148px)] ${
          isEven ? "right-4 md:right-8" : "left-4 md:left-8"
        }`}
        aria-hidden="true"
      >
        {paddedNum}
      </div>

      <div
        className={`relative z-10 flex flex-col gap-10 ${
          isEven ? "md:flex-row-reverse" : "md:flex-row"
        } items-start md:gap-16`}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[11px] text-[#6a6a78] tracking-[0.18em] uppercase">
              QZ.{paddedNum}
            </span>
            <span className="h-px w-8 bg-[#4a4a58]" />
          </div>
          <h3 className="text-2xl md:text-[1.75rem] font-semibold tracking-tight text-[#e8e8f4] mb-4">
            {quiz.title}
          </h3>
          <p className="text-[#9090a0] text-[0.9375rem] leading-relaxed mb-7 max-w-[50ch]">
            {quiz.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {quiz.concepts.map((concept) => (
              <span
                key={concept}
                className="px-3 py-1 rounded-full text-xs font-mono border border-white/[0.12] text-[#7a7a88] bg-white/[0.03] transition-colors duration-200 group-hover:border-white/[0.18] group-hover:text-[#a0a0b0]"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[420px] shrink-0">
          {(codeOverride ?? quiz.codePreview) && (
            <CodeBlock
              code={codeOverride ?? quiz.codePreview!}
              filename={`${quiz.slug}.java`}
            />
          )}
        </div>
      </div>

      {showMedia && quiz.src && (
        <div className="relative z-10 mt-10">
          <PdfViewer src={quiz.src} filename={`Quiz ${quiz.id}.pdf`} tall />
        </div>
      )}
    </article>
  );
}