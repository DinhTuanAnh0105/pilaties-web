/* eslint-disable react/prop-types */
import { CalendarContext } from 'context/CalendarContext';
import React, { useContext } from 'react';

function Task({ task, style }) {
  const { setTask } = useContext(CalendarContext);

  return (
    <p
      style={style}
      onClick={() => {
        setTask(task);
      }}
    >
      {task.name}
    </p>
  );
}

export default Task;
