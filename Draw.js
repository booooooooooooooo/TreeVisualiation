function draw(tree, SIZEOFCANVAS){
  var svgContainer = d3.select("body")
                         .append("svg")
                         .attr("width", SIZEOFCANVAS )
                         .attr("height", SIZEOFCANVAS )
                         .style("border", "1px solid black");
  function solve(node) {
    console.log(node.x);
    console.log(node.y);
    svgContainer.append("circle")
        .attr("cx", node.x )
        .attr("cy", node.y )
        .attr("r", 5)
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
