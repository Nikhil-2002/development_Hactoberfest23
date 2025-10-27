"""
Graph Breadth-First Search (BFS)

Implementation of Breadth-First Search algorithm for graph traversal.
"""

from collections import deque

def bfs(graph, start):
    """
    Perform breadth-first search on a graph.
    
    Args:
        graph: Dictionary representing adjacency list of the graph
        start: Starting vertex
        
    Returns:
        List of vertices in BFS order
    """
    # Initialize visited set and result list
    visited = set([start])
    result = [start]
    
    # Initialize queue with start vertex
    queue = deque([start])
    
    # Process vertices in queue
    while queue:
        # Dequeue a vertex
        vertex = queue.popleft()
        
        # Process all neighbors
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                result.append(neighbor)
                queue.append(neighbor)
    
    return result

def shortest_path_bfs(graph, start, end):
    """
    Find shortest path between start and end vertices using BFS.
    
    Args:
        graph: Dictionary representing adjacency list of the graph
        start: Starting vertex
        end: Ending vertex
        
    Returns:
        Shortest path as a list of vertices, or None if no path exists
    """
    # Check for edge cases
    if start == end:
        return [start]
    
    # Keep track of visited vertices and their parents
    visited = {start: None}
    queue = deque([start])
    
    # BFS traversal
    while queue:
        vertex = queue.popleft()
        
        # Check all neighbors
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited[neighbor] = vertex
                queue.append(neighbor)
                
                # If we found the end vertex, reconstruct the path
                if neighbor == end:
                    path = [end]
                    while path[-1] != start:
                        path.append(visited[path[-1]])
                    return path[::-1]  # Reverse to get path from start to end
    
    # No path found
    return None

# Test cases
if __name__ == "__main__":
    # Example graph represented as an adjacency list
    graph = {
        'A': ['B', 'C'],
        'B': ['A', 'D', 'E'],
        'C': ['A', 'F'],
        'D': ['B'],
        'E': ['B', 'F'],
        'F': ['C', 'E']
    }
    
    print("BFS starting from vertex 'A':", bfs(graph, 'A'))
    
    # Test shortest path
    start_vertex = 'A'
    end_vertex = 'F'
    path = shortest_path_bfs(graph, start_vertex, end_vertex)
    
    if path:
        print(f"Shortest path from {start_vertex} to {end_vertex}:", ' -> '.join(path))
    else:
        print(f"No path exists from {start_vertex} to {end_vertex}")