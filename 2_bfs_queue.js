const graphs = {
    '0': [ 1, 2, 3 ],
    '1': [ 0, 2 ],
    '2': [ 0, 1, 3 ],
    '3': [ 0, 2 ],
    '4': []
  }
function bfs_queue(graph, start){
    if(!start && !graph[start]) return;

    let queue = [];
    let visited = {};
    
    queue.push(start);

    while(queue.length){

        let node = queue.shift();
        console.log(node);
        visited[node] = true;

        for(let neighbour of graph[node]){
            if(!visited[neighbour])
            queue.push(neighbour);
        }

    }
}
bfs_queue(graphs,"a");