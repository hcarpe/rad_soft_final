import {range as sequence} from "d3-array";
import {initRange} from "./init.js";
import ordinal from "./ordinal.js";

// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select(".deaths2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("assets/csv/viz2ch2.csv").then(function(data) {

  // format the data
  data.forEach(function(d) {
    d.deaths = +d.deaths;
  });
  console.log(data);

  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.cause; }));
  y.domain([0, d3.max(data, function(d) { return d.deaths; })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.cause); })
      .attr("width", x.bandwid())
      .attr("y", function(d) { return y(d.deaths); })
      .attr("height", function(d) { return height - y(d.deaths); });

  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});





// d3.csv("assets/csv/viz2ch2.csv", function(d) {
//   return {
//     cause: +d.cause,
//     deaths: +d.deaths,
//   };
// }).then(function(data) {
//   viz4 = data;
//
//   d3.select(".deaths2").selectAll("div")
//     .data(viz4)
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     .style("height", function(d) {
//       var barHeight = d.deaths / 4000;
//       return barHeight + "px";
//     })
//     .style("margin", "2px");
// });
