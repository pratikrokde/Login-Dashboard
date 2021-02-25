import { useState } from "react";
import "./App.css";

import Login from "./containers/Login";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./containers/Dashboard/Dashboard";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [loggedInn, setLoggedInn] = useState(true);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" exact>
            <Login setLoggedInn={setLoggedInn} />
          </Route>
          <Route
            path="/dashboard"
            exact
            render={() =>
              loggedInn ? <Dashboard /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
