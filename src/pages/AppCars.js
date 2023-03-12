import carsService from "../services/CarsService";
import { useContext, useEffect, useState } from "react";
import { ListCars } from "../components/ListCars";

export const AppCars = () => {
  const [cars, setCars] = useState([]);

  async function handleGetCars() {
    const response = await carsService.getAll();
    setCars(response);
  }

  useEffect(() => {
    handleGetCars();
  }, []);

  const handleDelete = (id) => {
    const isDeleted = carsService.delete(id);
    if (isDeleted) {
      const newList = cars.filter((car) => car.id != id);
      setCars(newList);
    }
  };

  return (
    <div className="App">
      <h1>AppCars:</h1>
      <ListCars cars={cars} handleDelete={handleDelete} />
    </div>
  );
};
