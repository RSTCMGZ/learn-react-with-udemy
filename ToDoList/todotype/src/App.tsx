import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import { todoType } from "./apptypes"
import TodoItem from './TodoItem';


const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [workDay, setWorkDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<todoType[]>([])


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setWorkDay(Number(event.target.value))
    }
  }
  const addNewTask = () => {
    const newTask = { taskName: task, workDay: workDay }
    setTodoList([...todoList, newTask])
    setTask('')
    setWorkDay(0)
  }
  const deleteTask = (nameToDelete: string): void => {

    setTodoList(todoList.filter((task) => {
      return task.taskName !== nameToDelete
    }))

  }


  return (
    <div className="App">
      <div>
        <input type='text' onChange={handleChange} name='task' value={task} placeholder='Taskınızı giriniz...' />
        <input type='number' onChange={handleChange} name='workDay' value={workDay} placeholder='Kaç günde tamamlamalısınız' />
        <button onClick={addNewTask}>Yeni Task Ekle</button>
      </div>
      <div>
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />
        })}
      </div>
    </div>
  );
}

export default App;
