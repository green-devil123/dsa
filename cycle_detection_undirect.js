class Graph{
    constructor(){
        this.adjList = new Map();
    }

    addEdges(vertex, edges){
        for(let i=1;i<=vertex;i++){
        this.adjList.set(i, [])
        }

        for(let edge of edges){
            let [src, dest] = edge;
            this.adjList.get(src).push(dest);
            this.adjList.get(dest).push(src);
        }
    }

    printEdges(){
        for(let [k,v] of this.adjList){
            console.log(`${k} -> ${v}`)
        }

    }

    bfs_queue(start){

        let queue = [];
        let visited = {};
        let parent = {};
        queue.push(start);
        parent[start] = -1;

        while(queue.length){
            const node = queue.shift();
            for (const neighbour of this.adjList.get(node)) {
                if(visited[neighbour] && parent[node] != neighbour){
                    console.log(`Cycle detected ${node} ${neighbour}`);
                    return;
                }else{
                    if(!visited[neighbour]){
                        queue.push(neighbour);
                        visited[neighbour] = true;
                        parent[neighbour] = node;
                    }
                }
            }
        }
        console.log("Not Detected");
        
    }


}

let vertex = 9;
let edges = [ [1,2] , [2,3]  , [4,5] , [5,6] , [5,7] , [6,8]  , [7,8] , [8,9]  ];

const graph = new Graph();

graph.addEdges( vertex, edges);

graph.printEdges();

graph.bfs_queue(4);




