export const CarSubmitForm = ({ newCar, setNewCar, handleOnSubmitCar }) => {
  const yearArray = [...Array(29).keys()];
  const resetButton = () => {
    setNewCar({
      brand: "",
      model: "",
      year: 1990,
      max_speed: 0,
      isautomatic: true,
      engine: "petrol",
      number_of_doors: 0,
    });
  };
  const previewButton = () => {
    alert(`Current Values: 
    brand: ${newCar.brand} 
    model: ${newCar.model} 
    year: ${newCar.year} 
    max speed: ${newCar.max_speed} 
    automatic?: ${newCar.isautomatic} 
    engine: ${newCar.engine} 
    number of doors: ${newCar.number_of_doors} 
    `);
  };

  return (
    <div>
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
            {yearArray.map((year, index) => {
              year = year + 1990;
              return (
                <option key={index} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label>Max Speed: </label>
          <input
            type="number"
            value={newCar.max_speed}
            onChange={(e) =>
              setNewCar({ ...newCar, max_speed: e.target.value })
            }
          ></input>
        </div>

        <div>
          <label>Is it Automatic: </label>
          <input
            type="checkbox"
            value={newCar.isautomatic}
            checked={newCar.isautomatic}
            onChange={(e) => {
              setNewCar({ ...newCar, isautomatic: !newCar.isautomatic });
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
            value={newCar.number_of_doors}
            onChange={(e) =>
              setNewCar({ ...newCar, number_of_doors: e.target.value })
            }
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <button onClick={resetButton}>Reset</button>

        <button onClick={previewButton}>Preview</button>
      </div>
    </div>
  );
};
