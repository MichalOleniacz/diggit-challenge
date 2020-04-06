import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./screens/Homepage/Homepage";

function App() {
  return (
    <Switch>
      <Route path="/" component={Homepage} />
    </Switch>
  );
}

export default App;
