import React from "react";
import Navbar from "./components/navbar/navbar";
// import logo from "./logo.svg";
import "./App.scss";
import TourList from "./components/TourList";

import { Component } from "react";

// function App() {
//   return <h1>City Tours</h1>;
// }
class App extends Component {
  render() {
    return (
      <main>
        <Navbar></Navbar>
        <TourList></TourList>
      </main>
    );
  }
}

export default App;
