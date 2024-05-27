class Graph{
    constructor(){
        this.adjList = {};
    }

    addEdges(edges,vertex){
        for(let i = 1;i<=vertex;i++){
            this.adjList[i] = [];
        }
        
        for(let edge of edges){
            let [src, dest] = edge;
            this.adjList[src].push(dest);
        }
    }

    print(){
        console.log(this.adjList);
    }

    bfs(vertex, indegree){
       
        if(!indegree[vertex]) indegree[vertex] = 0;
        
        for(let neighbour of this.adjList[vertex]){
            indegree[neighbour] = (indegree[neighbour] || 0)+1
        }
    }

    topological(){
        let indegree = {}
        let queue = [];
        let topologicalOrder = [];
        
        for(let vertex in this.adjList){
            this.bfs(vertex, indegree);
        }

        for(let vertex in this.adjList){
            if(indegree[vertex] == 0) queue.push(vertex);
        }
        
        while (queue.length) {
            let node = queue.shift();
            topologicalOrder.push(node);

            for(let neighbour of this.adjList[node]){
                indegree[neighbour]--;
                if(indegree[neighbour] === 0) queue.push(neighbour)
            }
        }

        if (topologicalOrder.length !== Object.keys(this.adjList).length) {
            console.log("Graph has a cycle!");
            return;
        }

        console.log("Topological order:", topologicalOrder);
    }
}
let vertex = 9;
let edges = [[1,2],[2,3],[4,5],[5,6],[6,8],[7,8],[8,9]]

let graph = new Graph();


graph.addEdges(edges, vertex);
graph.print();
console.log(graph.topological())





