class Student {
    String name;
    int grade;

    Student(String n, int g) {
        name = n;
        grade = g;
    }
}

public class TestStudent {
    public static void main(String[] args) {

        Student s1 = new Student("John", 85);
        Student s2 = new Student("Maria", 90);
        Student s3 = s2;

        s1.grade = 95;
        s3.name = "Ana";

        System.out.println(s1.name + " " + s1.grade);
        System.out.println(s2.name + " " + s2.grade);
        System.out.println(s3.name + " " + s3.grade);
    }
}