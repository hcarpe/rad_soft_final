d3.csv("assets/csv/viz1ch2.csv", function(d) {
  return {
    year: +d.year,
    citizens: +d.citizens,
    lawyers: +d.lawyers,
  };
}).then(function(data) {
  viz2 = data;

  d3.select(".lawyers").selectAll("div")
    .data(viz2)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.lawyers / 1000;
      return barHeight + "px";
    });
});
