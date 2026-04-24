export interface Quiz {
    id: number;
    slug: string;
    title: string;
    description: string;
    concepts: string[];
    codePreview?: string;
    src?: string;       // path to PDF in /public
    codeFile?: string;  // path to .java file relative to project root, e.g. "src/java/Student.java"
}

export const quizzes: Quiz[] = [
    {
        id: 1,
        slug: "quiz-1",
        title: "Quiz 1",
        description: "I did decent on this quiz, but I could have done better. I only skimmed through the material and was pretty lucky to get some of the answers right.",
        concepts: ["Java Basics", "History of Java"],
    
        
    },
        {
        id: 2,
        slug: "quiz-2",
        title: "Quiz 2",
        description: "I did well on this quiz, the time limit was a bit tight, but I was able to answer most of the questions correctly. The quiz was quiet challenging, but I think I have a good grasp of the concepts covered.",
        concepts: ["OOP Principles", "Java Syntax"],
    
        
    },
]