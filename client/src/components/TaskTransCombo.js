import React from "react";
import Task from "../components/Task-Trans/Task/Task";
import Transition from "../components/Task-Trans/Trans/Transition";

export default function TaskTransCombo() {
  return (
    <div>
      <Task />
      <br />
      <Transition />
    </div>
  );
}
