// Home.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import StackedBarChart from '../components/Bar';
import { getFileData } from '../helper/getData';
import { useSelector } from "react-redux";
import DoughnutChart from '../components/DoughnutChart'; // Import the DoughnutChart component
import Tablex from '../components/Tablex';

const Home = () => {
    const [data, setData] = useState([]);

    const activeItem = useSelector((state) => state.navbar.activeItem); // Correct the state path
    console.log("Home");
    console.log("Active Item: ", activeItem);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getFileData("Customer Type.json");
            setData(response.data);
        };
        fetchData();
    }, []);

    const combinedData = {};

    data.forEach(item => {
        const { closed_fiscal_quarter, Cust_Type, count, acv } = item;
        const key = closed_fiscal_quarter;

        if (!combinedData[key]) {
            combinedData[key] = {
                closed_fiscal_quarter: key,
                ExistingCustomer: 0,
                countExistingCustomer: 0,
                NewCustomer: 0,
                countNewCustomer: 0,
                total: 0
            };
        }

        const countNum = Number(count);
        const acvNum = Number(acv);

        if (Cust_Type === "Existing Customer") {
            combinedData[key].ExistingCustomer += acvNum;
            combinedData[key].countExistingCustomer += countNum;
        } else if (Cust_Type === "New Customer") {
            combinedData[key].NewCustomer += acvNum;
            combinedData[key].countNewCustomer += countNum;
        }
        combinedData[key].total = combinedData[key].ExistingCustomer + combinedData[key].NewCustomer;
    });

    const totalAcv = data.reduce((acc, item) => {
        if (item.Cust_Type === "Existing Customer") {
            acc.totalExistingAcv += item.acv;
        } else if (item.Cust_Type === "New Customer") {
            acc.totalNewAcv += item.acv;
        }
        return acc;
    }, { totalExistingAcv: 0, totalNewAcv: 0 });
    console.log("Total ACV: ", totalAcv);
    const meow = [
        { name: 'Existing Customer', value: totalAcv.totalExistingAcv },
        { name: 'New Customer', value: totalAcv.totalNewAcv }
    ];
    const result = Object.values(combinedData);

    return (
        <Container>
            <Navbar />
            <Content>
                {activeItem === "Bar Chart" && <StackedBarChart data={result} />}
                {activeItem === "Doughnut" && <DoughnutChart data={meow} />}
                {activeItem === "Table" && <Tablex />}
                {/* Render DoughnutChart based on activeItem */}
            </Content>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 92%;
`;
