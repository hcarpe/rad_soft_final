var data = [5,10,15,20,25];
var scale = [0,5,10,15,20,25,30];

/*d3.select(".chart")
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
  });*/

// Append SVG
var width = 400,
    height = 100;

var svg = d3.select("chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create scale
var scale = d3.scaleLinear()
  .domain([d3.min(data), d3.max(data)])
  .range([0, width - 100]);

// Add scales to axis
var x_axis = d3.axisBottom()
  .scale(scale);

//Append group and insert axis
svg.append("g")
  .call(x_axis);
