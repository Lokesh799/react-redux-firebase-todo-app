import React from "react";
import { FaPizzaSlice, FaRegCalendarAlt } from "react-icons/fa"
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { showModel, setShowQuickAddTask, toggleDate, showTaskDate } from "../../actions";
import { TaskDate } from "../TaskDate";
import { useSelector, useDispatch } from 'react-redux';
import { firebase } from "../../firebase";

export const Header = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modelshow.show)
  const quickTask = useSelector((state) => state.addTask.addQuickTask)
  const setTaskDate = useSelector((state) => state.addTask.setTaskDate)
  const showHideCalender = useSelector((state) => state.addTask.toggleDate)

  const handleChange = (e) => {
    dispatch(setShowQuickAddTask({ ...quickTask, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const setFirebase = firebase.firestore()
    setFirebase.collection('tasks').add({
      tasks: quickTask.task,
      date: setTaskDate,
      archived: false,
      userId: 'owTZ4zaSKk8iuYx2m9FK'
    })
    dispatch(showModel(false));
  }

  const handleDate = () => {
    dispatch(toggleDate(!showHideCalender));
  };

  const handleClose = () => {
    dispatch(showModel(false));
  }
  const handleShow = () => {
    dispatch(showModel(true));
  }
  return (
    <>
      <div className="navbar navbar-expand-lg" style={{
        display: 'flex',
        justifyContent: 'center',
        color: '#9f0500',
        backgroundColor: '#455a64'
      }}>
        <nav >
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item px-3 ">
                  <button onClick={() => handleShow(true)}>+
                  </button>
                </li>
                <li className="nav-item px-3"><button
                  data-testid="dark-mode-action"
                  aria-label="Darkmode on/off"
                  type="button"
                  onClick>
                  <FaPizzaSlice />
                </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Quick Task</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="wrapper">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Task</label>
              <input
                type="text" name="task"
                className="form-control"
                onChange={handleChange} />
            </div>
            <Button type="submit" variant="primary">
              AddTask
            </Button>
            {showHideCalender ? (
              <TaskDate />
            ) : (
              <FaRegCalendarAlt onClick={() => handleDate()} />
            )}
          </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
