//O(n)
//In-order  traversal

function knuthLayout(tree, SIZEOFEDGE) {
  var i = 0;
  function knuthLayoutSolve(node, depth) {
    if (node.left !== null)
      knuthLayoutSolve(node.left, depth + 1);
    node.x = i;
    node.y = depth * SIZEOFEDGE;
    i += SIZEOFEDGE;//
    if (node.right !== null)
      knuthLayoutSolve(node.right, depth + 1);
  }
  knuthLayoutSolve(tree, 0);
  return tree;
}
