import React from 'react';
import styled from 'styled-components';

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
        { quarter: '2023-Q3', type: 'New Customer', opps: 14, acv: '$983,031', percent: '43%', color: '#F5A623' },
        { quarter: '2023-Q4', type: 'Existing Customer', opps: 45, acv: '$1,124,857', percent: '74%', color: '#4A90E2' },
        { quarter: '2023-Q4', type: 'New Customer', opps: 10, acv: '$387,300', percent: '26%', color: '#F5A623' },
        { quarter: '2024-Q1', type: 'Existing Customer', opps: 51, acv: '$1,360,047', percent: '81%', color: '#4A90E2' },
        { quarter: '2024-Q1', type: 'New Customer', opps: 6, acv: '$313,189', percent: '19%', color: '#F5A623' },
        { quarter: '2024-Q2', type: 'Existing Customer', opps: 23, acv: '$647,821', percent: '74%', color: '#4A90E2' },
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

const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  width: 80%;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Tr = styled.tr`
  background-color: ${props => props.color || '#ffffff'};
`;

const Tablex = () => {
    return (
        <div className="App">
            <h2>Closed Fiscal Quarter Data</h2>
            <Table>
                <thead>
                    <tr>
                        {data.columns.map((col, index) => (
                            <Th key={index}>{col}</Th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, index) => (
                        <Tr key={index} color={row.color}>
                            <Td>{row.quarter}</Td>
                            <Td>{row.type}</Td>
                            <Td>{row.opps}</Td>
                            <Td>{row.acv}</Td>
                            <Td>{row.percent}</Td>
                        </Tr>
                    ))}
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
