/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Jumbotron style={{ border: "solid" }}>
      <h1
        style={{
          textAlign: "center",
          color: "red",
          fontSize: "124px",
        }}
      >
        timeTable
      </h1>
    </Jumbotron>
    // {/* // <div className="App">
    // //   <div className="App-header">
    // //     <h2>Welcome to React</h2>
    // //   </div>
    // //   <p className="App-intro">
    // //     To get started, edit <code>src/App.js</code> and save to reload.
    // //   </p>
    // // </div> */}
  );
}

export default App;
