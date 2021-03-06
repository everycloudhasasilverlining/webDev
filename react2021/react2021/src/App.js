import { Fragment, useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const name = 'Brad';
  const x = true;

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shipping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle remider
  const toggleReminder = (id) => {
    console.log(id);
  };

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
