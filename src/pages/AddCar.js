import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CarSubmitForm } from "../components/CarSubmitForm";
import { useDispatch } from "react-redux";
import { performCreateCars } from "../store/cars/slice";

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
  const [carValidationErrors, setCarValidationErrors] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnSubmitCar = (e) => {
    e.preventDefault();
    console.log("Pre dispatch-a");
    dispatch(performCreateCars(newCar));
    console.log("Posle dispatch");
    history.push("/cars");
    // } catch (err) { // Treba prebaciti ovo negde drugde
    //   if (err.response.status == 422) {
    //     console.log(err.response.data.message);
    //     setCarValidationErrors(err.response.data.message);
    //   }
  };

  // async function handleSubmit() {
  //   try {
  //     await authService.login(credentials);
  //   } catch (err) {
  //     if (err.response.status == 401) {
  //       setInvalidCredentials(true);
  //     }
  //   }
  // }

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
