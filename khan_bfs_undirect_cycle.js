class Graph{
	constructor(){
	    this.adjList = {};
    }

    addEdges(edges, vertex){
        
        for(let i=0;i<vertex;i++){
            this.adjList[i+1] = [];
        }

        for(const edge of edges){
            let [src, dest] = edge;
            this.adjList[src].push(dest);
            this.adjList[dest].push(src);
        }
    }

    printGraph(){
        console.log(this.adjList);
    }

    bfs(vertex,stack=[], visited={}, indegree  ={}){
        let queue = [];
        queue.push(vertex);
        indegree[vertex] = 0;

        while (queue.length) {
            let node = queue.shift();
            if(!visited[node])visited[node] = true;
            for(let neighbour of this.adjList[node]){
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    indegree[vertex]++;
                    queue.push(neighbour);
                }
            }
            stack.push(node);
        }
    }

    kahnTopological(){
        let stack = [];
        let visited = {};
        let indegree = {};
        for(let vertex in this.adjList){
            this.bfs(vertex, stack, visited,indegree);
        }   
        console.log(stack);
        
    }
}


let vertex = 9;
let edges = [ [1,2] , [2,3]  , [4,5] , [5,6] , [5,7] , [6,8]  , [7,8] , [8,9]  ];

let graph = new Graph();

graph.addEdges(edges, vertex);
graph.printGraph();

graph.bfs(4);
graph.kahnTopological();