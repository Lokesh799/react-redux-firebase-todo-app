import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "./Checkbox";
import { showModel } from "../actions";
import Button from "@restart/ui/esm/Button";

export const ShowSelectedProject = () => {
  const dispatch = useDispatch();
  const showSelected = useSelector((state) => state.addTask.showSelected)
  const task = useSelector((state) => state.addTask.selectedTaskRecord)
  console.log('task here', task)

  const handleShow = () => {
    dispatch(showModel(true));
  }
  
  return (
    <>
      <div className="sticky-sm-to" style={{
        float: 'right',
        marginTop: "-270px",
        paddingRight: '600px',
        backgroundColor: '#eb144c',
        borderRadius: '6px',
        position: 'static'
      }}>

        {showSelected === "INBOX" ? <div> <h2 data-testid="project-name">INBOX</h2>
          <ul className="task__list">
            {task.map((task) =>
              <li key={`${task.id}`}>
                <Checkbox id={task.id} taskDesc={task.tasks} />
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
                  <Checkbox id={task.id} taskDesc={task.tasks} />
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
                    <Checkbox id={task.id} taskDesc={task.tasks} />
                    <span>{task.tasks}</span>
                  </li>
                )}
              </ul>
              <div className="text-center" >
                <Button className="btn btn-warning " onClick={() => handleShow(true)}>AddTask</Button>
              </div>
            </div>}
      </div>
    </>
  )
}