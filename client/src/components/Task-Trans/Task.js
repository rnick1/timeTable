import React, { useState, useEffect } from "react";
import { Card, Row, Container, ProgressBar } from "react-bootstrap";
import "../../App.css";

export default function Task() {
  const [listItem, setListItem] = useState(" ");
  const [taskVisibility, setTaskVisibility] = useState(true);
  const [timeVisibility, setTimeVisibility] = useState(true);
  const [time, setTime] = useState(0);
  const [timeLimit, setTimeLimit] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  // console.log(time);
  // console.log(timeLimit);
  // console.log(startTimer);

  // Important! Look at Week 4 Activity 9 and 10 for a super basic example of setInterval. Maybe I should set the space not take up by the progress bar and have the progress bar itself expand as the space not taken up by it gets decremented? So setTimeLimit = whatever the user puts in and then decrement from that. If (timeLimit === 0) {make noise}
  useEffect(() => {
    let interval = null;

    if (startTimer) {
      interval = setInterval(() => {
        setTime((seconds) => seconds + 0.17 / timeLimit);
      }, 100);
    } else if (!startTimer) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [startTimer]);

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
        now={time}
        // "0" + Math.floor((time / 1000) * 60)
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
          <button onClick={() => setTime(0)}>Reset</button>
        </Row>
      </Container>
    </Card>
  );
}
