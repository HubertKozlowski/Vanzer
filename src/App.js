import React, { Component } from "react";
import "./App.scss";
import Welcome from "./components/Welcome/Welcome";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <AboutUs />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    );
  }
}

export default App;
