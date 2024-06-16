import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
export const setActiveItem = createAction("SET_ACTIVE_ITEM");
const initialState = {
  activeItem: "Bar Chart", // Default active item
};

const navbarReducer = createReducer(initialState, (builder) => {
  builder.addCase(setActiveItem, (state, action) => {
    state.activeItem = action.payload;
  });
});

export default navbarReducer;
