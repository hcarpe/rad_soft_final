d3.csv("assets/csv/viz3ch1.csv", function(d) {
  return {
    toothpaste: +d.toothpaste,
    dentists: +d.dentists,
  };
}).then(function(data) {
  var dentists = [];
  for (var key in data){
    dentists.push(data[key].dentists);
  }
  var pie = d3.pie()(dentists);

  var width = 450;
      height = 450;
      margin = 40;
  var radius = Math.min(width, height) / 2 - margin;

  var svg = d3.select(".dentistpie")
    .append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  svg
    .selectAll('whatever')
    .data(pie)
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d) {
      //return (color(d.data.key))
    })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7);
});
