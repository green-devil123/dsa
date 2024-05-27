class Graph{
    
    constructor(){
        this.adj = {};
    }

    addEdges(u,v){
        if(!this.adj[u]){
            this.adj[u] = [];
        }
        this.adj[u].push(v);

        if(!this.adj[v]){
            this.adj[v] = [];
        }
        this.adj[v].push(u);
    }

    printEdges(){
        for(let vertex in this.adj){
            console.log(`${vertex} -> ${this.adj[vertex]}`);
        }
        this.dfs(this.adj, 2);
        this.bfs(this.adj, 2);
    }

    dfs(graph, start){
        console.log("==========");
        let stack = [];
        let visited = {};
        stack.push(start);
        while(stack.length){
            let node = stack.pop();
            console.log(node);
            if(!visited[node]) visited[node] = true;
            for(let neighbour of graph[node])
            {
                if(!visited[neighbour]) stack.push(neighbour)
            }
        }
    }

    bfs(graphs, start){
        console.log("==========");
        let queue = [];
        let visited = {};
        queue.push(start);
        while(queue.length){
            let node  = queue.shift();
            console.log(node);
            if(!visited[node]) visited[node] = true;

            for(let neighbour of graphs[node]){
                if(!visited[neighbour])
                queue.push(neighbour);
            }
        }
    }
}

let m=3;
let edges = [[2,0],[1,2]]

const graph = new Graph();

for(let edge of edges){
    let src = edge[0];
    let dest = edge[1];
    graph.addEdges(src, dest);
}

graph.printEdges();