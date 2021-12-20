import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useProjects } from "../hooks";
import { AddProject } from "./AddProject";
import { DeleteProject } from "./DeleteProject";


export const Projects = () => {
  useProjects();
  const dispatch = useDispatch()
  const projects = useSelector((state) => state.addTask.getProject)
  const showSelected = useSelector((state) => state.addTask.showSelected)

  return (
    <>
      <div data-testid="sidebar" style={{
        backgroundColor: '#607d8b',
        marginRight: '200px',
        padding: '20px',
        width: '80%',
        borderRadius: '6px',
      }}>
        <ul className="task__list">
          {projects.map((project) =>
            <li key={project.projectId}>
              <DeleteProject pro={project} />
            </li>
          )}
        </ul>
        <AddProject />
      </div>
    </>
  )
}