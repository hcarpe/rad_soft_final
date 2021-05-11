(function(){
// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 50, left: 70},
    width = 500,
    height = 300;

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.sample); })
    .y(function(d) { return y(d.margin); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select(".marginrror").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("assets/csv/viz5.csv").then(function(data) {

  // format the data
  data.forEach(function(d) {
      d.sample = +d.sample;
      d.margin = +d.margin;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.sample; }));
  y.domain([0, d3.max(data, function(d) { return d.margin; })]);

  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline)
      .style("stroke","blue")
      .style("fill","none");

  // Add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});
})();
