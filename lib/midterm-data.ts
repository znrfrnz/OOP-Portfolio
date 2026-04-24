export type MediaType = "screenshot" | "pdf" | "code" | "mixed";

export interface MidtermItem {
  id: number;
  code: string;
  title: string;
  description?: string;
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
    slug: "exam",
    partTag: "Part 04",
    label: "Midterm exam",
    items: [
      { id: 1, code: "EXAM", title: "Midterm exam", description: "The exam was easy (i think), i did not review a lot since i was confident. I hope my score did well. It covered the topics we discussed in class, including OOP principles, Control Flow, and other related concepts.", mediaType: "pdf", src: "" },
    ],
  },
];
