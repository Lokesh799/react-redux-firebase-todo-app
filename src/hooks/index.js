import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedTask } from "../actions";

export const Hook = () => {
  const dispatch = useDispatch();
  const showSelected = useSelector((state) => state.addTask.showSelected)
  const getRecord = useSelector((state) => state.addTask.selectedTaskRecord)

  useEffect(() => {
    if (showSelected === 'INBOX') {
      let unsubscribe = firebase
        .firestore()
        .collection("tasks")

      unsubscribe = unsubscribe.onSnapshot(snapshot => {
        const getRecord = snapshot.docs.map(task => ({
          id: task.id,
          ...task.data(),
        }))
        dispatch(getSelectedTask(getRecord))
      })
    }
    else if (showSelected === 'TODAY') {
      let unsubscribe = firebase
        .firestore()
        .collection("tasks")

      unsubscribe = unsubscribe.onSnapshot(snapshot => {
        const getRecord = snapshot.docs.map(task => ({
          id: task.id,
          ...task.data(),
        }))
        dispatch(getSelectedTask(getRecord.filter(data => data.date == moment().format("DD/MM/YYYY") || data.date == "")))
      })
    }
    else {
      let unsubscribe = firebase
        .firestore()
        .collection("tasks")

      unsubscribe = unsubscribe.onSnapshot(snapshot => {
        const getRecord = snapshot.docs.map(task => ({
          id: task.id,
          ...task.data(),
        }))
        dispatch(getSelectedTask(getRecord.filter((data) => moment(data.date, "DD-MM-YYYY").diff(moment(), "days") <= 7)))
      })
    }
  }, [showSelected]);
  return (
    <>
    </>
  );
};
