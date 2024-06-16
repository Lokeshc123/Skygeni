import axios from "axios";

const baseURL = "http://localhost:5000/api";

export const register = async (user) => {
  try {
    const response = await axios.post(`${baseURL}/user/new`, user);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post(`${baseURL}/user/login`, user);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
