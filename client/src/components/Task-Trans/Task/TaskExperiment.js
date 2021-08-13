import React, { useState, useEffect } from "react";
import { Card, Row, Container, ProgressBar } from "react-bootstrap";
import "./Task.css";
import bell from "../../../static/dbell.mp3";

export default function TaskExperiment() {
  const [listItem, setListItem] = useState(" ");
  const [taskVisibility, setTaskVisibility] = useState(true);
  const [timeVisibility, setTimeVisibility] = useState(true);
  const [time, setTime] = useState(0);
  const [timeLimit, setTimeLimit] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [audio] = useState(new Audio(bell));

  console.log(time);
  // console.log(isPlaying);
  console.log(timeLimit);
  // console.log(startTimer);

  // timeLimit is the maximum amount of time that the user has alloted to the task.
  // time is the amount of time that has elapsed
  // timeLimit - time = timeRemaining

  useEffect(() => {
    let interval = null;
    var seconds = (timeLimit * 60) / 100;

    if (startTimer) {
      interval = setInterval(() => {
        setTime((seconds) => seconds + 0.17 / timeLimit);
        // ==========================
        if (time === timeLimit) {
          audio.play();
        }
        // Note regarding the sound functionality: This whole time the issue is that I have been trying to get the sound file to play on an exact second like at 2 seconds, 5 seconds, etc. The problem is that time is never going to exactly equal an even second because it is always going to be a multiple of 0.17 based on the way I designed this functionality. I can make this work, but it would be better to redesign the time element so that it better reflects a human conception of time rather than the weird division that I have made to work.
        // ==========================
      }, 100);
    } else if (!startTimer) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [startTimer, timeLimit, time]);

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
                onChange={(event) => setTimeLimit(event.target.value) * 60}
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
