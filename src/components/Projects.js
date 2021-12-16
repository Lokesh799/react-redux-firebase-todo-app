import React from "react";
import {  useSelector } from "react-redux";
import { FaTrashAlt } from 'react-icons/fa';
import { useProjects } from "../hooks";
import { AddProject } from "./AddProject";
import { DeleteProject } from "./DeleteProject";

export const Projects = () => {
  useProjects();
  const projects = useSelector((state) => state.addTask.getProject)
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
            <li key={`${project.id}`}>
              {/* <li id={project.projectId} /> */}
              <span>{project.name}</span><FaTrashAlt/>
            </li>
          )}
        </ul>
        <AddProject/>
        <DeleteProject project={projects} />
      </div>
    </>
  )
}