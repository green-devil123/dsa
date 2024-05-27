let graph = {
	a: ["b" , "c" ,"d"],
	b: ["e"],
	c: ["f"],
	d: ["f"],
	e: ["f"],
	f:  [],
}

function isPathExist(graph, src, des){
    if(!src && !des && !graph[src] && !graph[des]) return false
    if(src == des) return true;
    for(let neighbour of graph[src]){
        if(isPathExist(graph, neighbour, des)){
            return true
        }
    }
    return false;

}
console.log(isPathExist(graph, "a","f"));