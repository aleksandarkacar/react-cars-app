import { useState } from "react";
import { useDispatch } from "react-redux";
import carsService from "../services/CarsService";
import { setCars } from "../store/cars/slice";

export const CarsSearch = () => {
  const [searchBrand, setSearchBrand] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const dispatch = useDispatch();

  const handleSearch = async () => {
    const searchedCars = await carsService.searchAll(searchBrand, searchModel);
    dispatch(setCars(searchedCars));
  };

  return (
    <div>
      <div>
        <label>Brand: </label>
        <input
          value={searchBrand}
          onChange={(e) => setSearchBrand(e.target.value)}
        />
      </div>
      <div>
        <label>Model: </label>
        <input
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
        />
      </div>
      <button onClick={() => handleSearch()}>Search</button>;
    </div>
  );
};
