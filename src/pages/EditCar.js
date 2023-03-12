import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CarSubmitForm } from "../components/CarSubmitForm";
import carsService from "../services/CarsService";
import { useEffect } from "react";

export const EditCar = ({ id }) => {
  const params = useParams();
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: 1990,
    maxSpeed: 0,
    isAutomatic: true,
    engine: "petrol",
    numberOfDoors: 0,
  });

  async function handleGetCars() {
    const response = await carsService.get(params.id);
    setNewCar(response);
  }

  useEffect(() => {
    handleGetCars();
  }, []);

  const history = useHistory();

  const handleOnSubmitCar = (e) => {
    e.preventDefault();

    carsService.edit(newCar, params.id);

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
