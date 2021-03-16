var dataset = [5,10,15,20,25];

d3.select("body")
  .append("p")
  .text("New paragraph!");

d3.select(".chart").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", function(d) {
    var barHeight = d * 5; //Scale up by factor of 5
    return barHeight + "px";
    });