// Activity 1 — Classes & Objects
// Replace this with your actual submitted code.

public class Student {
  private String name;
  private int studentId;
  private double gpa;

  public Student(String name, int id) {
    this.name      = name;
    this.studentId = id;
    this.gpa       = 0.0;
  }

  public String getName()        { return name;      }
  public int    getId()          { return studentId; }
  public double getGpa()         { return gpa;       }
  public void   setGpa(double g) { this.gpa = g;     }

  @Override
  public String toString() {
    return name + " (ID: " + studentId + ")";
  }
}

public class Main {
  public static void main(String[] args) {
    Student s1 = new Student("John", 101);
    Student s2 = new Student("Ann",  102);
    Student s3 = new Student("Anu",  103);
    s1.setGpa(95); s2.setGpa(90); s3.setGpa(90);
    System.out.println(s1 + " | GPA: " + s1.getGpa());
    System.out.println(s2 + " | GPA: " + s2.getGpa());
    System.out.println(s3 + " | GPA: " + s3.getGpa());
  }
}
