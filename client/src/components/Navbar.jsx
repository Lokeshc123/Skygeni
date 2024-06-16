import React from 'react';
import styled from 'styled-components';
import { IoBarChart } from "react-icons/io5";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { CiViewTable } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveItem } from "../reducers/navbarReducer";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleItemClick = (item) => () => {
        dispatch(setActiveItem(item));
    };

    return (
        <Container>
            <InnerContainer>
                <Content onClick={handleItemClick("Bar Chart")}>
                    <IoBarChart size={25} color='white' />
                    <Text>Bar Chart</Text>
                </Content>
                <Content onClick={handleItemClick("Doughnut")}>
                    <BiSolidDoughnutChart size={25} color='white' />
                    <Text>Doughnut</Text>
                </Content>
                <Content onClick={handleItemClick("Table")}>
                    <CiViewTable size={25} color='white' />
                    <Text>Table</Text>
                </Content>
                <Content onClick={() => { handleItemClick("Logout")(); navigate("/"); }}>
                    <CiLogout size={25} color='white' />
                    <Text>Logout</Text>
                </Content>
            </InnerContainer>
        </Container>
    );
};

export default Navbar;

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    height: 100%;
    width: 8%;
    background-color: #1DA1F2;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75%;
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    height: 10%;
    margin-top: 50px;
    width: 100%;
    cursor: pointer;
`;

const Text = styled.h1`
    font-size: 15px;
    margin-left: 10px;
    color: #fff;
    margin-top: 10px;
`;
