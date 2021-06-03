/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Card, Row, Container, Jumbotron, ProgressBar } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div>
      <Jumbotron style={{ border: "solid", width: "100vw" }}>
        <h1
          style={{
            textAlign: "center",
            color: "red",
            fontSize: "124px",
          }}
        >
          Time-Table
        </h1>
      </Jumbotron>
      <Container style={{ border: "solid" }}>
        <Jumbotron>
          <Card>
            <br />
            {/* Name of task will go here */}
            <p style={{ margin: "auto" }}>Name of task</p>
            <ProgressBar
              variant="danger"
              now={65}
              style={{
                height: "30px",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "20px",
              }}
            />
            <Container>
              <Row>
                <input
                  placeholder="Please enter an item to your list"
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    marginBottom: "20px",
                    width: "40%",
                  }}
                ></input>
                <button style={{ marginLeft: "10px", height: "30px" }}>
                  Add
                </button>
                <input
                  placeholder="Please enter a number of minutes for this task"
                  style={{
                    marginLeft: "20px",
                    marginRight: "10px",
                    marginBottom: "20px",
                    width: "40%",
                  }}
                ></input>
                <button
                  style={{
                    marginLeft: "10px",
                    height: "30px",
                  }}
                >
                  Add
                </button>
              </Row>
            </Container>
          </Card>
          <br />
          <Card>
            <p style={{ margin: "auto" }}>Transition</p>
            <ProgressBar
              variant="info"
              now={20}
              style={{
                height: "30px",
                marginTop: "25px",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "20px",
              }}
            />
            <Container>
              <Row>
                <input
                  placeholder="Please enter a number of minutes for transition"
                  style={{
                    marginLeft: "520px",
                    marginRight: "10px",
                    marginBottom: "20px",
                    width: "40%",
                  }}
                ></input>
                <button
                  style={{
                    marginLeft: "10px",
                    height: "30px",
                  }}
                >
                  Add
                </button>
              </Row>
            </Container>
          </Card>
          <button style={{ marginTop: "20px", marginLeft: "86%" }}>
            Add another task
          </button>
        </Jumbotron>
      </Container>
    </div>
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
