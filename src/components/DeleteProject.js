import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import {
  addProject,
  showProjectArray,
  setSelectIndividualProject,
  setSelectProjectId,
  showSelectProjectName
} from '../actions';
import { firebase } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';

export const DeleteProject = ({ pro }) => {
  const dispatch = useDispatch()
  const [showConfirm, setShowConfirm] = useState(false);
  const projects = useSelector((state) => state.addTask.addProject)

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        dispatch(addProject([...projects]));
      });
  };
  const handleClick = () => {

    dispatch(showProjectArray(true))
    dispatch(setSelectIndividualProject(false))
    dispatch(setSelectProjectId(pro.projectId))
    dispatch(showSelectProjectName(pro.name))
    //window.location.reload()

  }
  return (

    <>
      <span className="sidebar__project-name" onClick={() => handleClick()}>{pro.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowConfirm(!showConfirm);
        }}
        tabIndex={0}
        role="button"
        aria-label="Confirm deletion of project"
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <button
                type="button"
                onClick={() => deleteProject(pro.docId)}
              >
                Delete
              </button>
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setShowConfirm(!showConfirm);
                }}
                tabIndex={0}
                role="button"
                aria-label="Cancel adding project, do not delete"
              >
                Cancel
              </span>
            </div>
          </div>
        )}
      </span>
    </>
  );
};

DeleteProject.propTypes = {
  project: PropTypes.object.isRequired,
};
