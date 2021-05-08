d3.csv("assets/csv/viz4.csv", function(d) {
  return {
    year: +d.year,
    aprehensions: +d.aprehensions,
  };
}).then(function(data) {
  viz6 = data;

  d3.select(".wackaxis").selectAll("div")
    .data(viz6)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.aprehensions / 10000;
      return barHeight + "px";
    });
});
