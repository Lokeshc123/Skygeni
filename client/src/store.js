import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./reducers/navbarReducer"; // Adjust the path as needed

const store = configureStore({
  reducer: {
    navbar: navbarReducer, // Use the correct key 'navbar'
  },
});

export default store;
