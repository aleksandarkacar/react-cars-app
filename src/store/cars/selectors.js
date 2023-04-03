export const carsSelector = (state) => state.cars.data;
export const carByIdSelector = (state, id) => {
  return state.cars.data.find((car) => car.id == id);
};
