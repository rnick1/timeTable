import React from "react";
import Task from "./Task/Task";
import Transition from "./Trans/Transition";

export default function TaskTransCombo() {
  return (
    <div>
      <Task />
      <br />
      <Transition />
    </div>
  );
}
