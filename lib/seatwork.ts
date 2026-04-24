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
    description: "Implementing a basic ATM in Java was a solid exercise in control flow. Using a while loop with a switch statement to handle menu choices felt very natural once I mapped out the flow. Tracking the transaction count alongside the balance also gave me practice managing multiple pieces of state together.",
    concepts: ["Control Flow"],
    codePreview: `// loading from src/java/ATMTransactionCounterBaes.java`,
  },
  {
    id: 3,
    slug: "seatwork-3",
    title: "Student Age Analyzer",
    src: "/pdfs/SW3.pdf",
    codeFile: "/src/java/StudentAgeAnalyzerBaes.java",
    description: "This seatwork introduced me to writing user-defined methods in a meaningful way. Separating the age classification logic into its own method made the main flow much easier to read. It also showed me how breaking a problem into smaller functions leads to cleaner and more reusable code.",
    concepts: ["User-defined methods"],
    codePreview: `// loading from /src/java/StudentAgeAnalyzerBaes.java`,
  },
]
