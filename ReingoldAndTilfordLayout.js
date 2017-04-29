//O(n^2) time complexity.

function reingoldAndTilfordLayout(tree, SIZEOFEDGE) {
  function getCounter(node, leftOrRight, level = 0, counter = []){
    if(node !== null){
      if(counter.length < level + 1){
        counter.push(node.x);
      }else{
        if(leftOrRight == "left" && node.x < counter[level]){
          counter[level] = node.x;
        }
        if(leftOrRight == "right" && node.x > counter[level]){
          counter[level] = node.x;
        }
      }
      getCounter(node.left, leftOrRight, level + 1, counter );
      getCounter(node.right, leftOrRight, level + 1, counter );

    }
    return counter;
  }
  function move_right(node, distance){
    if(node !== null){
      node.x = node.x + distance;
      move_right(node.left, distance);
      move_right(node.right, distance);
    }
  }
  function getDistance(rightCounterForLeftSubTree, leftCounterForRightSubTree){
    var len = Math.min(rightCounterForLeftSubTree.length, leftCounterForRightSubTree.length);
    var maxDistance = 0;
    for(var i = 0; i < len; i++){
      var temp = rightCounterForLeftSubTree[i] - leftCounterForRightSubTree[i] + SIZEOFEDGE;
      maxDistance = Math.max(maxDistance, temp);
    }
    return maxDistance;
  }

  function solve(node, level) {
    if (node !== null){
      solve(node.left, level + 1);
      solve(node.right, level + 1);

      if(node.left === null && node.right === null){
        node.x = 0;
      }else if(node.left === null){
        node.x = node.right.x - SIZEOFEDGE / 2;
      }else if(node.right === null){
        node.x = node.left.x + SIZEOFEDGE / 2;
      }else{
        rightCounterForLeftSubTree = getCounter(node.left, "right");
        leftCounterForRightSubTree = getCounter(node.right, "left");
        var distance = getDistance(rightCounterForLeftSubTree, leftCounterForRightSubTree);
        move_right(node.right, distance);
        node.x = (node.left.x + node.right.x) / 2;
      }
      node.y = level * SIZEOFEDGE;
    }
  }
  solve(tree, 0);

  return tree;
}
