import React, { useState } from "react";
import { Card, Row, Container, Jumbotron, ProgressBar } from "react-bootstrap";
import "../App.css";
import Task from "./Task";

export default function Main() {
  // const [listItem, setListItem] = useState(" ");

  // console.log(timeLimit);

  return (
    <div>
      <Jumbotron className="main-jumbo">
        <h1 id="main-h1">Time-Table</h1>
      </Jumbotron>
      <Container id="progress-container">
        <Jumbotron>
          <Task />
          <br />
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
          <button
            id="add-task-button"
            // onClick={handleFormSubmit}
          >
            Add another task
          </button>
        </Jumbotron>
      </Container>
    </div>
  );
}

// Notes

/*
1. The buttons and inputs work.
2. When a user enters a list item into the input, that needs to update state.
3. When the user clicks the list item submit button, the input needs to go away and the list item needs to be displayed.
4. 

*/
