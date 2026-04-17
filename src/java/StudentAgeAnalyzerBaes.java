import java.util.Scanner;

public class StudentAgeAnalyzerBaes {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Student Name: ");
        String name = scanner.nextLine();

        System.out.print("Enter student age: ");
        int age = scanner.nextInt();

        String category = AgeCatergory(age);

        System.out.println("Student name: " + name);
        System.out.println("Student Age: " + age);
        System.out.println("Age Category: " + category);
    }

    public static String AgeCatergory(int age) {
        if (age >= 0 && age <= 12) {
            return "Child";
        } else if (age >= 13 && age <= 19) {
            return "Teenager";
        } else if (age >= 20 && age <= 59) {
            return "Adult";
        } else if (age > 60) {
            return "Senior Citizen";
        } else {
            return "Invalid Input";
        }
    }
}
