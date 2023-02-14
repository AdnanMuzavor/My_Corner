import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Screens/Home";
import Contact from "./Screens/Contact";
import MyProjects from "./Screens/Projects";
import Gallery from "./Screens/Gallery";
import About from "./Screens/About";
import Adder from "./Screens/AddAttribute";
import Login from "./Screens/login";
import Experience from "./Screens/Experience";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
function App() {
  return (
    <>
     
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={MyProjects} />
        <Route exact path="/gallery" component={Gallery} />
        {/* <Route exact path="/services" component={} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/admin" component={Adder} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/exp" component={Experience} />
        <Redirect to="/" />
      </Switch>

      <Footer/>
    </>
  );
}

export default App;
