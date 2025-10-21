#include <stdio.h>

int main()   // use int main() instead of void main()
{
    int sp[4][4];
    int cm[3][100], i, j, k;

    printf("Enter a matrix in 4*4 order:\n");
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            scanf("%d", &sp[i][j]);
        }
    }

    printf("Entered matrix is:\n");
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            printf("%d\t", sp[i][j]);
        }
        printf("\n");
    }

    printf("\nEntered matrix in Sparse Matrix form:\n");
    k = 0;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (sp[i][j] != 0) {
                cm[0][k] = i;
                cm[1][k] = j;
                cm[2][k] = sp[i][j];
                k++;
            }
        }
    }

    for (i = 0; i < 3; i++) {
        for (j = 0; j < k; j++) {
            printf("%d ", cm[i][j]);
        }
        printf("\n");
    }

    return 0;   // instead of getch()
}