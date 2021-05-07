var viz1 = [];

d3.csv("assets/csv/viz1ch1.csv", function(d) {
  return {
    year: +d.year,
    cheese: +d.cheese,
    citizens: +d.citizens,
  };
}).then(function(data) {
  console.log(data);
  viz1 = data;
  console.log(viz1);

  d3.select(".cheese").selectAll("div")
    .data(viz1)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      console.log(d);
      var barHeight = d.cheese*10;
      return barHeight + "px";
    });
});

// var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
//                     11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
//
// d3.select("body").selectAll("div")
//   .data(dataset)
//   .enter()
//   .append("div")
//   .attr("class", "bar") .style("height", function(d) {
//     console.log(d);
//     var barHeight = d * 5;
//     return barHeight + "px"; });

/*
var data = [5, 10, 12];
        var width = 200,
        scaleFactor = 10,
        barHeight = 20;

        var graph = d3.select("body")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", barHeight * data.length);

        var bar = graph.selectAll("g")
                  .data(data)
                  .enter()
                  .append("g")
                  .attr("transform", function(d, i) {
                        return "translate(0," + i * barHeight + ")";
                  });

    bar.append("rect")
       .attr("width", function(d) {
                return d * scaleFactor;
       })
       .attr("height", barHeight - 1);

    bar.append("text")
       .attr("x", function(d) { return (d*scaleFactor); })
       .attr("y", barHeight / 2)
       .attr("dy", ".35em")
       .text(function(d) { return d; });
  */
var year = [];
var citizens = [];
var cheese = [];
