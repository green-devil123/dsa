const graphs = {
    a:["b","d"],
    b:[],
    c:[],
    d:["e","g"],
    e:["c"],
    f:[],
    g:["f"]
}
function dfs(graph, start){

    let stack = [];
    let visited = [];

    stack.push(start);

    while(stack.length){
        let node = stack.pop();
        visited[node] = true;
        console.log(node);
        for(let neighbour of graph[node]){
            if(!visited[neighbour]){
                stack.push(neighbour);
            }
        }
    }
}
dfs(graphs, "a");


