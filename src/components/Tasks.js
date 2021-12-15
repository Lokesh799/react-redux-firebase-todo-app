import React from "react";
import { ShowSelectedProject } from "./ShowSelectedProject";
import { Checkbox } from "./Checkbox";
import { useSelector } from "react-redux"

export const Tasks = () => {
  const task = useSelector((state) => state.addTask.selectedTaskRecord)

  console.log("i am task from task", task);

  const projectName = "";

  return (
    <div>
      <ShowSelectedProject />
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="task__list">
        {task.map((task) =>
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        )}
      </ul>
    </div>
  );
};