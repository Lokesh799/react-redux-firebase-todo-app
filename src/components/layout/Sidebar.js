import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="col-md-12 d-none d-md-block bg-li" data-testid="sidebar" style={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#db3e00',
      width:'40%',
      height:'50',
    }}>
      <ul className="list-group col-md-10 my-3">
        <li className="list-group-item" style={{ backgroundColor: '#525252' }}>
          <span><FaInbox /></span>
          <span>Inbox</span>
        </li>
        <li className="list-group-item" style={{ backgroundColor: '#abb8c3' }}>
          <span><FaRegCalendarAlt /></span>
          <span>Today</span>
        </li>
        <li className="list-group-item" style={{ backgroundColor: '#008b02' }}>
          <span><FaRegCalendar /></span>
          <span>Next 7 days</span>
        </li>
      </ul>

      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h3>Project</h3>
      </div>

      <ul className="sidebar__projects">Projects will be here!</ul>
      Add Project components here
    </div>
  )
}


