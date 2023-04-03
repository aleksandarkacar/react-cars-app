import carsService from "../services/CarsService";
import { useContext, useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { ListCars } from "../components/ListCars";
import { useDispatch, useSelector } from "react-redux";
import { carsSelector } from "../store/cars/selectors";
import { performDeleteCars, performSetCars } from "../store/cars/slice";
import { CarsSearch } from "../components/CarsSearch";

export const AppCars = () => {
  const cars = useSelector(carsSelector);
  async function handleGetCars() {
    //   // const response = await carsService.getAll();
    //   // dispatch(setCars(response));
    dispatch(performSetCars());
  }

  const dispatch = useDispatch();

  useEffect(() => {
    handleGetCars();
  }, []);

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete car?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(performDeleteCars(id));
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="App">
      <h1>AppCars:</h1>
      <CarsSearch></CarsSearch>
      <ListCars cars={cars} handleDelete={handleDelete} />
    </div>
  );
};
