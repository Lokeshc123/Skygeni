import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const dataReducer = createReducer(initialState, {
  // Add a case for the action type "ADD_DATA"
  // The case should add the action.payload to the state.data array
  // The case should return the state object
  ADD_DATA: (state, action) => {
    state.data.push(action.payload);
    return state;
  },
});
