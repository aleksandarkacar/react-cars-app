import { call, put, takeLatest } from "redux-saga/effects";
import {
  performSetCars,
  performSetCar,
  performCreateCars,
  setCars,
  createCar,
  performDeleteCars,
  deleteCar,
} from "./slice";
import carsService from "../../services/CarsService";

function* setCarsHandler() {
  try {
    const cars = yield call(carsService.getAll);
    console.log(cars);
    yield put(setCars(cars));
  } catch (err) {
    console.log(err);
  }
}

function* setCarHandler(payload) {
  try {
    const car = yield call(carsService.get(payload));
    console.log(car);
    yield put(setCars(car));
  } catch (err) {
    console.log(err);
  }
}

function* createCarHandler({ payload }) {
  try {
    console.log("create car handler payload:", payload);
    yield call(carsService.create, payload);
    yield put(createCar(payload));
  } catch (err) {
    console.log(err);
  }
}

function* deleteCarHandler({ payload }) {
  try {
    console.log("delete car handler payload: ", payload);
    yield call(carsService.delete, payload);
    yield put(deleteCar(payload));
  } catch (err) {
    console.log(err);
  }
}

export function* watchSetCars() {
  yield takeLatest(performSetCars.type, setCarsHandler);
}

export function* watchSetCar() {
  yield takeLatest(performSetCar.type, setCarHandler);
}

export function* watchCreateCars() {
  yield takeLatest(performCreateCars.type, createCarHandler);
}

export function* watchDeleteCars() {
  yield takeLatest(performDeleteCars.type, deleteCarHandler);
}
