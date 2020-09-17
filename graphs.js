class Graph {
    constructor () {
        this.nodes = {};
        this.edges = {};
    }

    addNode(identifier, value) {
        if (this.nodes[identifier]) {
            throw new Error('Node exists already!')
        }
        this.nodes[identifier] = value;
    }

    addEdge(startNode, endNode) { 
        if (!this.nodes[startNode] || !this.nodes[endNode]) {
            throw new Error("Start and End doesn't exist")
        }

        if (this.edges[startNode] && !this.edges[startNode].has(endNode)) {
            this.edges[startNode].add(endNode);
        } else {
            this.edges[startNode] = new Set([endNode]);
        }
    }
    removeNode(nodeIdentifier) {
        this.nodes[nodeIdentifier] = undefined;
        Reflect.deleteProperty(this.edges, nodeIdentifier);
        for (const edgeIdentifier in this.edges) {
            this.edges[edgeIdentifier].delete(nodeIdentifier);
        }
    }

    removeEdge(startNode, endNode) {
       
        if (!this.edges[startNode] || !this.edges[startNode].has(endNode)) {
            throw new Error('Edge does not exist')
        }
       this.edges[startNode].delete(endNode);
    }

    hasEdge(startNode, endNode) {
        if (!this.edges[startNode]) {
            return false;
        }
       return this.edges[startNode].has(endNode);
    }

    getAllEdges(node) {
        return this.edges[node];
    }
}

const graph = new Graph();

graph.addNode(1, 'Billy');
graph.addNode(2, 'Joe');
graph.addNode(3, 'Jacob');

graph.addEdge(1,2);
graph.addEdge(1, 3);
graph.addEdge(3, 2);

graph.hasEdge(3,2);
graph.hasEdge(2,1);

console.log(graph)
console.log(graph.getAllEdges(1))
console.log(graph.getAllEdges(2))
console.log(graph.getAllEdges(3))

graph.removeEdge(1,3);
console.log(graph);

