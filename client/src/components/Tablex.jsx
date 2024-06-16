import React from 'react';
import styled from 'styled-components';

// Sample data for the table
const data = {
    columns: [
        'Closed Fiscal Quarter',
        'Cust Type',
        '# of Opps',
        'ACV',
        '% of Total',
    ],
    rows: [
        { quarter: '2023-Q3', type: 'Existing Customer', opps: 46, acv: '$1,322,310', percent: '57%', color: '#4A90E2' },
        // ... other rows omitted for brevity
        { quarter: '2024-Q2', type: 'New Customer', opps: 6, acv: '$224,643', percent: '26%', color: '#F5A623' },
    ],
    totals: {
        quarter: 'Total',
        opps: 201,
        acv: '$6,363,200',
        percent: '100%',
        color: '#FFFFFF'
    }
};

// Styled component for the table container
const Table = styled.table`
  margin: 0 auto;  /* Center the table horizontally */
  border-collapse: collapse;
  width: 80%;
`;

// Styled component for table headers (TH elements)
const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
`;

// Styled component for table cells (TD elements)
const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

// Styled component for table rows (TR elements)
const Tr = styled.tr`
  background-color: ${props => props.color || '#ffffff'}; /* Set background color based on props */
`;

// Table component to render the data
const Tablex = () => {
    return (
        <div className="App">
            <h2>Closed Fiscal Quarter Data</h2>
            <Table>
                <thead>
                    {/* Render table headers from data.columns */}
                    <tr>
                        {data.columns.map((col, index) => (
                            <Th key={index}>{col}</Th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* Render table rows from data.rows */}
                    {data.rows.map((row, index) => (
                        <Tr key={index} color={row.color}>
                            <Td>{row.quarter}</Td>
                            <Td>{row.type}</Td>
                            <Td>{row.opps}</Td>
                            <Td>{row.acv}</Td>
                            <Td>{row.percent}</Td>
                        </Tr>
                    ))}
                    {/* Render a separate row for totals from data.totals */}
                    <Tr color={data.totals.color}>
                        <Td colSpan="2">{data.totals.quarter}</Td>
                        <Td>{data.totals.opps}</Td>
                        <Td>{data.totals.acv}</Td>
                        <Td>{data.totals.percent}</Td>
                    </Tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Tablex;
