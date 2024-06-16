import React from 'react';
import styled from 'styled-components';
import { IoBarChart } from "react-icons/io5";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { CiViewTable } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveItem } from "../reducers/navbarReducer";

// This component represents the navigation bar for the application
const Navbar = () => {
    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();
    // useDispatch hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Function to handle clicks on navigation items
    const handleItemClick = (item) => () => {
        // Dispatch an action to set the active item in the navbar slice of the Redux store
        dispatch(setActiveItem(item));
    };

    return (
        <Container>
            <InnerContainer>
                {/* Content for Bar Chart navigation item */}
                <Content onClick={handleItemClick("Bar Chart")}>
                    <IoBarChart size={25} color='white' />  {/* Icon for Bar Chart */}
                    <Text>Bar Chart</Text>  {/* Text label for Bar Chart */}
                </Content>
                {/* Content for Doughnut navigation item */}
                <Content onClick={handleItemClick("Doughnut")}>
                    <BiSolidDoughnutChart size={25} color='white' />  {/* Icon for Doughnut */}
                    <Text>Doughnut</Text>  {/* Text label for Doughnut */}
                </Content>
                {/* Content for Table navigation item */}
                <Content onClick={handleItemClick("Table")}>
                    <CiViewTable size={25} color='white' />  {/* Icon for Table */}
                    <Text>Table</Text>  {/* Text label for Table */}
                </Content>
                {/* Content for Logout navigation item */}
                <Content onClick={() => { handleItemClick("Logout")(); navigate("/"); }}>
                    <CiLogout size={25} color='white' />  {/* Icon for Logout */}
                    <Text>Logout</Text>  {/* Text label for Logout */}
                </Content>
            </InnerContainer>
        </Container>
    );
};

export default Navbar;

// Styled components for layout
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
