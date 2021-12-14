import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";
import { collection, orderBy } from "@firebase/firestore";


export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);


  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'bbORIylmKi9Pg3MaW9fF')

    unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ?
      (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
      : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
          'date',
          '== ',
          moment().format('DD/MM/YYYY')
        ))
        : selectedProject === 'INBOX' || selectedProject === 0
          ? (unsubscribe = unsubscribe.where('date', '==', ''))
          : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
            task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
              task.archived !== true
          )
          : newTasks.filter(task.archived !== true)
      );
      setArchivedTasks(newTasks.filter(task => task.archived == true));
    })

    return () => unsubscribe();
  }, [selectedProject])
  return { tasks, archivedTasks }
}


export const useProjects = () => {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firebase()
      .collection('projects')
      .where('userId', '==', 'bbORIylmKi9Pg3MaW9fF')
    orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id,
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(Projects)) {
          setProjects(allProjects);
        }
      })
  }, [Projects])

  return { Projects, setProjects };

}