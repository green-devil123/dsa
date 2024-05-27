// class Graph{
//     constructor(){
//         this.adjList = {};
//     }

//     addEdges(edges, vertex){
//         for(let i=0;i<vertex;i++){
//             this.adjList[i+1] = [];
//         }        

//         for (const edge of edges) {
//             const [src, dest] = edge;
//             this.adjList[src].push(dest);
//         }
//     }

//     printGraph(){
//         console.log(this.adjList);
//     }

//     dfs(vertex, stack, visited, parent){
//         visited[vertex] = true;
//         for (const neighbour of this.adjList[vertex]) {
//             if(!visited[neighbour]){
//                 parent[neighbour] = vertex; // Record edge where the traversal happens
//                 this.dfs(neighbour, stack, visited, parent);
//             }
//         }
//         stack.push(vertex);
//     }

//     topologicalSort(){
//         let stack = [];
//         let visited = {};
//         let parent = {}; // To store edges where traversal happens
//         for(let vertex in this.adjList){
//             if(!visited[vertex]) this.dfs(vertex, stack, visited, parent);
//         }
//         return { order: stack.reverse(), parent };
//     }

//     isValidTopologicalOrder(order){
//         const orderIndex = {};
//         for(let i = 0; i < order.length; i++){
//             orderIndex[order[i]] = i;
//         }
//         for(const vertex in this.adjList){
//             for(const neighbour of this.adjList[vertex]){
//                 if(orderIndex[vertex] > orderIndex[neighbour]){
//                     return false; // Invalid ordering
//                 }
//             }
//         }
//         return true; // Valid ordering
//     }
// }

// const edges = [[1,2],[2,4],[1,3],[3,4], [4,5], [4,6],[5,6]];
// const vertex = 6;

// let graph = new Graph();

// graph.addEdges(edges, vertex);
// graph.printGraph();

// const { order, parent } = graph.topologicalSort();

// console.log("Topological Order:", order);
// console.log("Is valid topological order?", graph.isValidTopologicalOrder(order));

// // Get edges where the topological sorting happens
// console.log("Edges where topological sorting happens:");
// for (const vertex in parent) {
//     console.log(`Edge: ${parent[vertex]} -> ${vertex}`);
// }

class Graph{

    constructor(){
        this.adjList = {}
    }

    addEdges(edges, vertex){
        for(let i=0;i<vertex;i++){
            this.adjList[i] = [];
        }

        for(let edge of edges){
            let [src, dest] = edge;
            this.adjList[src].push(dest);
        }
    }

    printGraph(){
        console.log(this.adjList);
    }

    topological(){
        let stack = [];
        let visited = {};
        let indegree = {}
        for(let vertex in this.adjList){
            if(!visited[vertex])
            this.dfs(vertex, visited,stack, indegree);
        }
        // console.log(stack.reverse());
        return stack.reverse();
    }

    dfs(vertex, visited, stack){
        visited[vertex] = true;
        for(let neighbor of this.adjList[vertex]){
            if(!visited[neighbor]){
                visited[neighbor] = true;
                this.dfs(neighbor, visited, stack);
            }
        }
        stack.push(vertex);
    }

    validTopological(order){
        console.log(order);
        let visited = {};
        for(let vertex of order){
            visited[vertex] = true;
            for (const neighbor of this.adjList[vertex]) {
                console.log(neighbor)
                if(!visited[neighbor]){
                    return "not validTopological"
                }
            }
        }
        return "validTopological"
    }
}

const edges =  [[0, 1], [1, 2], [3, 1], [3, 2]]; 
const vertex = 4;

const graph = new Graph();

graph.addEdges(edges, vertex);
graph.printGraph();

const order = graph.topological();
console.log(graph.validTopological(order));