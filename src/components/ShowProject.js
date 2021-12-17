import React from "react";
import { useSelector } from "react-redux";


export const ShowProject = () => {
  const setProjectName = useSelector((state) => state.addTask.setProjectName)
  const projectId = useSelector((state) => state.addTask.storeProjectId)
  const task = useSelector((state) => state.addTask.selectedTaskRecord)

  return (
    <>
      <div >
        <h1 > {setProjectName}</h1>
        {task.map((index) => (

          (index.projectId == projectId) ? <li>{index.tasks}</li> : undefined)
        )}
      </div>
    </>
  )
}