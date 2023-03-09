export const ListCars = ({ cars }) => {
  return (
    <table>
      <tr>
        <th>Brand:</th>
        <th>Model:</th>
        <th>Year:</th>
        <th>Max Speed:</th>
        <th>Automatic:</th>
        <th>Engine:</th>
        <th>Number of doors</th>
      </tr>
      {cars.map((car) => {
        console.log(car.isAutomatic);
        return (
          <tr key={car.id}>
            <td>{car.brand}</td>

            <td>{car.model}</td>

            <td>{car.year}</td>

            <td>{car.maxSpeed}</td>

            <td>{car.isAutomatic ? "Yes" : "No"}</td>

            <td>{car.engine}</td>

            <td>{car.numberOfDoors}</td>
          </tr>
        );
      })}
    </table>
  );
};
