import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModel} from "../actions";
import Button from "@restart/ui/esm/Button";
import { ShowProject } from "./ShowProject";
import { Checkbox } from "./Checkbox";

export const ShowSelectedProject = () => {
  const dispatch = useDispatch();
  const showSelected = useSelector((state) => state.addTask.showSelected)
  const task = useSelector((state) => state.addTask.selectedTaskRecord)
  const showSelectedProject = useSelector((state) => state.addTask.showTask)
  console.log(showSelectedProject)
  const showprojecttoggle = useSelector((state) => state.addTask.showProjectArray)
  console.log(showprojecttoggle)
  const data = useSelector((state) => state.addTask.selecteIndividauldProject)
  
  const handleShow = () => {
    dispatch(showModel(true));
  }

  return (
    <>
      {!showSelectedProject ? (
        <>
          {showSelected === "INBOX" ? <div> <h2 data-testid="project-name">INBOX</h2>
            <ul className="task__list">
              {task.map((task) =>
                <li key={`${task.id}`}>
                  <Checkbox id={task.id} taskDesc={task.task} />
                  <span>{task.tasks}</span>
                </li>
              )}
            </ul>
            <div className="text-center" >
              <Button className="btn btn-warning " onClick={() => handleShow(true)}>AddTask</Button>
            </div>
          </div>
            : showSelected === "TODAY" ? <div> <h2 data-testid="project-name">TODAY</h2>
              <ul className="task__list">
                {task.map((task) =>
                  <li key={`${task.id}`}>
                    <Checkbox id={task.id} taskDesc={task.task} />
                    <span>{task.tasks}</span>
                  </li>
                )}
              </ul>
              <div className="text-center" >
                <Button className="btn btn-warning " onClick={() => handleShow(true)}>AddTask</Button>
              </div>
            </div>
              : <div> <h2 data-testid="project-name">7_DAYS</h2>
                <ul className="task__list">
                  {task.map((task) =>
                    <li key={`${task.id}`}>
                      <Checkbox id={task.id} taskDesc={task.task} />
                      <span>{task.tasks}</span>
                    </li>
                  )}
                </ul>
                <div className="text-center" >
                  <Button className="btn btn-warning " onClick={() => handleShow(true)}>AddTask</Button>
                </div>
              </div>
          }
        </>
      ) : 
        <div className="text-center" >
          <ShowProject />
                  <Button className="btn btn-warning " onClick={() => handleShow(true)}>AddTask</Button>
                </div>
    
        }
    </>
  )
}