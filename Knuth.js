function visualizeKnuth(tree, SIZE) {
  knuth_layout(tree, SIZE);
  var svgContainer = d3.select("body")
                         .append("svg")
                         .attr("width", SIZE * 100)
                         .attr("height", SIZE * 100)
                         .style("border", "1px solid black");
  function solve(node) {
    console.log(node.x);
    console.log(node.y);
    svgContainer.append("circle")
        .attr("cx", node.x )
        .attr("cy", node.y )
        .attr("r", SIZE / 4)
        .style("fill", "purple");
    if (node.left !== null){
      svgContainer.append("line")
                  .attr("x1", node.x)
                  .attr("y1", node.y)
                  .attr("x2", node.left.x)
                  .attr("y2", node.left.y)
                  .attr("stroke-width", 2)
                  .attr("stroke", "purple");
      solve(node.left);
    }

    if (node.right !== null){
      svgContainer.append("line")
                  .attr("x1", node.x)
                  .attr("y1", node.y)
                  .attr("x2", node.right.x)
                  .attr("y2", node.right.y)
                  .attr("stroke-width", 2)
                  .attr("stroke", "purple");;
      solve(node.right);
    }

  }
  solve(tree);
}

function knuth_layout(Tree, SIZE) {
  var i = 0;
  function knuth_layout_solve(node, depth) {
    if (node.left !== null)
      knuth_layout_solve(node.left, depth + 1);
    node.x = i;
    node.y = depth * SIZE;
    i += SIZE;//
    if (node.right !== null)
      knuth_layout_solve(node.right, depth + 1);
  }
  knuth_layout_solve(Tree, 0);
}
