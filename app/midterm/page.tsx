import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import MediaPlaceholder, { type MediaType } from "@/components/MediaPlaceholder";
import PdfViewer from "@/components/PdfViewer";
import ActivitiesSection from "@/components/ActivitiesSection";
import MidtermTabNav from "@/components/midterm/TabNav";
import { midtermCategories, type MidtermItem } from "@/lib/midterm-data";

export const metadata: Metadata = {
  title: "Midterm — Franz Emmanuel F. Baes",
  description: "Midterm quizzes, seatwork, activities, and exam for OOP.",
};

/* ─── Item card for quiz / seatwork items ─── */
function ItemCard({ item }: { item: MidtermItem }) {
  return (
    <div className="flex flex-col gap-5 border-t border-white/[0.09] pt-8 pb-4 group">
      <div>
        <span className="font-mono text-[10px] text-[#6a6a78] tracking-[0.18em] uppercase">
          {item.code}
        </span>
        <h3 className="font-serif italic text-[clamp(1.25rem,2.5vw,1.75rem)] leading-tight text-[#e8e8f4] mt-1.5">
          {item.title}
        </h3>
      </div>
      <p className="text-[#7a7a88] text-[0.875rem] leading-relaxed border-l-2 border-white/[0.12] pl-4 italic">
        [ Add your description here. ]
      </p>
      {item.mediaType === "pdf"
        ? <PdfViewer src={item.src} filename={item.title} />
        : <MediaPlaceholder type={item.mediaType} />}
    </div>
  );
}

/* ─── Featured exam card (full-width, split layout) ─── */
function ExamCard({ item }: { item: MidtermItem }) {
  return (
    <div className="border-t border-white/[0.05] pt-8 pb-4 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 items-start">
      <div className="flex flex-col gap-5">
        <div>
          <span className="font-mono text-[10px] text-[#6a6a78] tracking-[0.18em] uppercase">
            {item.code}
          </span>
          <h3 className="font-serif italic text-2xl md:text-3xl leading-tight text-[#e8e8f4] mt-2">
            {item.title}
          </h3>
        </div>
        <p className="text-[#7a7a88] text-[0.9375rem] leading-relaxed border-l-2 border-[#4a9eff]/35 pl-4 italic max-w-[44ch]">
          [ Add your exam reflection, score, or notes here. ]
        </p>
      </div>
      {item.mediaType === "pdf"
        ? <PdfViewer src={item.src} filename={item.title} tall />
        : <MediaPlaceholder type={item.mediaType} tall />}
    </div>
  );
}

/* ─── Section header ─── */
function SectionHeader({ partTag, label }: { partTag: string; label: string }) {
  return (
    <RevealOnScroll>
      <div className="py-14 border-b border-white/[0.09] flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] text-[#6a6a78] tracking-[0.22em] uppercase">
              {partTag}
            </span>
          </div>
          <h2 className="font-serif italic text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.9] tracking-tight text-[#f0f0f4]">
            {label}
          </h2>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function MidtermPage() {
  const quizzes  = midtermCategories.find((c) => c.slug === "quizzes")!;
  const seatwork = midtermCategories.find((c) => c.slug === "seatwork")!;
  const exam     = midtermCategories.find((c) => c.slug === "exam")!;

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Page header ── */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 border-b border-white/[0.09]">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[11px] text-[#6a6a78] tracking-[0.22em] uppercase">
                OOP Portfolio
              </span>
            </div>
            <h1 className="font-serif italic text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] tracking-tight text-[#f0f0f4]">
              Midterm
            </h1>
            <p className="text-[#9090a0] text-[0.9375rem] mt-4 max-w-[44ch] leading-relaxed">
              Quizzes, seatwork, activities, and the midterm exam — documented with outputs and reflections.
            </p>
          </RevealOnScroll>
        </div>

        {/* ── Sticky tab nav ── */}
        <MidtermTabNav />

        {/* ── Quizzes ── */}
        <section id="quizzes" className="max-w-[1400px] mx-auto px-6 md:px-12 scroll-mt-36">
          <SectionHeader partTag={quizzes.partTag} label={quizzes.label} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 pb-8">
            {quizzes.items.map((item) => (
              <RevealOnScroll key={item.id}>
                <ItemCard item={item} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ── Seatwork ── */}
        <section id="seatwork" className="max-w-[1400px] mx-auto px-6 md:px-12 scroll-mt-36">
          <SectionHeader partTag={seatwork.partTag} label={seatwork.label} />
          {/* First item spans full width (featured), next two in a row */}
          <RevealOnScroll>
            <ItemCard item={seatwork.items[0]} />
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {seatwork.items.slice(1).map((item) => (
              <RevealOnScroll key={item.id}>
                <ItemCard item={item} />
              </RevealOnScroll>
            ))}
          </div>
          <div className="pb-8" />
        </section>

        {/* ── Activities ── */}
        <section id="activities" className="scroll-mt-36">
          <ActivitiesSection
            partTag="Part 03"
            sectionTitle="Activities"
            showMedia
          />
        </section>

        {/* ── Exam ── */}
        <section id="exam" className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32 scroll-mt-36">
          <SectionHeader partTag={exam.partTag} label={exam.label} />
          <RevealOnScroll>
            <ExamCard item={exam.items[0]} />
          </RevealOnScroll>
        </section>

      </main>
      <Footer />
    </>
  );
}
