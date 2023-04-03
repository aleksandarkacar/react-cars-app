import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performSetCars: () => {},
  performSetCar: () => {},
  performCreateCars: () => {},
  performEditCars: () => {},
  performDeleteCars: () => {},
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
  },
  reducers: {
    setCars: (state, action) => {
      state.data = action.payload;
    },
    setCar: (state, action) => {
      state.data = action.payload;
    },
    createCar: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    editCar: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteCar: (state, action) => {
      state.data = state.data.filter((car) => {
        if (car.id != action.payload) {
          return car;
        }
      });
    },
    ...middlewareActions,
  },
});

export const {
  setCars,
  createCar,
  editCar,
  deleteCar,
  performSetCars,
  performSetCar,
  performCreateCars,
  performEditCars,
  performDeleteCars,
} = carsSlice.actions;

export default carsSlice.reducer;
