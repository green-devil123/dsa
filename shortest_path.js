class Graph{
    constructor(){
        this.adjList = {};

    }

    addEdges(edges, vertex){
        for(let i=1; i<=vertex; i++){
            this.adjList[i] = [];
        }

        for(let edge of edges){
            let [src, dest] = edge;
            this.adjList[src].push(dest);
            this.adjList[dest].push(src);
        }
    }

    printEdge(){
        console.log(this.adjList);
    }

    shortestPath(src){
        let visited = {};
        let parent = {};
        let queue = [];

        queue.push(src);
       
        parent[src] = -1;
        visited[src] = true;

        while (queue.length) {
            let node = queue.shift();

            for (const neighbour of this.adjList[node]) {
                if(!visited[neighbour]){
                    parent[neighbour] = node;
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            }

        }
        return parent;
    }

    getShortPath(parent, dest){
        
        let data = []
        while(dest != -1){
            data.unshift(dest);
            dest = parent[dest];
        }
        return data;
    }

}

let edges = [ [1,2],[1,3],[1,4],[2,5], [3,8], [4,6], [5,8], [6,7],[7,8] ];
let vertex = 8;
let graph = new Graph();

graph.addEdges(edges, vertex);
graph.printEdge();
const parent = graph.shortestPath(1);
const target = 8
const shortestPath = graph.getShortPath(parent, target);
console.log(shortestPath);













