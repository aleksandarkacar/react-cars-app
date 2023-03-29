import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
  },
  reducers: {
    setCars: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCars } = carsSlice.actions;

export default carsSlice.reducer;
