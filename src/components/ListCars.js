import { Link } from "react-router-dom";
import carsService from "../services/CarsService";

export const ListCars = ({ cars, handleDelete }) => {
  return (
    <table className="center">
      <thead>
        <tr>
          <th>Brand:</th>
          <th>Model:</th>
          <th>Year:</th>
          <th>Max Speed:</th>
          <th>Automatic:</th>
          <th>Engine:</th>
          <th>Number of doors</th>
        </tr>
      </thead>
      {cars.map((car) => {
        return (
          <tbody key={car.id}>
            <tr>
              <td>{car.brand}</td>

              <td>{car.model}</td>

              <td>{car.year}</td>

              <td>{car.maxSpeed}</td>

              <td>{car.isAutomatic ? "Yes" : "No"}</td>

              <td>{car.engine}</td>

              <td>{car.numberOfDoors}</td>

              <td>
                <Link to={`/edit/${car.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(car.id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
