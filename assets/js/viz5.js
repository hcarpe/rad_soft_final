d3.csv("assets/csv/viz5.csv", function(d) {
  return {
    sample: +d.sample,
    margin: +d.margin,
  };
}).then(function(data) {
  viz8 = data;

  d3.select(".marginrror").selectAll("div")
    .data(viz8)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.margin;
      return barHeight + "px";
    });
});
