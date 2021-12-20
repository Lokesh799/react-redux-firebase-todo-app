import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedTask } from "../actions";
import { getSelectedProject } from "../actions";

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
        dispatch(getSelectedTask(getRecord.filter((data) => data.archived !== true)))
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
        dispatch(getSelectedTask(getRecord.filter(data => data.date == moment().format("DD/MM/YYYY")
          && data.archived !== true)))
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
        dispatch(getSelectedTask(getRecord.filter((data) => moment(data.date, "DD-MM-YYYY")
          .diff(moment().format('MMM D, YYYY')) > 0
          && data.archived !== true)))
      })
    }
  }, [showSelected]);
  return (
    <>
    </>
  );
};


export const useProjects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.addTask.getProject)

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id,
        }));
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          dispatch(getSelectedProject(allProjects));
        }
      });
  }, [projects]);

  return {}
};
