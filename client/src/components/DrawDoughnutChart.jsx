import * as d3 from "d3";

// Function to format large numbers into abbreviated format
const formatValue = (value) => {
    if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + "M";
    } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + "k";
    }
    return value;
};

// Function to draw the Doughnut chart
const DrawDoughnutChart = (element, data) => {
    const colors = ["#d9e3f0", "#8bc34a"]; // Color array for slices (green and white)
    const boxSize = 1000; // Size of the chart's bounding box, in pixels
    const width = 640; // Outer width of the SVG container, in pixels
    const height = 400; // Outer height of the SVG container, in pixels
    const innerRadius = 100; // Inner radius of the pie chart, in pixels (set to 0 for a pie chart)
    const outerRadius = Math.min(width, height) / 2; // Outer radius of the pie chart, determined by container size

    d3.select(element).select("svg").remove(); // Remove any existing SVG to ensure clean render

    // Create a new SVG element within the specified element
    const svg = d3
        .select(element)
        .append("svg")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
        .append("g")
        .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`); // Center the SVG within its container

    // Define the arc generator for the pie slices
    const arcGenerator = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

    // Define the pie generator
    const pieGenerator = d3.pie()
        .value((d) => d.value); // Accessor function for pie data values

    // Generate arcs for each slice based on the pie data
    const arcs = svg.selectAll().data(pieGenerator(data)).enter();

    // Append path elements for each slice
    arcs.append("path")
        .attr("d", arcGenerator) // Set the path d attribute using the arc generator
        .style("fill", (d, i) => colors[i % data.length]); // Use colors in the defined array, repeating if necessary

    // Add text labels inside the doughnut chart
    arcs.append("text")
        .attr("text-anchor", "middle") // Center the text
        .text((d) => `${formatValue(d.data.value)}`) // Set the text content using formatted values
        .style("fill", "#000000") // Set text color
        .style("font-size", "30px") // Set font size
        .attr("transform", (d) => {
            const [x, y] = arcGenerator.centroid(d); // Compute the centroid of the arc
            return `translate(${x}, ${y})`; // Translate to the centroid coordinates
        });

    // Optional: Adding a tooltip (not fully implemented in provided code)
    const div = d3.select("body").append("div")
        .attr("class", "tooltip-donut")
        .style("opacity", 0); // Initial opacity of 0 for tooltip
};

export default DrawDoughnutChart;
