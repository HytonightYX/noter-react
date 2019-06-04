import React, { Component } from 'react';
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Note from './pages/Note/Note'
import { HashRouter, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/note/:id/edit"} component={Note}/>
      </HashRouter>
    );
  }
}

export default App;