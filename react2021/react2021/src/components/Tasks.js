import { Fragment } from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDelete }) => {
  return (
    <Fragment>
      {tasks.map((task) => (
        <Task task={task} onDelete={onDelete} />
      ))}
    </Fragment>
  );
};

export default Tasks;
