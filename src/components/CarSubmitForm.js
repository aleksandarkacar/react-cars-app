export const CarSubmitForm = ({ newCar, setNewCar, handleOnSubmitCar }) => {
  const yearArray = [...Array(29).keys()];

  return (
    <div>
      <form onSubmit={handleOnSubmitCar}>
        <div>
          <label>Brand: </label>
          <input
            value={newCar.brand}
            onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
            required
            minLength="2"
          ></input>
        </div>

        <div>
          <label>Model: </label>
          <input
            value={newCar.model}
            onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
            required
            minLength="2"
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

        <div>
          <label>Is it Automatic: </label>
          <input
            type="checkbox"
            value={newCar.isAutomatic}
            checked={newCar.isAutomatic}
            onChange={(e) => {
              setNewCar({ ...newCar, isAutomatic: !newCar.isAutomatic });
            }}
          ></input>
        </div>

        <fieldset>
          <div
            onChange={(e) => setNewCar({ ...newCar, engine: e.target.value })}
          >
            <label>Engine: </label>
            <input
              type="radio"
              value="petrol"
              checked={newCar.engine === "petrol"}
            />
            Petrol
            <input
              type="radio"
              value="diesel"
              checked={newCar.engine === "diesel"}
            />
            Diesel
            <input
              type="radio"
              value="electric"
              checked={newCar.engine === "electric"}
            />
            Electric
            <input
              type="radio"
              value="hybrid"
              checked={newCar.engine === "hybrid"}
            />
            Hybrid
            <div>Selected Option is : {newCar.engine}</div>
          </div>
        </fieldset>

        <div>
          <label>Number of doors: </label>
          <input
            type="number"
            value={newCar.numberOfDoors}
            onChange={(e) =>
              setNewCar({ ...newCar, numberOfDoors: e.target.value })
            }
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <button
          onClick={() => {
            setNewCar({
              brand: "",
              model: "",
              year: 1990,
              maxSpeed: 0,
              isAutomatic: true,
              engine: "petrol",
              numberOfDoors: 0,
            });
          }}
        >
          Reset
        </button>

        <button
          onClick={() => {
            alert(`Current Values: 
            brand: ${newCar.brand} 
            model: ${newCar.model} 
            year: ${newCar.year} 
            max speed: ${newCar.maxSpeed} 
            automatic?: ${newCar.isAutomatic} 
            engine: ${newCar.engine} 
            number of doors: ${newCar.numberOfDoors} 
            `);
          }}
        >
          Preview
        </button>
      </div>
    </div>
  );
};
