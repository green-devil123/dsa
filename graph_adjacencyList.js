class Graph{
    constructor(){
        this.adj = {};
    }

    addEdge(u,v,dir){
        //dir = 0 -> undirect
        //dir = 1 -> direct
        if(!this.adj[u]){
            this.adj[u] = [];
        }
        this.adj[u].push(v);

        if(dir == 0){
            if(!this.adj[v]){
                this.adj[v] = [];
            }
            this.adj[v].push(u);
        }
    }

    printAdj(){
        for(let vertex in this.adj){
            console.log(`${vertex} -> ${this.adj[vertex]}`)
        }
    }
}
let graph = new Graph();
let m=3
graph.addEdge("A","B",0);
graph.addEdge("A","C",0);
graph.addEdge("C","D",0);
graph.addEdge("B","D",0);

graph.printAdj();