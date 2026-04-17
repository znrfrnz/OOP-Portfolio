import java.util.Scanner;

public class ExpenseTrackerBaes {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        displayTitle();

        System.out.print("Enter budget: ");
        double budget = scanner.nextDouble();

        System.out.print("Enter food expenses: ");
        double foodExpense = scanner.nextDouble();

        System.out.print("Enter transport expenses: ");
        double transportExpense = scanner.nextDouble();

        System.out.print("Enter other expenses: ");
        double otherExpense = scanner.nextDouble();

        System.out.print("Enter monthly subscription expenses: "); //enhancement 1
        double subsExpense = scanner.nextDouble();

        double totalExpense = calculateExpenses(
            foodExpense,
            transportExpense,
            otherExpense,
            subsExpense
        );
        String budgetStatus = checkBudget(totalExpense, budget);

        displayResult(totalExpense, budget, budgetStatus);

        scanner.close();
    }

    public static void displayTitle() {
        System.out.println("=== Expense Tracker ===\n");
    }

    public static double calculateExpenses(
        double foodExpense,
        double transportExpense,
        double otherExpense,
        double subsExpense
    ) {
        return foodExpense + transportExpense + otherExpense + subsExpense;
    }

    public static String checkBudget(double totalExpense, double budget) {
        double remainingBudget = budget - totalExpense; //ehancement 2
        if (totalExpense > budget) {
            return "Budget exceeded by: " + (totalExpense - budget);
        } else {
            return "Remaining budget: " + remainingBudget;
        }
    }

    public static void displayResult(
        double totalExpense,
        double budget,
        String budgetStatus
    ) {
        System.out.println("\n--- Results ---");
        System.out.println("Total Expenses : " + totalExpense);
        System.out.println("Budget         : " + budget);
        System.out.println(budgetStatus);
    }
}
