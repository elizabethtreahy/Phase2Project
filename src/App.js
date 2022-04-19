import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import LiveHome from "./LiveHome";
import LetFlyHome from "./LetFlyHome";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/live">
          <LiveHome />
        </Route>
        <Route exact path="/letfly">
          <LetFlyHome />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
