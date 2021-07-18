(function () {

  // Margin convention
  const margin = { top: 120, right: 30, bottom: 80, left: 200 }
  const width = 900 - margin.left - margin.right
  const height = 4000 - margin.top - margin.bottom

  const svg = d3.select("#chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    // Search
    d3.select("#input").on('keyup', function() {
      var searchTerm = d3.select("#input").property("value").toLocaleUpperCase()
      d3.selectAll("circle").attr('fill', d => colorScale(d.party))
      d3.selectAll("circle").filter(d => d.full_name_upper.indexOf(searchTerm) == -1).attr('fill', '#bdbdbd')
    })

  // Define colour scale
  const colorScale = d3.scaleOrdinal()
    .domain(["Republican","Democrat","Indepenent","Libertarian"])
    .range(["#EA0000","#0022EA","#575757","#575757"])
  
  // Define states
  const states = ["Florida","Missouri","West Virginia","Wisconsin","Pennsylvania","Montana","Iowa","North Carolina","Arizona","Texas","Utah","Minnesota","Washington","Oregon","Colorado","Michigan","Virginia","New Mexico","Maine","New Jersey","South Carolina","Georgia","Maryland","Connecticut","Nevada","Illinois","New York"]

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
      .attr('dx', -40)
      .text(d => d)

    // Set position of circles
    svg.selectAll('circle')
      .data(datapoints)
      .join('circle')
      .attr("id", "circleBasicTooltip")
      .attr('r', 3)
      .attr('cx', d => d.x)
      .attr('fill', d => colorScale(d.party))
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
      
  }
})();