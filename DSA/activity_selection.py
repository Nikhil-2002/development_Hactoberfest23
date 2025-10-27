"""
Activity Selection Problem - Greedy Algorithm Implementation

The activity selection problem is a classic example of a greedy algorithm.
Given a set of activities with start and finish times, find the maximum
number of activities that can be performed by a single person, assuming
that a person can only work on a single activity at a time.
"""

def activity_selection(start_times, finish_times):
    """
    Find the maximum number of activities that can be performed.
    
    Args:
        start_times: List of start times for each activity
        finish_times: List of finish times for each activity
        
    Returns:
        List of indices of selected activities
    """
    # Create a list of activities with their start and finish times
    activities = list(zip(range(len(start_times)), start_times, finish_times))
    
    # Sort activities by finish time
    activities.sort(key=lambda x: x[2])
    
    # Select the first activity
    selected = [activities[0][0]]
    last_finish_time = activities[0][2]
    
    # Consider the rest of the activities
    for i in range(1, len(activities)):
        # If the start time of this activity is greater than or equal to
        # the finish time of the previously selected activity, select it
        if activities[i][1] >= last_finish_time:
            selected.append(activities[i][0])
            last_finish_time = activities[i][2]
    
    return selected

# Test cases
if __name__ == "__main__":
    # Example 1
    start_times1 = [1, 3, 0, 5, 8, 5]
    finish_times1 = [2, 4, 6, 7, 9, 9]
    
    selected1 = activity_selection(start_times1, finish_times1)
    print("Selected activities (indices):", selected1)
    print("Number of activities selected:", len(selected1))
    
    # Example 2
    start_times2 = [10, 12, 20]
    finish_times2 = [20, 25, 30]
    
    selected2 = activity_selection(start_times2, finish_times2)
    print("\nSelected activities (indices):", selected2)
    print("Number of activities selected:", len(selected2))