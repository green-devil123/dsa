// class Graph{
//     constructor(){
//         this.adjList = new Map();
//     }

//     addEdges(vertex, edges){
//         for(let i=1;i<=vertex;i++){
//         this.adjList.set(i, [])
//         }

//         for(let edge of edges){
//             let [src, dest] = edge;
//             this.adjList.get(src).push(dest);
//         }
//     }

//     printEdges(){
//         for(let [k,v] of this.adjList){
//             console.log(`${k} -> ${v}`)
//         }

//     }

//     dfs(start,visited = {}, dfsVisited={}){
//         if(!start) return;
//         console.log(start);
        
//         visited[start] = true;
//         dfsVisited[start] = true;

//         for (const neighbour of this.adjList.get(start)) {
//             if(!visited[neighbour]){
//                 dfsVisited[neighbour] = true;
//                 this.dfs(neighbour,visited, dfsVisited);
//             }
//             else{
//                 if(visited[neighbour] && dfsVisited[neighbour]){
//                     console.log("cycle detected at", neighbour, start);
//                 }
//             }
//         }
//         dfsVisited[start] = false;
//     }


// }

// let vertex = 8;
// let edges = [ [1,2], [2,3], [2,4],[3,7] , [3,8], [4,5], [5,6], [6,4], [8,7]  ];

// const graph = new Graph();

// graph.addEdges( vertex, edges);

// graph.printEdges();

// graph.dfs(1);




var canFinish = function(numCourses, prerequisites) {
    let adjList = {};
    for(let i=0;i<numCourses;i++){
        adjList[i] = [];
    }
    for(let edge of prerequisites){
        let [src, dest] = edge;
        adjList[src].push(dest);
    }
    let dfsVisited = {};
    let visited = {};
    let topologicalOreder = [];
    for(let vertex in adjList){
        if(!visited[vertex]){
            dfsVisited[vertex] = true;
            visited[vertex] = true;
            dfs(adjList,vertex, visited, dfsVisited, topologicalOreder)
        }
    }
};

function dfs(adjList,vertex, visited, dfsVisited, topologicalOreder){
    for(let neighbor of adjList[vertex]){
        if(dfsVisited[neighbor] && visited[neighbor]){
            console.log("dadas");
            return false;
        }
       if(!visited[neighbor]){
            dfsVisited[vertex] = true;
            visited[vertex] = true;
            dfs(adjList,neighbor, visited, dfsVisited, topologicalOreder)
        }
    }
    dfsVisited[vertex] = false;
    topologicalOreder.push(vertex);
}
let numCourses = 4, prerequisites = [[0,1], [1,0]];
console.log(canFinish(numCourses, prerequisites))