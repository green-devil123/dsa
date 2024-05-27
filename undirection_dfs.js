let graph = {
	a: ["b" , "c" ,"d"],
	b: ["e"],
	c: ["f"],
	d: ["f"],
	e: ["f"],
	f:  [],
}

function isPathExist(graph, src, des, visited={}){
    if(!src && !des && !graph[src] && !graph[des]) return false;
    console.log(src);
    if(src == des) return true;
    if(!visited[src]){
        visited[src] = true;
        for(let neighbour of graph[src]){
            if(!visited[neighbour]){
                if(isPathExist(graph, neighbour, des, visited)){
                    return true;
                }
            }
        }
        return false;
    }
}
console.log(isPathExist(graph, "a","j"));