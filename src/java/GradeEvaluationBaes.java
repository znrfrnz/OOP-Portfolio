public class GradeEvaluationBaes {

    public static void main(String[] args) {
        double prelim = 85;
        double midterm = 78;
        double finals = 90;

        double average = (prelim + midterm + finals) / 3;

        String remark;
        if (average >= 90 && average <= 100) {
            remark = "Excellent";
        } else if (average >= 80 && average <= 89) {
            remark = "Good";
        } else if (average >= 75 && average <= 79) {
            remark = "Fair";
        } else {
            remark = "Failed";
        }
        System.out.printf("\nPrelim Grade  : %.0f%n", prelim);
        System.out.printf("Midterm Grade : %.0f%n", midterm);
        System.out.printf("Final Grade   : %.0f%n", finals);
        System.out.println("-----------------------------------");
        System.out.printf("Average       : %.2f%n", average);
        System.out.println("Remark        : " + remark);
    }
}
