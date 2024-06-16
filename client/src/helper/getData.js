import axios from "axios";
const baseURL = "http://localhost:5000/api";

export const getFileData = async (fileName) => {
  try {
    const response = await axios.get(`${baseURL}/${fileName}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
