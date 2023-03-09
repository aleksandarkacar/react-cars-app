import carsService from "../services/CarsService";
import { useEffect, useState } from "react";
import { ListCars } from "./components/ListCars";

export const AppCars = () => {
  const [cars, setCars] = useState([]);

  async function handleGetCars() {
    const response = await carsService.getAll();
    setCars(response);
  }

  useEffect(() => {
    handleGetCars();
  }, []);

  console.log(cars);

  return (
    <div>
      <h1>AppCars:</h1>
      <ListCars cars={cars} />
    </div>
  );
};
