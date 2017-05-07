//O(n^2) time complexity
function wsCenterSlowLayout(tree, SIZEOFEDGE) {
  var nexts = [];
  for(var i = 0; i < tree.getDepth(); i++){
    nexts.push(0);
  }
  console.log(tree.getDepth());
  console.log(nexts);
  function move_right(node, depth, distance){
    if(node !== null){
      node.x = node.x + distance;
      nexts[depth] = Math.max(nexts[depth], node.x + SIZEOFEDGE);
      move_right(node.left, depth + 1, distance);
      move_right(node.right, depth + 1, distance);
    }
  }
  function solve(node, depth) {
    if (node !== null){
      solve(node.left, depth + 1);
      solve(node.right, depth + 1);
      node.y = depth* SIZEOFEDGE;
      if(node.left === null && node.right === null){
        node.x = nexts[depth];
        nexts[depth] += SIZEOFEDGE;
      }else{
        if(node.left === null){
          node.x = node.right.x - SIZEOFEDGE / 2;
        }else if(node.right === null){
          node.x = node.left.x + SIZEOFEDGE / 2;
        }else{
          node.x = (node.left.x + node.right.x) / 2;
        }
        if(node.x < nexts[depth]){
          move_right(node,  depth, nexts[depth]  - node.x);
        }
        nexts[depth] = node.x + SIZEOFEDGE;
      }
    }
  }
  solve(tree, 0);


  return tree;
}
