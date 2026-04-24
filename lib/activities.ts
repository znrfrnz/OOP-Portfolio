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
      "This was my first real hands-on with classes and objects in Java. It helped me understand how a class acts as a blueprint and how objects are created from it. Defining constructors and instance variables made a lot more sense once I saw them working together in a simple Student program.",
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
      "Working through operators in Java was more nuanced than I expected. The difference between pre and post increment tripped me up at first, but tracing through the expressions step by step made it click. Understanding operator precedence also helped me avoid a lot of subtle bugs.",
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
      "Building a simple wallet system pushed me to think about how to organize logic into methods properly. Handling deposits, withdrawals, and balance checks as separate responsibilities made the code feel cleaner and more structured. It was a good early exercise in thinking like an OOP programmer.",
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
      "This activity made me think carefully about how to translate grading rules into conditional logic. Breaking it into a class with dedicated methods kept things readable. It also reinforced how important clear boundaries between data and behavior are in OOP.",
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
      "The expense tracker was the most practical activity so far. Keeping track of multiple expenses and computing totals forced me to think about data organization and method design. It felt like a realistic mini-project and made OOP feel more useful beyond textbook examples.",
    concepts: ["Methods", "Code Organization", "OOP Design"],
    codePreview: `// loading from src/java/ExpenseTrackerBaes.java`,
  },
];
