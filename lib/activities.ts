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
    title: "Classes & Objects",
    src: "/pdfs/Activity%231_Baes_franzEmmanuel.pdf",
    codeFile: "src/java/classes-objects.java",
    description:
      "Built a foundational Student Records system that introduces the core pillars of object-oriented design — defining class blueprints, instantiating objects, and managing state through constructors and instance variables.",
    concepts: ["Classes", "Objects", "Constructors", "Instance Variables", "this keyword"],
    codePreview: `public class Student {
  private String name;
  private int studentId;
  private double gpa;

  public Student(String name, int id) {
    this.name      = name;
    this.studentId = id;
    this.gpa       = 0.0;
  }

  public String getName()      { return name;      }
  public int    getId()        { return studentId; }
  public double getGpa()       { return gpa;       }
  public void   setGpa(double g) { this.gpa = g;  }

  @Override
  public String toString() {
    return name + " (ID: " + studentId + ")";
  }
}

public class Main {
  public static void main(String[] args) {
    Student s1 = new Student("John",  101);
    Student s2 = new Student("Ann",   102);
    Student s3 = new Student("Anu",   103);
    s1.setGpa(95); s2.setGpa(90); s3.setGpa(90);
    System.out.println(s1 + " | GPA: " + s1.getGpa());
    System.out.println(s2 + " | GPA: " + s2.getGpa());
    System.out.println(s3 + " | GPA: " + s3.getGpa());
  }
}`,
  },
  {
    id: 2,
    slug: "inheritance",
    title: "Inheritance Hierarchy",
    src: "/pdfs/BIST2-1_Baes_FranzEmmanuel_Activity%232%20-%20Operators.pdf",
    description:
      "Designed a University Member hierarchy demonstrating single and multi-level inheritance chains. Explored how derived classes extend base behavior using the extends keyword and super() constructor calls.",
    concepts: ["Inheritance", "extends", "super()", "Method Overriding", "IS-A Relationship"],
    codePreview: `public class OperatorsDemo {
  public static void main(String[] args) {
    int a = 15, b = 4;

    // Arithmetic operators
    System.out.println(a + b);   // 19
    System.out.println(a - b);   // 11
    System.out.println(a * b);   // 60
    System.out.println(a / b);   // 3
    System.out.println(a % b);   // 3

    // Relational operators
    System.out.println(a > b);   // true
    System.out.println(a == b);  // false
    System.out.println(a != b);  // true

    // Logical operators
    boolean x = true, y = false;
    System.out.println(x && y);  // false
    System.out.println(x || y);  // true
    System.out.println(!x);      // false

    // Assignment shorthand
    a += 5;   // a = 20
    b *= 3;   // b = 12
    System.out.println(a + " " + b);
  }
}`,
  },
  {
    id: 3,
    slug: "polymorphism",
    title: "Polymorphism",
    src: "/pdfs/BSIT2-1_Baes_FranzEmmanuel_Activity%233%20-%20Basic%20ATM%20System.pdf",
    description:
      "Implemented a Shape computation engine showcasing runtime polymorphism. A single interface drives multiple concrete types, demonstrating how method overriding enables flexible, extensible system design.",
    concepts: ["Runtime Polymorphism", "Method Overloading", "Upcasting", "Dynamic Dispatch"],
    codePreview: `public class ATM {
  private String owner;
  private double balance;

  public ATM(String owner, double initial) {
    this.owner   = owner;
    this.balance = initial;
  }

  public void deposit(double amount) {
    if (amount <= 0) {
      System.out.println("Invalid amount.");
      return;
    }
    balance += amount;
    System.out.printf("Deposited: %.2f%n", amount);
  }

  public void withdraw(double amount) {
    if (amount > balance) {
      System.out.println("Insufficient funds.");
      return;
    }
    balance -= amount;
    System.out.printf("Withdrawn: %.2f%n", amount);
  }

  public void checkBalance() {
    System.out.printf("%s | Balance: %.2f%n",
        owner, balance);
  }
}`,
  },
  {
    id: 4,
    slug: "encapsulation",
    title: "Encapsulation",
    description:
      "Created a Banking System that enforces strict data hiding through access modifiers. The design ensures internal state is only mutated through validated setter methods, preventing illegal state transitions.",
    concepts: ["Access Modifiers", "Getters/Setters", "Data Hiding", "Validation Logic"],
    codePreview: `public class BankAccount {
  private final String owner;
  private double balance;

  public BankAccount(String owner, double init) {
    this.owner   = owner;
    this.balance = init;
  }

  public boolean deposit(double amt) {
    if (amt <= 0) return false;
    this.balance += amt;
    return true;
  }

  public boolean withdraw(double amt) {
    if (amt <= 0 || amt > balance) return false;
    this.balance -= amt;
    return true;
  }

  public String  getOwner()   { return owner;   }
  public double  getBalance() { return balance; }

  @Override
  public String toString() {
    return owner + ": PHP " + balance;
  }
}`,
  },
  {
    id: 5,
    slug: "interfaces-abstract",
    title: "Interfaces & Abstract Classes",
    description:
      "Explored the contract-based programming model using interfaces and abstract classes to define shared behavior across a Multimedia Library, separating specification from implementation.",
    concepts: ["interface", "abstract", "implements", "Design Contracts", "default methods"],
    codePreview: `public interface Playable {
  void play();
  void pause();
  void rewind();

  default void stop() {
    pause();
    rewind();
  }
}

public abstract class Media implements Playable {
  protected String title;
  protected int    durationSecs;

  public Media(String title, int secs) {
    this.title        = title;
    this.durationSecs = secs;
  }

  public String getTitle()    { return title; }
  public int    getDuration() { return durationSecs; }

  public abstract String getType();
}`,
  },
  {
    id: 6,
    slug: "exception-handling",
    title: "Exception Handling",
    description:
      "Built a robust Transaction Processor with a custom exception hierarchy, demonstrating defensive programming through structured try-catch blocks, custom RuntimeExceptions, and finalization logic.",
    concepts: ["try-catch-finally", "Custom Exceptions", "throw/throws", "RuntimeException"],
    codePreview: `public class InsufficientFundsException
    extends RuntimeException {
  private final double shortfall;

  public InsufficientFundsException(double s) {
    super(String.format("Short by PHP %.2f", s));
    this.shortfall = s;
  }

  public double getShortfall() { return shortfall; }
}

public class TransactionProcessor {
  public void process(BankAccount acc, double amt) {
    try {
      if (amt > acc.getBalance())
        throw new InsufficientFundsException(
            amt - acc.getBalance());
      acc.withdraw(amt);
      System.out.println("Transaction OK.");
    } catch (InsufficientFundsException e) {
      System.out.println("Failed: " + e.getMessage());
    } finally {
      System.out.println("Audit log written.");
    }
  }
}`,
  },
];
