import carsService from "../services/CarsService";
import { useContext, useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { ListCars } from "../components/ListCars";
import { useDispatch, useSelector } from "react-redux";
import { carsSelector } from "../store/cars/selectors";
import { setCars } from "../store/cars/slice";
import { CarsSearch } from "../components/CarsSearch";

export const AppCars = () => {
  const cars = useSelector(carsSelector);
  async function handleGetCars() {
    const response = await carsService.getAll();
    dispatch(setCars(response));
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
            const isDeleted = carsService.delete(id);
            if (isDeleted) {
              const newList = cars.filter((car) => car.id != id);
              setCars(newList);
            }
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
