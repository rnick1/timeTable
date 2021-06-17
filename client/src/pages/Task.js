import React, { useState } from "react";
import { Card, Row, Container, ProgressBar } from "react-bootstrap";
import "../App.css";

export default function Task() {
  const [listItem, setListItem] = useState(" ");
  const [taskVisibility, setTaskVisibility] = useState(true);
  const [timeVisibility, setTimeVisibility] = useState(true);
  const [timeLimit, setTimeLimit] = useState(0);

  // console.log(timeLimit);
  // console.log(timeVisibility);

  return (
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
  );
}
