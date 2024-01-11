import { useState } from 'react';
import './App.css';
import TasCreate from './components/TasCreate';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([])
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks, {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc
      }
    ];
    setTasks(createdTasks)
  }
  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeletingTasks)
  }
  return (
    <div className="App">
      <TasCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

export default App;
