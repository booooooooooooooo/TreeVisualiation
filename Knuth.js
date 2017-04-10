

function knuth_layout(Tree){
  var i = 0;
  function knuth_layout_solve(node, depth){
    if(node.left !== null) knuth_layout_solve(node.left, depth + 1);
    node.x = i;
    node.y = depth;
    i+=1;
    if(node.right !== null) knuth_layout_solve(node.right, depth + 1);
  }
  knuth_layout_solve(Tree, 0);
}
