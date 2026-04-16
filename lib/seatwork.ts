export interface Seatwork {
  id: number;
  slug: string;
  title: string;
  description: string;
  concepts: string[];
  codePreview: string;
  src?: string;
  codeFile?: string;
}

export const seatworks: Seatwork[] = [
  {
    id: 1,
    slug: "seatwork-1",
    title: "Seatwork 1",
    description: "Description for Seatwork 1",
    concepts: ["Concept 1", "Concept 2"],
    codePreview: `// code preview for Seatwork 1`,
  },
  {
    id: 2,
    slug: "seatwork-2",
    title: "Seatwork 2",
    description: "Description for Seatwork 2",
    concepts: ["Concept 1", "Concept 2"],
    codePreview: `// code preview for Seatwork 2`,
  },
  {
    id: 3,
    slug: "seatwork-3",
    title: "Seatwork 3",
    description: "Description for Seatwork 3",
    concepts: ["Concept 1", "Concept 2"],
    codePreview: `// code preview for Seatwork 3`,
  },
]
