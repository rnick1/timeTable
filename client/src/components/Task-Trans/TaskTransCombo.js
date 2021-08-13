import React from "react";
// import Task from "./Task/Task";
import TaskExperiment from "./Task/TaskExperiment";
import Transition from "./Trans/Transition";

export default function TaskTransCombo() {
  return (
    <div>
      {/* <Task /> */}
      <TaskExperiment />
      <br />
      <Transition />
    </div>
  );
}
