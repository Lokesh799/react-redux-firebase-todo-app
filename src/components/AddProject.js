import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';
import { useDispatch , useSelector } from 'react-redux';
import { addProject , setProjectName } from '../actions';

export const AddProject = ({ shouldShow = false }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(shouldShow);
  const projects = useSelector((state) => state.addTask.addProject)
  const projectName = useSelector((state) => state.addTask.setName)

  

  const addProjects = () =>
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId:new Date().getTime.toString(),
        name: projectName,
        userId: '"bbORIylmKi9Pg3MaW9fF"',
      })
      .then(() => {
        dispatch(addProject([...projects]));
        dispatch(setProjectName(''));
        setShow(false);
        window.location.reload()
      });

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input" data-testid="add-project-inner">
          <input
            value={projectName}
            onChange={(e) => dispatch(setProjectName(e.target.value))}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProjects()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            aria-label="Cancel adding project"
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setShow(false);
            }}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        aria-label="Add Project"
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => setShow(!show)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShow(!show);
        }}
        role="button"
        tabIndex={0}
      >
        Add Project
      </span>
    </div>
  );
};

AddProject.propTypes = {
  shouldShow: PropTypes.bool,
};
