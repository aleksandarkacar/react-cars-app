export const CarSubmitForm = ({ newCar, setNewCar, handleOnSubmitCar }) => {
  const yearArray = [...Array(29).keys()];

  return (
    <form onSubmit={handleOnSubmitCar}>
      <div>
        <label>Brand: </label>
        <input
          value={newCar.brand}
          onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
        ></input>
      </div>

      <div>
        <label>Model: </label>
        <input
          value={newCar.model}
          onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
        ></input>
      </div>

      <div>
        <label>Year: </label>
        <select
          type="combo"
          value={newCar.year}
          onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
        >
          {yearArray.map((year) => {
            year = year + 1990;
            return <option value={year}>{year}</option>;
          })}
        </select>
      </div>

      <div>
        <label>Max Speed: </label>
        <input
          type="number"
          value={newCar.maxSpeed}
          onChange={(e) => setNewCar({ ...newCar, maxSpeed: e.target.value })}
        ></input>
      </div>

      <label>Is it Automatic: </label>
      <div>
        <input
          type="checkbox"
          value={newCar.isAutomatic}
          checked={newCar.isAutomatic}
          onChange={(e) => {
            setNewCar({ ...newCar, isAutomatic: !newCar.isAutomatic });
          }}
        ></input>
      </div>

      <div>
        <label>Engine: </label>
        <input
          value={newCar.engine}
          onChange={(e) => setNewCar({ ...newCar, engine: e.target.value })}
        ></input>
      </div>

      <div>
        <label>Number of doors: </label>
        <input
          type="number"
          value={newCar.numberOfDoors}
          onChange={(e) =>
            setNewCar({ ...newCar, numberOfDoors: e.target.value })
          }
        ></input>
      </div>

      <div>
        <button type="submit">Submit new Car</button>
      </div>
    </form>
  );
};
