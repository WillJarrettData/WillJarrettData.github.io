(function () {

  // Margin convention
  const margin = { top: 120, right: 30, bottom: 80, left: 200 }
  const width = 1280 - margin.left - margin.right
  const height = 4000 - margin.top - margin.bottom

  const svg = d3.select("#chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  // Define x axis position
  const xPositionScale = d3.scaleLinear()
    .domain([0, 130])
    .range([0, width - 20])
    .clamp(true)

  // Define colour scale
  const colorScale = d3.scaleOrdinal()
    .domain(["Red","Blue","Grey"])
    .range(["#EA0000","#0022EA","#575757"])
  
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
  
  // Force simulation and prevent overlap
  const forceX = d3.forceX(d => xPositionScale(d.x_score)).strength(5)
  const forceY = d3.forceY(d => yPositionScale(d.state)).strength(1)
  const forceCollide = d3.forceCollide(d => 4)
  const simulation = d3.forceSimulation()
    .force("overlap", forceCollide)
    .force("y", forceY)
    .force("x", forceX)

  // Read in csv
  d3.csv("climateCabinetScores.csv")
    .then(ready)
  function ready (datapoints) {
    datapoints.forEach(d => {
      d.x = xPositionScale(d.x_score);
      d.y = yPositionScale(d.state);
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
      .attr('cx', d => xPositionScale(d.x_score))
      .attr('fill', d => colorScale(d.color))
      .attr('cy', d => yPositionScale(d.state))

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

    simulation.nodes(datapoints)
      .on('tick', ticked)
    function ticked() {
      svg.selectAll('circle')
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
      
    }
  }
})();