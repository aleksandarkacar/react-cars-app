import { useParams } from "react-router-dom";

export const ListCars = ({ cars }) => {
  return (
    <ul>
      {cars.map((car) => {
        <li key={car.id}>
          Brand:{car.brand}| Model:{car.model}| Year:{car.year}| Max Speed:
          {car.maxSpeed}| Automatic:{car.isAutomatic}| Engine:{car.engine}|
          Number of doors:{car.numberOfDoors}|
        </li>;
      })}
    </ul>
  );
};
