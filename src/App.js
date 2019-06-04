import React, { Component } from 'react';
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import { HashRouter, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/"} component={Home}/>
      </HashRouter>
    );
  }
}

export default App;