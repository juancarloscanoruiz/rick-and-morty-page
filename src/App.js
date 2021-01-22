import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home";
import Character from "./pages/Character";
import "./App.scss"
function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact="true" component={Home}/>
        <Route path="/character/:id" exact="true" component={Character}/>
      </Switch>
    </Router>
  );
}

export default App;
