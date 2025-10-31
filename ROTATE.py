# Function to rotate a N x M matrix by 90 degrees in clockwise direction
def rotateMatrix(mat):
    n = len(mat)
    m = len(mat[0])
    new_mat = [[0] * n for _ in range(m)]
    for i in range(n):
        for j in range(m):
            new_mat[j][n - i - 1] = mat[i][j]
    return new_mat

# Function to print the matrix
def displayMatrix(mat):
    n = len(mat)
    m = len(mat[0])
    for i in range(n):
        for j in range(m):
            print(mat[i][j], end=" ")
        print()
    print()

# Driver code
if __name__ == "__main__":
    # Test Case 1
    mat = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ]

    # Function call to rotate matrix
    mat = rotateMatrix(mat)

    # Print rotated matrix
    displayMatrix(mat)
