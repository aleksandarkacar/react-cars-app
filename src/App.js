import "./App.css";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { AppCars } from "./pages/AppCars";
import { AddCar } from "./pages/AddCar";
import { EditCar } from "./pages/EditCar";

function App() {
  return (
    <div className="App center">
      <BrowserRouter>
        <Link to={"/cars"}>
          <button>View Cars</button>
        </Link>
        <Link to={"/add"}>
          <button>Add Car</button>
        </Link>
        <Switch>
          <Route exact path={"/"}>
            <Redirect to={"/cars"} />
          </Route>
          <Route path={"/cars"}>
            <AppCars />
          </Route>
          <Route path={"/add"}>
            <AddCar />
          </Route>
          <Route path={"/edit/:id"}>
            <EditCar />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
