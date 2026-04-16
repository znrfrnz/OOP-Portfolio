import fs from "fs";
import path from "path";
import { quizzes } from "@/lib/quiz";
import QuizRow from "./QuizRow";
import RevealOnScroll from "./RevealOnScroll";

export default function QuizzesSection({
  partTag = "Part 01",
  sectionTitle = "Quizzes",
  showMedia = false,
}: {
  partTag?: string;
  sectionTitle?: string;
  showMedia?: boolean;
}) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
      <RevealOnScroll>
        <div className="py-14 border-b border-white/[0.05]">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] text-[#6a6a78] tracking-[0.22em] uppercase">
              {partTag}
            </span>
          </div>
          <h2 className="font-serif italic text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-tight text-[#f0f0f4]">
            {sectionTitle}.
          </h2>
        </div>
      </RevealOnScroll>

      {quizzes.map((quiz, index) => {
        let codeOverride: string | undefined;
        if (quiz.codeFile) {
          try {
            codeOverride = fs.readFileSync(
              path.join(process.cwd(), quiz.codeFile),
              "utf-8"
            );
          } catch {
            // file not found — fall back to codePreview
          }
        }
        return (
          <RevealOnScroll key={quiz.id}>
            <QuizRow
              quiz={quiz}
              index={index}
              showMedia={showMedia}
              codeOverride={codeOverride}
            />
          </RevealOnScroll>
        );
      })}
    </div>
  );
}