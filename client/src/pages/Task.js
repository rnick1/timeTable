import React, { useState, useEffect } from "react";
import { Card, Row, Container, ProgressBar } from "react-bootstrap";
import "../App.css";

export default function Task() {
  const [listItem, setListItem] = useState(" ");
  const [taskVisibility, setTaskVisibility] = useState(true);
  const [timeVisibility, setTimeVisibility] = useState(true);

  const [time, setTime] = useState(0);
  const [timeLimit, setTimeLimit] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  // =================================================

  useEffect(() => {
    let interval = null;

    if (startTimer) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!startTimer) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [startTimer]);

  // =================================================
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
      <ProgressBar
        variant="danger"
        now={("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        id="task-bar"
      />
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
          <button onClick={() => setStartTimer(true)}>Start</button>
          <button onClick={() => setStartTimer(false)}>Stop</button>

          {/* // ========================================================================= */}
          {/* ========================================================================== */}
        </Row>
      </Container>
    </Card>
  );
}
