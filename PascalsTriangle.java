import java.util.Scanner;

public class PascalsTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = sc.nextInt(); 
        sc.close();

        for (int i = 0; i < n; i++) {
            
            for (int j = 0; j < n - i - 1; j++) {
                System.out.print("  ");
            }

            int num = 1; 
            for (int j = 0; j <= i; j++) {
                System.out.print(num + "   ");
                // Calculate next number in row using combination formula
                num = num * (i - j) / (j + 1);
            }
            System.out.println();
        }
    }
}
