import logo from "./logo.svg";
import "./App.css";
import { AppCars } from "./pages/AppCars";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Redirect to={"/cars"} />
          </Route>
          <Route path={"/cars"}>
            <AppCars />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
