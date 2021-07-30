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
    .domain([0, 500])
    .range([height, 0])

  // set color scale - medal type
  const colorScale = d3.scaleOrdinal()
    .range(['brown','gold','silver',])

    // read in data
    d3.csv("olympic_medals_by_continent_large.csv").then(ready);
    function ready (datapoints) {
      const datapoints1948 = datapoints.filter((d) => d.year == 1948)

    // grab all rows, turn into circles, set their scales
    svg.selectAll('circle')
      .data(datapoints1948)
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
      .text("1948")
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
        .attr('font-size', 16)

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
      const datapoints1948 = datapoints.filter((d) => d.year == 1948)
      console.log('0')
      svg.selectAll('circle')
        .data(datapoints1948)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1948")
    })
    
    // step ins
    d3.select('#step-1').on('stepin', function() {
      console.log('1')
      const datapoints1948 = datapoints.filter((d) => d.year == 1948)
      svg.selectAll('circle')
        .data(datapoints1948)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1948")
    })

    d3.select('#step-2').on('stepin', function() {
      console.log('2')
      const datapoints1952 = datapoints.filter((d) => d.year == 1952)
      svg.selectAll('circle')
        .data(datapoints1952)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1952")
    })

    d3.select('#step-3').on('stepin', function() {
      console.log('3')
      const datapoints1956 = datapoints.filter((d) => d.year == 1956)
      svg.selectAll('circle')
        .data(datapoints1956)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1956")
    })

    d3.select('#step-4').on('stepin', function() {
      console.log('4')
      const datapoints1960 = datapoints.filter((d) => d.year == 1960)
      svg.selectAll('circle')
        .data(datapoints1960)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1960")
    })

    d3.select('#step-5').on('stepin', function() {
      console.log('5')
      const datapoints1964 = datapoints.filter((d) => d.year == 1964)
      svg.selectAll('circle')
        .data(datapoints1964)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1964")
    })

    d3.select('#step-6').on('stepin', function() {
      console.log('6')
      const datapoints1968 = datapoints.filter((d) => d.year == 1968)
      svg.selectAll('circle')
        .data(datapoints1968)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1968")
    })

    d3.select('#step-7').on('stepin', function() {
      console.log('7')
      const datapoints1972 = datapoints.filter((d) => d.year == 1972)
      svg.selectAll('circle')
        .data(datapoints1972)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1972")
    })

    d3.select('#step-8').on('stepin', function() {
      console.log('8')
      const datapoints1976 = datapoints.filter((d) => d.year == 1976)
      svg.selectAll('circle')
        .data(datapoints1976)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1976")
    })

    d3.select('#step-9').on('stepin', function() {
      console.log('9')
      const datapoints1980 = datapoints.filter((d) => d.year == 1980)
      svg.selectAll('circle')
        .data(datapoints1980)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1980")
    })

    d3.select('#step-10').on('stepin', function() {
      console.log('10')
      const datapoints1984 = datapoints.filter((d) => d.year == 1984)
      svg.selectAll('circle')
        .data(datapoints1984)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1984")
    })

    d3.select('#step-11').on('stepin', function() {
      console.log('11')
      const datapoints1988 = datapoints.filter((d) => d.year == 1988)
      svg.selectAll('circle')
        .data(datapoints1988)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1988")
    })

    d3.select('#step-12').on('stepin', function() {
      console.log('12')
      const datapoints1992 = datapoints.filter((d) => d.year == 1992)
      svg.selectAll('circle')
        .data(datapoints1992)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1992")
    })

    d3.select('#step-13').on('stepin', function() {
      console.log('13')
      const datapoints1996 = datapoints.filter((d) => d.year == 1996)
      svg.selectAll('circle')
        .data(datapoints1996)
        .join('circle')
        .transition()
        .duration(500)
        .attr('r', 5)
        .attr('cx', d => xPositionScale(d.continent))
        .attr('cy', d => yPositionScale(d.no_of_medals))
        .attr('fill', d => colorScale(d.medal_type))
        .attr('opacity', 0.9)

      yearLabel.text("1996")
    })

    d3.select('#step-14').on('stepin', function() {
      console.log('14')
      const datapoints2000 = datapoints.filter((d) => d.year == 2000)
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

    d3.select('#step-15').on('stepin', function() {
      console.log('15')
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

    d3.select('#step-16').on('stepin', function() {
      console.log('16')
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

    d3.select('#step-17').on('stepin', function() {
      console.log('17')
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

    d3.select('#step-18').on('stepin', function() {
      console.log('18')
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