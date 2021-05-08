d3.csv("assets/csv/viz4.csv", function(d) {
  return {
    year: +d.year,
    aprehensions: +d.aprehensions,
  };
}).then(function(data) {
  viz7 = data;

  d3.select(".notwackaxis").selectAll("div")
    .data(viz7)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.aprehensions / 1500;
      return barHeight + "px";
    })
    .style("margin", "2px");
});
