import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import carsReducer from "./cars/slice";
import createSagaMiddleware from "@redux-saga/core";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), sagaMiddleware];
  },
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

export default store;
