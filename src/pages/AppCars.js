import carsService from "../services/CarsService";
import { useContext, useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
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
    const confirmation = confirmAlert({
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
      <ListCars cars={cars} handleDelete={handleDelete} />
    </div>
  );
};
