
import java.util.*;

class MultiStageGraph {

    static final int N = 8;  // Size of the graph
    static final int INF = Integer.MAX_VALUE; // Infinite distance

    // Returns the shortest distance from node 0 to node N-1
    public static int shortestDist(int[][] graph) {
        int[] dist = new int[N];
        dist[N - 1] = 0;  // Distance to the destination is 0

        // Calculate shortest paths from N-2 to 0
        for (int i = N - 2; i >= 0; i--) {
            dist[i] = INF;  // Initialize distance

            // Check all nodes in the next stages
            for (int j = i + 1; j < N; j++) {
                if (graph[i][j] != INF) {  // Check for edge existence
                    dist[i] = Math.min(dist[i], graph[i][j] + dist[j]);
                }
            }
        }
        return dist[0];  // Return the shortest distance from 0 to N-1
    }

    // Driver code
    public static void main(String[] args) {
        int[][] graph = {
            { INF, 1, 2, 5, INF, INF, INF, INF },
            { INF, INF, INF, INF, 4, 11, INF, INF },
            { INF, INF, INF, INF, 9, 5, 16, INF },
            { INF, INF, INF, INF, INF, INF, 2, INF },
            { INF, INF, INF, INF, INF, INF, INF, 18 },
            { INF, INF, INF, INF, INF, INF, INF, 13 },
            { INF, INF, INF, INF, INF, INF, INF, 2 }
        };

        System.out.println("The shortest distance from node 0 to node " + (N - 1) + " is: " + shortestDist(graph));
    }
}
