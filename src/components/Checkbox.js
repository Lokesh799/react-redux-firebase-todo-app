import React from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';
import {  AiFillDelete } from "react-icons/ai"

export const Checkbox = ({ id, taskDesc }) => {
  const handleClick = () => {
    firebase.firestore().collection('tasks').doc(id).update({
      archived: true,
    });
  };



  return (
    <div data-testid="checkbox-action" >
      <button onClick={handleClick}> <AiFillDelete /></button>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  taskDesc: PropTypes.string.isRequired,
};
