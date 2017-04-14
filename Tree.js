/*
format of data

[[index, parentIndex],[index, parentIndex],[index, parentIndex],...]

parentIndex of root is -1

Note: the node appears first will be treated as left child
*/

function makeTree(data) {
  // maintain  a temperary table to restore index-node map
  var table = {};
  // make Node
  for (var i = 0; i < data.length; i++) {

    index = data[i][0];
    node = new Node(index);
    table[index] = node;
  }
  // construte tree
  for (var i = 0; i < data.length; i++) {
    parent = table[data[i][1]];
    child = table[data[i][0]];
    if (parent != undefined) {
      if (parent.left === null)
        parent.left = child;
      else if (parent.right === null)
        parent.right = child;
      else
        throw "invalid tree. Please enter binary tree";
    }
  }
  // return root
  for (var i = 0; i < data.length; i++) {
    if (data[i][1] == -1) {
      return table[data[i][0]];
    }
  }
}

function Node(index, left = null, right = null, x = 0, y = 0) {
  this.index = index;
  this.left = left;
  this.right = right;
  this.x = x;
  this.y = y;
}
