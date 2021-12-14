import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import {
  FaSpaceShuttle,
  FaRegCalendarAlt,
  FaSun,
  FaRegPaperPlane,
} from "react-icons/fa";
import { setTaskDate, toggleDate } from "../actions";

export const TaskDate = () => {
  //const showDate = useSelector((state) => state.addTask.showDate);
  const showHideCalender = useSelector((state) => state.addTask.toggleDate)

  const dispatch = useDispatch();

  return showHideCalender ? (
    <ul style={{ listStyle: "none" }}>
      <li>
        <div
          onClick={() => {
            dispatch(toggleDate(!showHideCalender));
            dispatch(setTaskDate(moment().format("DD/MM/YYYY")));
          }}
        >
          <span>
            <FaSpaceShuttle />
          </span>
          <span>Today</span>
        </div>
      </li>
      <li>
        <div
          onClick={() => {
            dispatch(toggleDate(!showHideCalender));
            dispatch(setTaskDate(moment().add(1, "day").format("DD/MM/YYYY")));
          }}
        >
          <span>
            <FaSun />
          </span>
          <span>Tomorrow</span>
        </div>
      </li>
      <li>
        <div
          onClick={() => {
            dispatch(toggleDate(!showHideCalender));
            dispatch(setTaskDate(moment().add(7, "days").format("DD/MM/YYYY")));
          }}
        >
          <span>
            <FaRegPaperPlane />
          </span>
          <span>Next 7 Days</span>
        </div>
      </li>
    </ul>
  ) : (
    "TaskDate"
  );
}