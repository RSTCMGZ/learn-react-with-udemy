import { createContext } from "react"
import { useState } from 'react';
import axios from 'axios'

const TasksContext = createContext()


function Provider({ children }) {
    const [tasks, setTasks] = useState([])
    const createTask = async (title, taskDesc) => {
        const response = await axios.post('http://localhost:3004/tasks', {
            title,
            taskDesc
        })
        const createdTasks = [
            ...tasks,
            response.data
        ];
        setTasks(createdTasks)
    }

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:3004/tasks')
        setTasks(response.data)
    }
    const deleteTaskById = async (id) => {
        await axios.delete(`http://localhost:3004/tasks/${id}`)

        const afterDeletingTasks = tasks.filter((task) => {
            return task.id !== id;
        })
        setTasks(afterDeletingTasks)
    }

    const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
        await axios.put(`http://localhost:3004/tasks/${id}`, {
            title: updatedTitle,
            taskDesc: updatedTaskDesc,
        })

        const updatedTask = tasks.map((task) => {
            if (task.id === id) {
                return { id, title: updatedTitle, taskDesc: updatedTaskDesc }
            }
            return task;
        })
        setTasks(updatedTask)
    }
    const sharedValuesAndMethods = {
        tasks,
        createTask,
        fetchTasks,
        editTaskById,
        deleteTaskById
    }
    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    )
}

export { Provider }
export default TasksContext