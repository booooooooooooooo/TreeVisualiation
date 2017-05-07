//O(n) time complexity
//post order traversal
function wsMinWidthLayout(tree, SIZEOFEDGE) {
  var nexts = [];
  for(var i = 0; i < tree.getDepth(); i++){
    nexts.push(0);
  }
  function solve(node, depth) {
    if (node !== null){
      solve(node.left, depth + 1);
      solve(node.right, depth + 1);
      node.x = nexts[depth]* SIZEOFEDGE;
      node.y = depth* SIZEOFEDGE;
      nexts[depth] += 1;

    }
  }
  solve(tree, 0);


  return tree;
}
