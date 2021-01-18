// Graphs!
//--> great data structure to model real-world relationships
//--> E.g networks

// directed vs. undirected graphs
  // --> movement has one direction or bi-directional (twitter). Undirected do anything it wants (E.g. Facebook)!
// weigted vs. Unweighted
  // --> weighted stores info in nodes and edges (Google maps/optimal paths). Unweighted store info in nodes only.
// Cyclic or Acylic
  // --> vertices connected in a circular fashion - cylic! Acylic - can't go in a circle



// Let's build a graph!

// Edge List
const graphEdge = [[0, 2], [2, 3], [2, 1], [1, 3]];
// this shows connections between vertices
// Adjacent List
  const graphAdjList = [[2], [2, 3], [0,1,3], [1, 2]];
  // uses index or key to show what each vertex is connected to
// Adjacent Matrix
const graphMatrix = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0]
]
// stores connection or not connected to all vertices


// Time to create our own!
  // using an adjacency list with hash table
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    
  }
  addEdge(node1, node2) {
    // undirected Graph
  }
  showConnections() {

  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();

