class Graph{
    constructor(edges, N){
        this.adjList = {};

        for(let i=0;i<N;i++){
            this.adjList[i] = [];
        }

        for (const edge of edges) {
            let [src, dest, weight] = edge;
            this.adjList[src].push([dest, weight]);
        }
    }

}

let edges = [ 
                [0,1,5],
                [0,2,3],
                [1,2,2],
                [1,3,6],
                [2,3,7],
                [2,4,4],
                [2,5,2],
                [3,4,-1],
                [4,5,-2]
            ] 
let N = 6;
let graphDet = new Graph(edges, N);
const graph = graphDet.adjList;


function dfs(graph, visited, dfsVisited, stack, vertex){
    for (const neighbor of graph[vertex]) {
        const [dest, weight] = neighbor;
        if(dfsVisited[dest] && visited[dest]){
            return;
        }else
        if(!visited[dest]){
            dfsVisited[dest] = true;
            visited[dest] = true;
            dfs(graph, visited, dfsVisited, stack, dest)
        }
    }
    dfsVisited[vertex]= false
    stack.push(vertex);
}

function topoogical(graph){
    let dfsVisited = {};
    let visited = {};
    let stack = [];

    for(const vertex in graph){
        if(!visited[vertex]){
            dfsVisited[vertex] = true;
            visited[vertex]  = true;
            dfs(graph, visited, dfsVisited, stack, vertex); 
        }
    }
    return stack;

}

function shortestPath(graph, topologicalOrder, src){

    let distance = new Array(Object.keys(graph).length).fill(Infinity);
    distance[src] = 0;
    console.log("topologicalOrder",topologicalOrder)
    while (topologicalOrder.length) {
        let top = topologicalOrder.pop();
        console.log(graph[top]);
        for(const neighbor of graph[top]){
            let [dest, weight] = neighbor;
            if(distance[top] + weight < distance[dest]){
                distance[dest] = distance[top] + weight;
            }
        }
    }
    return distance;
}
console.log(topoogical(graph, 1));
let topologicalOrder = topoogical(graph);

console.log(shortestPath(graph, topologicalOrder, 1));
