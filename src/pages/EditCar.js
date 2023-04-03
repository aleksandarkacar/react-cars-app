import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CarSubmitForm } from "../components/CarSubmitForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carByIdSelector } from "../store/cars/selectors";
import { performEditCars, performSetCars } from "../store/cars/slice";

export const EditCar = () => {
  const params = useParams();
  const selectedCar = useSelector((state) => carByIdSelector(state, params.id));
  const dispatch = useDispatch();
  const [carValidationErrors, setCarValidationErrors] = useState("");
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: 1990,
    max_speed: 0,
    isautomatic: true,
    engine: "petrol",
    number_of_doors: 0,
  });

  function handleGetCars() {
    setNewCar(selectedCar);
  }

  useEffect(() => {
    handleGetCars();
  }, []);

  const history = useHistory();

  const handleOnSubmitCar = (e) => {
    e.preventDefault();
    dispatch(performEditCars(newCar));
  };

  return (
    <div>
      <h1>Edit Car:</h1>
      <h3 style={{ color: "red" }}>{carValidationErrors}</h3>
      <CarSubmitForm
        newCar={newCar}
        setNewCar={setNewCar}
        handleOnSubmitCar={handleOnSubmitCar}
      />
    </div>
  );
};
