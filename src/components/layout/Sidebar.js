import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProject, showProject, showTaskProject } from "../../actions";
import { Projects } from "../Projects";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const showProjects = useSelector((state) => state.addTask.showProject)
  const show = useSelector((state) => state.addTask.showTask)
  console.log("show is here", show)
  return (
    <>
      <div className="col-md-12 d-none d-md-block bg-li" data-testid="sidebar" style={{
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
      }}>
        <ul className="list-group col-md-10 my-3">
          <li className="list-group-item" style={{ backgroundColor: '#525252' }}
            onClick={() => {
              dispatch(setSelectedProject('INBOX'))
              dispatch(showTaskProject(false))
            }}>
            <span><FaInbox /></span>
            <span>Inbox</span>
          </li>
          <li className="list-group-item" style={{ backgroundColor: '#abb8c3' }}
            onClick={() => {
              dispatch(setSelectedProject('TODAY'))
              dispatch(showTaskProject(false))
            }}>
            <span><FaRegCalendarAlt /></span>
            <span>Today</span>
          </li>
          <li className="list-group-item" 
            onClick={() => {
              dispatch(setSelectedProject('7_DAYS'))
              dispatch(showTaskProject(false))
            }}>
            <span><FaRegCalendar /></span>
            <span>Next 7 days</span>
          </li>
        </ul>
      </div>
      <div
        className="sidebar__middle"
        aria-label="Show/hide projects"
        onClick={() => dispatch(showProject(!showProjects))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') dispatch(showProject(!showProjects))
        }}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <div className="sidebar__projects" >{showProjects && <Projects />}</div>
    </>
  )
}


