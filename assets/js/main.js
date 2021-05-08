d3.csv("assets/csv/viz1ch1.csv", function(d) {
  return {
    year: +d.year,
    cheese: +d.cheese,
    citizens: +d.citizens,
  };
}).then(function(data) {
  viz1 = data;

  d3.select(".cheese").selectAll("div")
    .data(viz1)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.cheese * 10;
      return barHeight + "px";
    });
});

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

d3.csv("assets/csv/viz2ch1.csv", function(d) {
  return {
    cause: +d.cause,
    deaths: +d.deaths,
  };
}).then(function(data) {
  viz3 = data;

  d3.select(".deaths1").selectAll("div")
    .data(viz3)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.deaths / 1000;
      return barHeight + "px";
    });
});

d3.csv("assets/csv/viz2ch2.csv", function(d) {
  return {
    cause: +d.cause,
    deaths: +d.deaths,
  };
}).then(function(data) {
  viz4 = data;

  d3.select(".deaths2").selectAll("div")
    .data(viz4)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.deaths / 1000;
      return barHeight + "px";
    });
});

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

d3.csv("assets/csv/viz4.csv", function(d) {
  return {
    year: +d.year,
    aprehensions: +d.aprehensions,
  };
}).then(function(data) {
  viz6 = data;

  d3.select(".wackaxis").selectAll("div")
    .data(viz6)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.aprehensions / 10000;
      return barHeight + "px";
    });
});

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
      var barHeight = d.aprehensions / 10000;
      return barHeight + "px";
    });
});

d3.csv("assets/csv/viz5.csv", function(d) {
  return {
    sample: +d.sample,
    margin: +d.margin,
  };
}).then(function(data) {
  viz8 = data;

  d3.select(".marginrror").selectAll("div")
    .data(viz8)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d.margin;
      return barHeight + "px";
    });
});
