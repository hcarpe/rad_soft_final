d3.csv("assets/csv/viz2ch2.csv", function(d) {
  return {
    cause: +d.cause,
    deaths: +d.deaths,
  };
}).then(function(data) {
  viz4 = data;

  d3.select(".deaths2").selectAll("div")
    .data(viz4)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.deaths / 1000;
      return barHeight + "px";
    });
});
