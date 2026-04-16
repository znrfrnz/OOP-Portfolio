export type MediaType = "screenshot" | "pdf" | "code" | "mixed";

export interface MidtermItem {
  id: number;
  code: string;
  title: string;
  mediaType: MediaType;
  src?: string;          // optional path to a file in /public, e.g. "/pdfs/midterm-exam.pdf"
}

export interface MidtermCategory {
  slug: string;
  partTag: string;
  label: string;
  items: MidtermItem[];
}

export const midtermCategories: MidtermCategory[] = [
  {
    slug: "seatwork",
    partTag: "Part 02",
    label: "Seatwork",
    items: [
      { id: 1, code: "SW·01", title: "Seatwork 1", mediaType: "code" },
      { id: 2, code: "SW·02", title: "Seatwork 2", mediaType: "code" },
      { id: 3, code: "SW·03", title: "Seatwork 3", mediaType: "code" },
    ],
  },
  {
    slug: "exam",
    partTag: "Part 04",
    label: "Midterm exam",
    items: [
      { id: 1, code: "EXAM", title: "Midterm exam", mediaType: "pdf", src: "" },
    ],
  },
];
