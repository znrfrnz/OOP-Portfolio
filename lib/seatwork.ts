export interface Seatwork {
  id: number;
  slug: string;
  title: string;
  description: string;
  concepts: string[];
  codePreview?: string;
  src?: string;
  codeFile?: string;
}

export const seatworks: Seatwork[] = [
  {
    id: 1,
    slug: "seatwork-1",
    title: "Tracking of Operation Statements",
    description: "I learnt that tracking and calculating operation statements with post and pre increment in Java requires careful attention to the order of evaluation. Pre-increment (++i) modifies the variable before it is used in an expression, meaning the updated value participates immediately in any calculation. Post-increment (i++), on the other hand, uses the current value in the expression first, then increments afterward. A subtle but critical difference that can lead to unexpected results if overlooked.",
    concepts: ["Pre-increment", "Post-increment", "Order of Evaluation"], 
  },
  {
    id: 2,
    slug: "seatwork-2",
    title: "Basic ATM System ",
    src: "/pdfs/atmSystem.pdf",
    codeFile: "/src/java/ATMTransactionCounterBaes.java",
    description: "Description for Seatwork 2",
    concepts: ["Control Flow"],
    codePreview: `// loading from src/java/ATMTransactionCounterBaes.java`,
  },
  {
    id: 3,
    slug: "seatwork-3",
    title: "Student Age Analyzer",
    src: "/pdfs/SW3.pdf",
    codeFile: "/src/java/StudentAgeAnalyzerBaes.java",
    description: "Description for Seatwork 3",
    concepts: ["User-defined methods"],
    codePreview: `// loading from /src/java/StudentAgeAnalyzerBaes.java`,
  },
]
