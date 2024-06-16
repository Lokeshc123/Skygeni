import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const StackedBarChart = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        // Setting up the SVG element dimensions and margins
        const margin = { top: 20, right: 30, bottom: 30, left: 60 },
            width = 800 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        const svg = d3
            .select(svgRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Define the scales
        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.closed_fiscal_quarter))
            .range([0, width])
            .padding(0.5);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.total)])
            .nice()
            .range([height, 0]);

        const colors = {
            ExistingCustomer: '#1f77b4', // Blue
            NewCustomer: '#ff7f0e' // Orange
        };

        // Define the stack generator
        const stack = d3.stack().keys(['ExistingCustomer', 'NewCustomer']);

        // Append the bars
        const layer = svg
            .selectAll('.layer')
            .data(stack(data))
            .enter()
            .append('g')
            .attr('class', 'layer')
            .attr('fill', (d) => colors[d.key]);

        layer
            .selectAll('rect')
            .data((d) => d)
            .enter()
            .append('rect')
            .attr('x', (d) => x(d.data.closed_fiscal_quarter))
            .attr('y', (d) => y(d[1]))
            .attr('height', (d) => y(d[0]) - y(d[1]))
            .attr('width', x.bandwidth());

        // Add the x-axis
        svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x));

        // Add the y-axis with formatted labels
        svg.append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(y).tickFormat(d3.format(".2s")));

        // Adding the text labels for the values and percentages on each stack
        layer
            .selectAll('text')
            .data((d) => d)
            .enter()
            .append('text')
            .attr('x', (d) => x(d.data.closed_fiscal_quarter) + x.bandwidth() / 2)
            .attr('y', (d) => y(d[1]) + (y(d[0]) - y(d[1])) / 2)
            .attr('dy', '.35em')
            .attr('text-anchor', 'middle')
            .each(function (d) {
                const value = d[1] - d[0];
                const percentage = (value / d.data.total) * 100;
                d3.select(this).append('tspan')
                    .attr('x', x(d.data.closed_fiscal_quarter) + x.bandwidth() / 2)
                    .attr('dy', '0em')
                    .text(d3.format(".2s")(value));
                d3.select(this).append('tspan')
                    .attr('x', x(d.data.closed_fiscal_quarter) + x.bandwidth() / 2)
                    .attr('dy', '1.2em')
                    .text(`(${percentage.toFixed(1)}%)`);
            })
            .style('fill', 'white');  // Optional: change the text color for better contrast

        // Adding the total labels on top of each bar
        svg.selectAll('.total')
            .data(data)
            .enter()
            .append('text')
            .attr('class', 'total')
            .attr('x', (d) => x(d.closed_fiscal_quarter) + x.bandwidth() / 2)
            .attr('y', (d) => y(d.total) - 5)
            .attr('text-anchor', 'middle')
            .text((d) => d3.format(".2s")(d.total))
            .style('fill', 'black');  // Optional: change the text color for better contrast

    }, [data]);

    return <svg ref={svgRef}></svg>;
};

export default StackedBarChart;
