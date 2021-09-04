(function () {

  // Margin convention
  const margin = { top: 160, right: 30, bottom: 80, left: 200 }
  const width = 900 - margin.left - margin.right
  const height = 4046 - margin.top - margin.bottom

  const svg = d3.select("#chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  // Search
  d3.select("#input").on('keyup', function() {
    var searchTerm = d3.select("#input").property("value").toLocaleUpperCase()
    d3.selectAll("circle").attr('fill', d => colorScale(d.color))
    d3.selectAll("circle").filter(d => d.full_name_upper.indexOf(searchTerm) == -1).attr('fill', '#bdbdbd')
  })

  // Define colour scale
  const colorScale = d3.scaleOrdinal()
    .domain(["red","blue","purple","grey"])
    .range(["#F03A3A","#2A69D1","#9B30FF","#575757"])
  
  // Define states
  const states = ["Missouri","Florida","West Virginia","Iowa","Wisconsin","Montana","Pennsylvania","Arizona","North Carolina","Texas","Minnesota","Utah","Washington","Oregon","Michigan","Colorado","Virginia","New Mexico","Maine","New Jersey","South Carolina","Georgia","Maryland","Nevada","Connecticut"]

  // Define y axis position
  const yPositionScale = d3.scalePoint()
    .domain(states)
    .range([0, height])

  // Create tooltip
  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "svg-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden");

  // Read in csv
  d3.csv("ccDataWithAbsolute.csv")
    .then(ready)
  function ready (datapoints) {
    console.log("I'm here!!!!")
    datapoints.forEach(d => {
      d.x = d.x;
      d.y = d.y;
    })

  // Show text labels
  svg.selectAll('text')
    .data(states)
    .join('text')
    .attr('text-anchor', 'end')
    .attr('y', d => yPositionScale(d))
    .attr('dx', -60)
    .text(d => d)

  // Set position of circles
  svg.selectAll('circle')
    .data(datapoints)
    .join('circle')
    .attr("id", "circleBasicTooltip")
    .attr('r', 3)
    .attr('cx', d => d.x)
    .attr('fill', d => colorScale(d.color))
    .attr('cy', d => d.y)

  // Trigger tooltip
  d3.selectAll("circle")
    .on("mouseover", function(e, d) {
      d3.select(this)
        .attr('stroke-width', '2')
        .attr("stroke", "black");
      tooltip
        .style("visibility", "visible")
        .text(`Name: ${d.full_name}\nParty: ${d.party}\nRole: ${d.role}\nClimate score: ${d.cc_score}`);
    })
    .on("mousemove", function(e) {
      tooltip
        .style("top", e.pageY - 10 + "px")
        .style("left", e.pageX + 10 + "px");
    })
    .on("mouseout", function() {
      d3.select(this).attr('stroke-width', '0');
        tooltip.style("visibility", "hidden");
  });

// Create x axis scale
// Find a better way of doing this - the absolute values here are messy!
var x = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width - 170]);

// Draw the x axis
svg
  .append("g")
  .attr("transform", "translate(0,-95)")
  .style("font-size", 14)
  .call(d3.axisBottom(x));

// Add X axis label
svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", (width / 2) - 15)
    .attr("y", -110)
    .text("Climate Cabinet score");
      
  }
})();