import React from "react";
import ReactDOM from "react-dom";
import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Login from './Login';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

function App() {
    return (
        <div>
           <NavBar />
           <Home />
           <About />
           <Login /> 
        </div>
    )
}

export default App
