import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CarSubmitForm } from "../components/CarSubmitForm";
import carsService from "../services/CarsService";

export const AddCar = () => {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: 1990,
    max_speed: 0,
    isautomatic: true,
    engine: "petrol",
    number_of_doors: 0,
  });
  const history = useHistory();

  const handleOnSubmitCar = (e) => {
    e.preventDefault();

    carsService.create(newCar);

    history.push("/cars");
  };

  return (
    <div>
      <h1>Add Car:</h1>
      <CarSubmitForm
        newCar={newCar}
        setNewCar={setNewCar}
        handleOnSubmitCar={handleOnSubmitCar}
      />
    </div>
  );
};
