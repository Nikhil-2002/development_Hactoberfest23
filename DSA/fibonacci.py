"""
Fibonacci Sequence - Dynamic Programming Implementation

This file demonstrates different approaches to calculate Fibonacci numbers:
1. Naive recursive approach (exponential time)
2. Memoization approach (top-down dynamic programming)
3. Tabulation approach (bottom-up dynamic programming)
"""

def fibonacci_recursive(n):
    """
    Calculate the nth Fibonacci number using naive recursion.
    Time Complexity: O(2^n)
    Space Complexity: O(n) for recursion stack
    
    Args:
        n: Position in Fibonacci sequence (0-indexed)
        
    Returns:
        The nth Fibonacci number
    """
    if n <= 1:
        return n
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)

def fibonacci_memoization(n, memo=None):
    """
    Calculate the nth Fibonacci number using memoization (top-down DP).
    Time Complexity: O(n)
    Space Complexity: O(n)
    
    Args:
        n: Position in Fibonacci sequence (0-indexed)
        memo: Dictionary to store already computed values
        
    Returns:
        The nth Fibonacci number
    """
    if memo is None:
        memo = {}
    
    if n in memo:
        return memo[n]
    
    if n <= 1:
        return n
    
    memo[n] = fibonacci_memoization(n-1, memo) + fibonacci_memoization(n-2, memo)
    return memo[n]

def fibonacci_tabulation(n):
    """
    Calculate the nth Fibonacci number using tabulation (bottom-up DP).
    Time Complexity: O(n)
    Space Complexity: O(n)
    
    Args:
        n: Position in Fibonacci sequence (0-indexed)
        
    Returns:
        The nth Fibonacci number
    """
    if n <= 1:
        return n
    
    # Initialize table
    dp = [0] * (n + 1)
    dp[1] = 1
    
    # Fill the table
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]

def fibonacci_optimized(n):
    """
    Calculate the nth Fibonacci number using optimized space.
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    Args:
        n: Position in Fibonacci sequence (0-indexed)
        
    Returns:
        The nth Fibonacci number
    """
    if n <= 1:
        return n
    
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    
    return b

# Test cases
if __name__ == "__main__":
    n = 10  # 10th Fibonacci number
    
    print(f"Fibonacci({n}) using recursive approach:", fibonacci_recursive(n))
    print(f"Fibonacci({n}) using memoization:", fibonacci_memoization(n))
    print(f"Fibonacci({n}) using tabulation:", fibonacci_tabulation(n))
    print(f"Fibonacci({n}) using optimized approach:", fibonacci_optimized(n))
    
    # Expected output for n=10: 55