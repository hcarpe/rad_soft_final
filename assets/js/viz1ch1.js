// set the dimensions and margins of the graph
(function(){
  //Normal code goes here
var margin = {top: 20, right: 40, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y0 = d3.scaleLinear().range([height, 0]);
var y1 = d3.scaleLinear().range([height, 0]);

// define the 1st line
var valueline = d3.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y0(d.citizens); });

// define the 2nd line
var valueline2 = d3.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y1(d.cheese); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var chart1 = d3.select(".cheese").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("assets/csv/viz1ch1.csv").then(function(data) {

  // format the data
  data.forEach(function(d) {
      d.year = +d.year;
      d.citizens = +d.citizens;
      d.cheese = +d.cheese;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.year; }));
  y0.domain([800, 20000]);
  y1.domain([9, 11]);

  // Add the valueline path.
  chart1.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline)
      .style("stroke","blue")
      .style("fill","none");

  // Add the valueline2 path.
  chart1.append("path")
      .data([data])
      .attr("class", "line")
      .style("stroke", "red")
      .style("fill","none")
      .attr("d", valueline2);

  // Add the X Axis
  chart1.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y0 Axis
  chart1.append("g")
      .attr("class", "axisSteelBlue")
      .call(d3.axisLeft(y0));

  // Add the Y1 Axis
  chart1.append("g")
      .attr("class", "axisRed")
      .attr("transform", "translate( " + width + ", 0 )")
      .call(d3.axisRight(y1));

});
})();
