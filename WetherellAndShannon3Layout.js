
function wetherellAndShannon3Layout(tree, SIZEOFEDGE) {
  var nexts = [];
  for(var i = 0; i < tree.getDepth(); i++){
    nexts.push(0);
  }
  console.log(tree.getDepth());
  console.log(nexts);
  function adjust(node, accMod){
    if(node !== null){
      node.x = node.x + accMod;
      adjust(node.left, node.mod + accMod);
      adjust(node.right, node.mod + accMod);
    }
  }
  function solve(node, depth) {
    if (node !== null){
      solve(node.left, depth + 1);
      solve(node.right, depth + 1);
      node.y = depth* SIZEOFEDGE;
      if(node.left === null && node.right === null){
        node.x = nexts[depth];
      }else{
        if(node.left === null){
          node.x = node.right.x - SIZEOFEDGE / 2;
        }else if(node.right === null){
          node.x = node.left.x + SIZEOFEDGE / 2;
        }else{
          node.x = (node.left.x + node.right.x) / 2;
        }
        if(node.x <= nexts[depth]){
          node.mod = nexts[depth] + SIZEOFEDGE - node.x;
          node.x = nexts[depth] + SIZEOFEDGE;
        }
      }
      nexts[depth] = node.x + SIZEOFEDGE;
    }
  }
  solve(tree, 0);
  adjust(tree, 0);


  return tree;
}
