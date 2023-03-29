import "./App.css";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { AppCars } from "./pages/AppCars";
import { AddCar } from "./pages/AddCar";
import { EditCar } from "./pages/EditCar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App center">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
