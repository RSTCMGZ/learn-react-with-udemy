import React from 'react'
import { todoType } from "./apptypes"


type PropsType = {
    task: todoType,
    deleteTask(nameToDelete: String): void
}


function TodoItem({ task, deleteTask }: PropsType) {
    return (
        <div className='card'>
            <div>
                <p>
                    {task.taskName}
                </p>
                <p>
                    {task.workDay}
                </p>
                <button className='btnDelete' onClick={() => deleteTask(task.taskName)}>Sil</button>
            </div>

        </div>
    )
}

export default TodoItem