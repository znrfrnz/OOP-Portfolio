import java.util.Scanner;

public class ATMTransactionCounterBaes {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double balance = 8000;
        int txnCount = 0;
        boolean active = true;

        System.out.println("----------------------------------");
        System.out.println("   Good day! ATM is now ready.   ");
        System.out.println("----------------------------------");

        while (active) {
            System.out.println("\n===== ATM MENU =====");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Exit");
            System.out.println("====================");
            System.out.print("Enter choice: ");

            int choice = input.nextInt();

            switch (choice) {
                case 1:
                    txnCount++;
                    System.out.println("\nBalance = " + balance);
                    break;
                case 2:
                    txnCount++;
                    System.out.print("Enter deposit amount: ");
                    double depositAmt = input.nextDouble();
                    balance = balance + depositAmt;
                    System.out.println("Deposit successful!");
                    System.out.println("New Balance = " + balance);
                    break;
                case 3:
                    txnCount++;
                    System.out.print("Enter withdrawal amount: ");
                    double withdrawAmt = input.nextDouble();

                    if (withdrawAmt > 2000) {
                        System.out.println("Exceeds maximum withdrawal.");
                        System.out.println(
                            "Limit is 2,000 pesos per transaction only."
                        );
                    } else if (withdrawAmt > balance) {
                        System.out.println("Insufficient balance.");
                        System.out.println(
                            "Your current balance is only: " + balance
                        );
                    } else {
                        balance = balance - withdrawAmt;
                        System.out.println("Withdrawal successful!");
                        System.out.println("New Balance = " + balance);
                    }
                    break;
                case 4:
                    active = false;
                    System.out.println("\n----------------------------------");
                    System.out.println("Transaction Count: " + txnCount);
                    System.out.println("Thank you for using the ATM!");
                    System.out.println("----------------------------------");
                    break;
                default:
                    System.out.println(
                        "Invalid choice. Please enter 1 to 4 only."
                    );
            }
        }

        input.close();
    }
}
