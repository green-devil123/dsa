const graphs = {
    a:["b","d"],
    b:[],
    c:[],
    d:["e","g"],
    e:["c"],
    f:[],
    g:["f"]
}
function bfs(graph, queue,visited={}){
    if(queue.length == 0)return;

    let node = queue.shift();
    console.log(node);
    if(!visited[node]) visited[node] = true;
    for(let neighbour of graph[node]){
        if(!visited[neighbour]){
            queue.push(neighbour);
        }
    }
    bfs(graph, queue,visited)
}

bfs(graphs, ["a"]);