import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Boye from "./components/Boye.component";
import Home from "./components/Home.component";

// React Component with normal functions using other components
function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route component={Boye} path="/boye" />
        <Route component={Home} path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
