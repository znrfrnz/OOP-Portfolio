public class OperatorsBaes {

    public static void main(String[] args) {
        // QUESTION 1
        // Output 1: true
        int a = 12;
        int b = 10;
        boolean result1 = (a | b) > b;
        System.out.println(result1);

        // Output 2: 10
        int c = 14;
        int d = 15;
        int result2 = ((c & d) >> 1) ^ 13;
        System.out.println(result2);

        // Output 3: false
        int e = 6;
        int f = 9;
        boolean result3 = (e ^ f) << 1 == 45;
        System.out.println(result3);

        // Output 4: 15
        int g = 5;
        int h = 10;
        int result4 = g | h;
        System.out.println(result4);

        // QUESTION 2
        // Output 1: true
        int a = 18;
        int b = 9;
        boolean result1 = (a > b) ? true : false;
        System.out.println(result1);

        // Output 2: false
        int c = 7;
        int d = 14;
        boolean result2 = (c == d) ? true : false;
        System.out.println(result2);

        // Output 3: 25
        int e = 50;
        int f = 50;
        int result3 = (e >= f) ? (e / 2) : (e * 2);
        System.out.println(result3);

        // Output 4: 30
        int g = 15;
        int h = 20;
        int result4 = (g != h) ? (g * 2) : (g + 2);
        System.out.println(result4);

        // QUESTION 3
         // Output 1: Addition: 120
        int a = 95;
        a += 25;
        System.out.println("Addition: " + a);

        // Output 2: Subtraction: 70
        int b = 90;
        b -= 20;
        System.out.println("Subtraction: " + b);

        // Output 3: Multiplication: 144
        int c = 12;
        c *= 12;
        System.out.println("Multiplication: " + c);

        // Output 4: Division: 16
        int d = 256;
        d /= 16;
        System.out.println("Division: " + d);
    }
}
