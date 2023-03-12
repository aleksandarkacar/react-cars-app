import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CarSubmitForm } from "../components/CarSubmitForm";
import carsService from "../services/CarsService";

export const AddCars = () => {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: 1990,
    maxSpeed: 0,
    isAutomatic: true,
    engine: "",
    numberOfDoors: 0,
  });
  const history = useHistory();

  const handleOnSubmitCar = (e) => {
    e.preventDefault();

    carsService.create(newCar);

    history.push("/cars");
  };

  return (
    <div>
      <h1>Add Cars:</h1>
      <CarSubmitForm
        newCar={newCar}
        setNewCar={setNewCar}
        handleOnSubmitCar={handleOnSubmitCar}
      />
    </div>
  );
};
