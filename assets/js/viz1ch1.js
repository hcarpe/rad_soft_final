d3.csv("assets/csv/viz1ch1.csv", function(d) {
  return {
    year: +d.year,
    cheese: +d.cheese,
    citizens: +d.citizens,
  };
}).then(function(data) {
  viz1 = data;

  d3.select(".cheese").selectAll("div")
    .data(viz1)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.cheese * 10;
      return barHeight + "px";
    });
});
