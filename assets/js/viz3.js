(function() {
  var w = 300, //width
    h = 300, //height
    r = 100;
  d3.csv("assets/csv/viz3.csv", function(d) {
    return {
      toothpaste: +d.toothpaste,
      dentists: +d.dentists,
    };
  }).then(function(data) {
    var dentists = [];
    for (var key in data) {
      dentists.push(data[key].dentists);
    }

    // set the color scale
    var colorScale = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(dentists);

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
      .selectAll("path")
      .data(pie)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
      )
      .attr('fill', function(d, i) {
        return (colorScale(i));
      })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    var arcs = svg.selectAll("g.slice") //this selects all <g> elements with class slice (there aren't any yet)
      .data(pie) //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
      .enter() //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
      .append("svg:g") //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
      .attr("class", "slice"); //allow us to style things in the slices (like text)
    //

    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    arcs.append("svg:text") //add a label to each slice
      .attr("transform", function(d) { //set the label's origin to the center of the arc
        //we have to make sure to set these before calling arc.centroid
        d.innerRadius = 0;
        d.outerRadius = r;
        return "translate(" + arc.centroid(d) + ")"; //this gives us a pair of coordinates like [50, 50]
      })
      .attr("text-anchor", "middle") //center the text on it's origin
      .text(function(d, i) {
        return (data[i].dentists/100);
      }); //get the label from our original data array
  });
})();
