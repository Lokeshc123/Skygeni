// DoughnutChart.js
import React, { useEffect, useRef } from 'react';
import DrawDoughnutChart from './DrawDoughnutChart';

const DoughnutChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            DrawDoughnutChart(chartRef.current, data);
        }
    }, [data]);

    return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default DoughnutChart;
