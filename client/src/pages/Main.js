import React, { useState } from "react";
import { Card, Row, Container, Jumbotron, ProgressBar } from "react-bootstrap";
import "../App.css";

export default function Main() {
  const [listItem, setListItem] = useState(" ");
  const [taskVisibility, setTaskVisibility] = useState(true);
  const [timeVisibility, setTimeVisibility] = useState(true);
  const [timeLimit, setTimeLimit] = useState(0);

  // console.log(timeLimit);
  console.log(timeVisibility);

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
            <p className="task-name">
              {listItem === " " ? "Name of task" : listItem}
            </p>
            <p className="task-name">
              {timeLimit === 0 ? "Time Limit" : timeLimit + " Minutes"}
            </p>
            <ProgressBar variant="danger" now={65} id="task-bar" />
            <Container>
              <Row>
                {taskVisibility ? (
                  <form>
                    <input
                      placeholder="Please enter an item to your list"
                      id="input-task"
                      name="task"
                      onChange={(event) => setListItem(event.target.value)}
                    ></input>
                    <button
                      className="input-task-button"
                      onClick={(event) => setTaskVisibility(false)}
                    >
                      Add
                    </button>
                  </form>
                ) : (
                  <button onClick={(event) => setTaskVisibility(true)}>
                    Edit Task
                  </button>
                )}
                {timeVisibility ? (
                  <form>
                    <input
                      placeholder="Please enter a number of minutes for this task"
                      id="input-task-minutes"
                      name="setTime"
                      onChange={(event) => setTimeLimit(event.target.value)}
                    ></input>
                    <button
                      className="input-task-button"
                      onClick={(event) => setTimeVisibility(false)}
                    >
                      Add
                    </button>
                  </form>
                ) : (
                  <button onClick={(event) => setTimeVisibility(true)}>
                    Edit Time
                  </button>
                )}
                {/* {taskVisibility ? } */}
                <button>Start</button>
                <button>Stop</button>

                {/* // ========================================================================= */}
                {/* ========================================================================== */}
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
