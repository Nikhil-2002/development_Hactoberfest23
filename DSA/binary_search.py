"""
Binary Search Algorithm

Implementation of Binary Search algorithm to find an element in a sorted array.
Time complexity: O(log n)
"""

def binary_search(arr, target):
    """
    Search for target in a sorted array using binary search.
    
    Args:
        arr: Sorted list of elements
        target: Element to search for
        
    Returns:
        Index of target if found, -1 otherwise
    """
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Test cases
if __name__ == "__main__":
    # Test case 1
    arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    target1 = 7
    print(f"Array: {arr1}, Target: {target1}")
    print(f"Found at index: {binary_search(arr1, target1)}")
    
    # Test case 2
    arr2 = [1, 3, 5, 7, 9]
    target2 = 4
    print(f"Array: {arr2}, Target: {target2}")
    print(f"Found at index: {binary_search(arr2, target2)}")