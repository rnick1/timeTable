import React, { useEffect, useState } from "react";
import { Card, Row, Container, ProgressBar } from "react-bootstrap";
import "./Trans.css";

export default function Transition() {
  const [timeVisibility, setTimeVisibility] = useState(true);
  const [time, setTime] = useState(0);
  const [timeLimit, setTimeLimit] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

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
      <p className="task-name">
        {timeLimit === 0 ? "Transition" : timeLimit + " Minutes"}
      </p>
      <ProgressBar variant="info" now={time} id="transition-bar" />
      <Container>
        <Row>
          {timeVisibility ? (
            <form>
              <input
                placeholder="Please enter a number of minutes for transition"
                id="input-transition-minutes"
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
