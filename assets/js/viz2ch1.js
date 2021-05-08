d3.csv("assets/csv/viz2ch1.csv", function(d) {
  return {
    cause: +d.cause,
    deaths: +d.deaths,
  };
}).then(function(data) {
  viz3 = data;

  d3.select(".deaths1").selectAll("div")
    .data(viz3)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.deaths / 1000;
      return barHeight + "px";
    });
});
