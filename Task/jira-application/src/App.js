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
  return (
    <div className="App">
      <TasCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
