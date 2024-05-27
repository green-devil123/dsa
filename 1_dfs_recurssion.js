const graphs = {
    a:["b","d"],
    b:[],
    c:[],
    d:["e","g"],
    e:["c"],
    f:[],
    g:["f"]
}
function dfs(graph, start, visited={}){
    if(!visited[start]) visited[start] = true;
    console.log(start);
    for(let neighbour of graph[start]){
        if(! visited[neighbour]){
            dfs(graph, neighbour, visited)
        }
    }
}
dfs(graphs, "a")
