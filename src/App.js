import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { AppCars } from "./pages/AppCars";
import { AddCars } from "./pages/AddCars";

function App() {
  return (
    <div className="App">
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
            <AddCars />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
