import React, { useState } from "react";
import { Card, Row, Container, Jumbotron, ProgressBar } from "react-bootstrap";
import "../App.css";

export default function Main() {
  return (
    <div>
      <Jumbotron className="main-jumbo">
        <h1 id="main-h1">Time-Table</h1>
      </Jumbotron>
      <Container id="progress-container">
        <Jumbotron>
          <Card>
            <br />
            {/* Name of task will go here */}
            <p className="task-name">Name of task</p>
            <ProgressBar variant="danger" now={65} id="task-bar" />
            <Container>
              <Row>
                <input
                  placeholder="Please enter an item to your list"
                  id="input-task"
                ></input>
                <button className="input-task-button">Add</button>
                <input
                  placeholder="Please enter a number of minutes for this task"
                  id="input-task-minutes"
                ></input>
                <button className="input-task-button">Add</button>
              </Row>
            </Container>
          </Card>
          <br />
          <Card>
            <p className="task-name">Transition</p>
            <ProgressBar variant="info" now={20} id="transition-bar" />
            <Container>
              <Row>
                <input
                  placeholder="Please enter a number of minutes for transition"
                  id="input-transition-minutes"
                ></input>
                <button className="input-task-button">Add</button>
              </Row>
            </Container>
          </Card>
          <button id="add-task-button">Add another task</button>
        </Jumbotron>
      </Container>
    </div>
  );
}
