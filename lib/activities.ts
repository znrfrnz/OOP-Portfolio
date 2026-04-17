export interface Activity {
  id: number;
  slug: string;
  title: string;
  description: string;
  concepts: string[];
  codePreview: string;
  src?: string;       // path to PDF in /public
  codeFile?: string;  // path to .java file relative to project root, e.g. "src/java/Student.java"
}

export const activities: Activity[] = [
  {
    id: 1,
    slug: "classes-objects",
    title: "Variables, Classes & Objects",
    src: "/pdfs/Activity%231_Baes_franzEmmanuel.pdf",
    codeFile: "src/java/TestStudent.java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    concepts: ["Classes", "Objects", "Constructors", "Instance Variables"],
    codePreview: `// loading from src/java/TestStudent.java`,
  },
  {
    id: 2,
    slug: "operators",
    title: "Operators",
    codeFile: "src/java/OperatorsBaes.java",
    src: "/pdfs/BIST2-1_Baes_FranzEmmanuel_Activity%232%20-%20Operators.pdf",
    description:
      "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    concepts: ["Operators", "Expressions", "Pre/Post Increment", "Operator Precedence"],
    codePreview: `// loading from src/java/OperatorsBaes.java`,
  },
  {
    id: 3,
    slug: "simple-wallet-system",
    title: "Simple Wallet System",
    codeFile: "src/java/SimpleWalletBaes.java",
    src: "/pdfs/SimpleWallet.pdf",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    concepts: ["Classes", "Methods", "Conditionals", "Basic OOP Design"],
    codePreview: `// loading from src/java/SimpleWalletBaes.java`,
  },
  {
    id: 4,
    slug: "grade-evaluation-system",
    title: "Grade Evaluation System",
    codeFile: "src/java/GradeEvaluationBaes.java",
    src: "/pdfs/GradeEvalBaes.pdf",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    concepts: ["Classes", "Methods", "Conditionals", "OOP Design"],
    codePreview: `// loading from src/java/GradeEvaluationBaes.java`,
  },
  {
    id: 5,
    slug: "personal-expense-tracker",
    title: "Personal Expense Tracker",
    codeFile: "src/java/ExpenseTrackerBaes.java",
    src: "/pdfs/ExpenseTrackerBaes.pdf",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    concepts: ["Methods", "Code Organization", "OOP Design"],
    codePreview: `// loading from src/java/ExpenseTrackerBaes.java`,
  },
];
