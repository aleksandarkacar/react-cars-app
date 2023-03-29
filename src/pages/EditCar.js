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
    max_speed: 0,
    isautomatic: true,
    engine: "petrol",
    number_of_doors: 0,
  });
  const [carValidationErrors, setCarValidationErrors] = useState("");

  async function handleGetCars() {
    const response = await carsService.get(params.id);
    setNewCar(response);
  }

  useEffect(() => {
    handleGetCars();
  }, []);

  const history = useHistory();

  const handleOnSubmitCar = async (e) => {
    e.preventDefault();
    try {
      await carsService.edit(newCar);
      history.push("/cars");
    } catch (err) {
      if (err.response.status == 422) {
        console.log("random console");
        console.log({ err });
        setCarValidationErrors(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <h1>Add Car:</h1>
      <h3 style={{ color: "red" }}>{carValidationErrors}</h3>
      <CarSubmitForm
        newCar={newCar}
        setNewCar={setNewCar}
        handleOnSubmitCar={handleOnSubmitCar}
      />
    </div>
  );
};
