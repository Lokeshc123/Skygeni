import React, { useEffect, useRef } from 'react';
import DrawDoughnutChart from './DrawDoughnutChart'; // Importing the function responsible for drawing the doughnut chart

const DoughnutChart = ({ data }) => {
    const chartRef = useRef(null); // Ref to hold reference to the div element where chart will be rendered

    useEffect(() => {
        // Effect to run when 'data' prop changes
        if (chartRef.current) {
            DrawDoughnutChart(chartRef.current, data); // Call function to draw the doughnut chart
        }
    }, [data]); // Dependency array watches for changes in 'data' prop

    return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />; // Render div for chart with 100% width and height
};

export default DoughnutChart;
