export interface Quiz {
    id: number;
    slug: string;
    title: string;
    description: string;
    concepts: string[];
    codePreview: string;
    src?: string;       // path to PDF in /public
    codeFile?: string;  // path to .java file relative to project root, e.g. "src/java/Student.java"
}

export const quizzes: Quiz[] = [
    {
        id: 1,
        slug: "quiz-1",
        title: "Quiz 1",
        description: "Description for Quiz 1",
        concepts: ["Concept 1", "Concept 2"],
        codePreview: `// code preview for Quiz 1`,
        src: "/pdfs/Quiz1.pdf",
        codeFile: "src/java/Quiz1.java",
    },
]