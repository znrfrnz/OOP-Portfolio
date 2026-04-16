export type TokenType =
  | "keyword"
  | "type"
  | "string"
  | "comment"
  | "annotation"
  | "number"
  | "text";

export interface Token {
  type: TokenType;
  text: string;
}

const KEYWORDS = new Set([
  "public", "private", "protected", "class", "extends", "implements",
  "interface", "abstract", "static", "final", "void", "return", "new",
  "this", "super", "if", "else", "for", "while", "try", "catch", "finally",
  "throw", "throws", "boolean", "true", "false", "null", "default",
]);

const TYPES = new Set([
  "String", "int", "double", "float", "long", "char", "Integer", "Double",
  "ArrayList", "List", "Map", "Object", "Shape", "Circle", "Rectangle",
  "Triangle", "Student", "GradStudent", "BankAccount", "Media",
  "Playable", "Override",
  "InsufficientFundsException", "RuntimeException",
]);

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < line.length) {
    // Line comment
    if (line.startsWith("//", i)) {
      tokens.push({ type: "comment", text: line.slice(i) });
      break;
    }

    // Annotation
    if (line[i] === "@") {
      let j = i + 1;
      while (j < line.length && /\w/.test(line[j])) j++;
      tokens.push({ type: "annotation", text: line.slice(i, j) });
      i = j;
      continue;
    }

    // String literal
    if (line[i] === '"') {
      let j = i + 1;
      while (j < line.length && line[j] !== '"') {
        if (line[j] === "\\") j++;
        j++;
      }
      tokens.push({ type: "string", text: line.slice(i, j + 1) });
      i = j + 1;
      continue;
    }

    // Number
    if (/[0-9]/.test(line[i]) && (i === 0 || !/\w/.test(line[i - 1]))) {
      let j = i;
      while (j < line.length && /[0-9.]/.test(line[j])) j++;
      tokens.push({ type: "number", text: line.slice(i, j) });
      i = j;
      continue;
    }

    // Identifier — keyword, type, or plain name
    if (/[a-zA-Z_]/.test(line[i])) {
      let j = i;
      while (j < line.length && /\w/.test(line[j])) j++;
      const word = line.slice(i, j);
      if (KEYWORDS.has(word)) {
        tokens.push({ type: "keyword", text: word });
      } else if (TYPES.has(word)) {
        tokens.push({ type: "type", text: word });
      } else {
        tokens.push({ type: "text", text: word });
      }
      i = j;
      continue;
    }

    // Any other character — merge into last text token
    const last = tokens[tokens.length - 1];
    if (last && last.type === "text") {
      last.text += line[i];
    } else {
      tokens.push({ type: "text", text: line[i] });
    }
    i++;
  }

  return tokens;
}

export function highlightJava(code: string): Token[][] {
  return code.split("\n").map(tokenizeLine);
}
