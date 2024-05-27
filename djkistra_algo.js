class Graph{
	constructor(edges, N){
        this.adjList = {};
        this.distance = new Array(N).fill(Infinity);
        
        for(let i=0; i<N ; i++){
            this.adjList[i] = [];
        }

        for(let edge of edges){
            const [src, dest, weight] = edge;
            this.adjList[src].push([dest, weight]);
            this.adjList[dest].push([src, weight]);
        }
    }
}

let edges = [ [0,1,7] , [0,2,1], [0,3,2], [1,2,3], [1,4,1], [1,3,5], [3,4,7]];
let N = 5;
const graphDet = new Graph(edges, N);

let graph = graphDet.adjList;
let distance = graphDet.distance;
const src = 1;

function minShortestDistanceVertex(visited, src, distance){
	let minVertex  = -1;
	let min = Infinity;

	for(let i in distance){
		if(! visited.has(i) && distance[i]< min){
	        minVertex = i;
	        min = distance[i];
        }
    }
    return minVertex;
}

function djikstraAlgo(graph, N, src, distance){
	distance[src] = 0;
	let visited = new Set();
	let dist = distance;
    while(visited.size < N ){
        const u = minShortestDistanceVertex(visited, src, distance);	
        visited.add(u);
        for(let neighbor of graph[u]){
            let [dest, weight] = neighbor;
            if(distance[u]+weight < distance[dest]){
                distance[dest] = distance[u]+weight
            }
        }
    }
    return distance;
}
console.log(djikstraAlgo(graph, N, src, distance));


