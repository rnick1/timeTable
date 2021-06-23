import React, { useState } from "react";
import { Card, Row, Container, Jumbotron, ProgressBar } from "react-bootstrap";
import "../../App.css";

export default function Transition() {
  return (
    <Card>
      <p className="task-name">Transition</p>
      <ProgressBar variant="info" now={20} id="transition-bar" />
      <Container>
        <Row>
          <input
            placeholder="Please enter a number of minutes for transition"
            id="input-transition-minutes"
            // onChange={handleInputChange}
          ></input>
          <button
            className="input-task-button"
            // onClick={handleFormSubmit}
          >
            Add
          </button>
        </Row>
      </Container>
    </Card>
  );
}
