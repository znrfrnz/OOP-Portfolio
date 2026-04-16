import java.util.Scanner;

public class SimpleWalletBaes {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double balance = 3000;
        int txnCount = 0;
        boolean active = true;

        while (active) {
            System.out.println("\n===== WALLET MENU =====");
            System.out.println("1. View Balance");
            System.out.println("2. Add Money");
            System.out.println("3. Spend Money");
            System.out.println("4. Exit");

            int choice = input.nextInt();

            switch (choice) {
                case 1:
                    txnCount++;
                    System.out.println("\nYour Balance is: " + balance);
                    break;
                case 2:
                    txnCount++;
                    System.out.print("\nEnter amount to add: ");
                    double moneyAmt = input.nextDouble();
                    balance = balance + moneyAmt;
                    System.out.print("Your new balance is: " + balance + "\n");
                    break;
                case 3:
                    System.out.print("\nEnter amount of money to spend: ");
                    double spendAmt = input.nextDouble();

                    if (spendAmt > 1000) {
                        System.out.print("Amount exceeds maximum limit!\n");
                    } else if (spendAmt > balance) {
                        System.out.println("Amount exceeds your balance\n");
                    } else {
                        balance = balance - spendAmt;
                        System.out.print("Your new balance is: " + balance);
                        txnCount++;
                    }
                    break;
                case 4:
                    active = false;
                    System.out.print("Exiting program..");
                    System.out.println(
                        "\nTotal successful transaction: " + txnCount
                    );
                    break;
                default:
                    System.out.print("Invalid input!");
            }
        }
    }
}
