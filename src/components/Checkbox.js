import React from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const Checkbox = ({ id, taskDesc }) => {
  const archiveTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({
      archived: true,
    });
  };

  console.log("nfsdkjf", taskDesc)

  return (
    <AiOutlineCheckCircle role="button" onClick={()=>archiveTask()}  />
  );
};

