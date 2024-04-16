// Set up SVG size
var width = Math.min(document.getElementById("left-column").offsetWidth, 800);
if (width < 800) {
    width = width - 20;
}
var height = 500;

// Calculate scaling factors
var mapScaleFactor = width / 750;
var pointScaleFactor = width / 750;

// SVG
var svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

var projection = d3.geoAlbersUsa()
    .translate([width / 2, height / 2]) // Center the map
    .scale(1000 * mapScaleFactor); // Scale the map based on the SVG size

var path = d3.geoPath()
    .projection(projection);

// Load external data and draw the map
var states_map = d3.json("states.geojson", function(data){
// Draw the map
svg.append("g")
    .selectAll("path")
    .data(data.features)
    .enter().append("path")
        .attr("d", path)
        .attr("fill", "#ccc")
        .attr("class", "states-map")
        .style("stroke", "#fff")
        .style("visibility", "hidden");
});

// Load cc_data points to add to map
d3.json("cc_data.geojson", function(data){

    // Set up simulation
    const simulation = d3.forceSimulation(data.features)
        .force("x", d3.forceX(d => projection(d.geometry.coordinates)[0]).strength(1)) // Project X coordinate
        .force('y', d3.forceY(d => projection(d.geometry.coordinates)[1]).strength(1)) // Project Y coordinate
        .force('collide', d3.forceCollide().radius(function(d) {
            if (d.properties.office_type == "state_senate") {
                return 6 * pointScaleFactor; // Radius for state senate
            } else if (d.properties.office_type == "state_house") {
                return 5 * pointScaleFactor; // Radius for state house
            } else if (d.properties.office_type == "local") {
                return 4 * pointScaleFactor; // Radius for local office
            }
        }).strength(1));

    // define loading screen
    var loadingScreen = svg.append("g")
        .attr("class", "loading-screen")
        .append("text")
        .text('Loading...')
        .attr("text-anchor", "middle")
        .attr("dx", width / 2)
        .attr("dy", height / 2)
        .style("font-size", "28px")
        .style("visibility", "visible")

    // Set up data on svg
    var nodes = svg.append("g")
        .selectAll("circle")
        .data(data.features)
        .enter().append("circle")
        .attr("id", function(d, i) { return "node_id" + i; })
        .attr("class", "node") // Add class for CSS styling
        .attr("cx", function(d) { return projection(d.geometry.coordinates)[0]; })
        .attr("cy", function(d) { return projection(d.geometry.coordinates)[1]; })
        .attr("r", function(d) {
            if (d.properties.office_type == "state_senate") {
                return 5 * pointScaleFactor;
            } else if (d.properties.office_type == "state_house") {
                return 4 * pointScaleFactor;
            } else if (d.properties.office_type == "local") {
                return 3 * pointScaleFactor;
            }
        })
        .attr("fill", function(d){
            if(d.properties.party == "Democratic"){
                return "#2c2ce5";
            } else if (d.properties.party == "Republican"){
                return "#e81f1f";
            } else {
                return "#606060";
            }
        })
        .style("visibility", "hidden")
        .on('mouseover', mouseoverNode)
        .on('mouseout', mouseoutNode);

function forceSim() {
    simulation.nodes(data.features).on('end', function () {
        svg.selectAll('circle')
            .attr("cx", d => d.x)
            .attr('cy', d => d.y);
        loadingScreen
            .style("visibility", "hidden");
        // svg select all elements with class states-map and set visibility to visible
        svg.selectAll(".states-map")
            .style("visibility", "visible");
        nodes
            .style("visibility", "visible");
    
    // Create labels for the points
    var labels = svg.append("g")
        .selectAll("text")
        .data(data.features)
        .enter().append("text")
        .attr("id", function(d, i) { return "label_id" + i; })
        // Get x position from positions of nodes
        .attr("x", function(d) { return d.x + 5; })
        .attr("y", function(d) { return d.y + 2; })
        .text(function(d) { return d.properties.candidate; })
        .attr("font-size", "14px")
        .attr("dx", 5)
        .attr("dy", 3)
        .attr("class", "shadow")
        .style("visibility", "hidden");
    
    });
}

// Add mouseover events
function mouseoverNode(d, i) {
    d3.select("#node_id" + i)
        .style("cursor", "pointer")
        .style("stroke-width", 2);
    d3.select("#label_id" + i)
        .style("visibility", "visible");
};

function mouseoutNode(d, i) {
    d3.select("#node_id" + i)
        .style("cursor", "default")
        .style("stroke-width", 0);
    d3.select("#label_id" + i)
        .style("visibility", "hidden");
};

// Add click event
nodes.on('click', function(d, i) {
    var results = document.getElementById("results");
    results.innerHTML = "<hr>" + 
        "<h3>" + d.properties.candidate + "</h3>" +
        "<hr>" +
        "<h5>" + d.properties.office + " | " + d.properties.party + "</h5>" +
        "</p><p>" + d.properties.bio + "</p>";
});

// run simulation
forceSim();
    
});