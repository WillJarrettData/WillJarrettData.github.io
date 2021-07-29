(function () {

  // set margins
  var margin = { top: 50, right: 50, bottom: 50, left: 50 }

  // set width
  var width = 800 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom

  // create svg
  var svg = d3.select("#chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  // set x scale - continent
  const xPositionScale = d3.scaleOrdinal()
    .domain(['Africa','South America','Australia','Asia','North America','Europe','Asia'])
    .range([0, (width / 5), ((width / 5) * 2), ((width / 5) * 3), ((width / 5) * 4), width])

  // set y scale - number of medals
  const yPositionScale = d3.scaleLinear()
    .domain([0, 450])
    .range([height, 0])

  // set color scale - medal type
  const colorScale = d3.scaleOrdinal()
    .range(['gold','silver','brown'])

    // read in data
    d3.csv("olympic_medals_by_continent.csv").then(ready);
    function ready (datapoints) {
      const datapoints2000 = datapoints.filter((d) => d.year == 2000)

    // grab all rows, turn into circles, set their scales
    svg.selectAll('circle')
      .data(datapoints2000)
      .join('circle')
      .attr('r', 5)
      .attr('cx', d => xPositionScale(d.continent))
      .attr('cy', d => yPositionScale(d.no_of_medals))
      .attr('fill', d => colorScale(d.medal_type))
      .attr('opacity', 0.9)

    // draw numbers
      const yearLabel = svg.append("text")
      .attr("x", width-50)
      .attr("y", 50)
      .text("2000")
      .attr("font-size", "22px")

      // create legend
      const continents = colorScale.domain()
      const legend = svg.append('g')
        .attr("transform", "translate(20,0)")

      legend.selectAll('rect')
        .data(continents)
        .join('rect')
        .attr('width', 15)
        .attr('height', 15)
        .attr('x', 0)
        .attr('y', (d, i) => i * 20)
        .attr('fill', d => colorScale(d))

      legend.selectAll('text')
        .data(continents)
        .join('text')
        .attr('x', 0)
        .attr('y', (d, i) => i * 20)
        .text(d => d)
        .attr('dy', 12)
        .attr('dx', 20)
        .attr('font-size', 12)

      // set y axis
      var yAxis = d3.axisLeft(yPositionScale);
      svg.append("g")
        .attr("class", "axis y-axis")
        .call(yAxis)

      // set x axis
      var xAxis = d3.axisBottom(xPositionScale)
      svg.append("g")
        .attr("class", "axis x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)

    // step out
    d3.select('#step-1').on('stepout', function() {
      console.log('0')
      const datapoints2000 = datapoints.filter((d) => d.year == 2000)
      console.log('0')
      svg.selectAll('circle')
        .data(datapoints2000)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("2000")
    })
    
    // step ins
    d3.select('#step-1').on('stepin', function() {
      console.log('1')
      const datapoints2004 = datapoints.filter((d) => d.year == 2004)
      svg.selectAll('circle')
        .data(datapoints2004)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("2004")
    })

    d3.select('#step-2').on('stepin', function() {
      console.log('2')
      const datapoints2008 = datapoints.filter((d) => d.year == 2008)
      svg.selectAll('circle')
        .data(datapoints2008)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("2008")
    })

    d3.select('#step-3').on('stepin', function() {
      console.log('3')
      const datapoints2012 = datapoints.filter((d) => d.year == 2012)
      svg.selectAll('circle')
        .data(datapoints2012)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("2012")
    })

    d3.select('#step-4').on('stepin', function() {
      console.log('4')
      const datapoints2016 = datapoints.filter((d) => d.year == 2016)
      svg.selectAll('circle')
        .data(datapoints2016)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("2016")
    })

    }
  })();