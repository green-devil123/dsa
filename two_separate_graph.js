class Graph{
    constructor(){
        this.adjList = {};
    }

    addEdges(edges, vertex){
        
        for(let i=0;i<vertex;i++){
            this.adjList[i+1] = [];
        }        

        for (const edge of edges) {
            const [src, dest] = edge;
            this.adjList[src].push(dest);
        }

    }

    printGraph(){
        console.log(this.adjList);
    }

    dfs(vertex, visited={}, stack=[]){
        visited[vertex] = true;
        stack.push(vertex)
        for (const neighbour of this.adjList[vertex]) {
            if(!visited[neighbour])
            
            this.dfs(neighbour, visited,stack);
        }
    }

    separateComp(){
        let visited = {};
        let stack = [];
        for (const vertex in this.adjList) {
            if(!visited[vertex]) this.dfs(vertex, visited,stack);
        }
        return stack;
    }


}

const edges = [ [1,4], [4,6], [4,5], [2,9], [2,7], [8,3] ];
const vertex = 9;

let graph = new Graph();

graph.addEdges(edges, vertex);
graph.printGraph();
console.log(graph.separateComp());
