import React, { useState } from 'react'

export default function CreateTask(props) {
    const [task, setTask] = useState({
        title: '',
        content: '',
    })
    const detectChange = (event) => {
        const { name, value } = event.target;

        setTask((prevTask) => {
            return {
                ...prevTask,
                [name]: value,
            }
        })
    }
    const submitTask = (event) => {
        props.onAdd(task)
        setTask({
            title: '',
            content: ''
        })
        event.preventDefault()

    }
    return (
        <div className='todoDivArea'>
            <form className='todoDiv'>
                <input type="text" className='form-control todoText mb-3'
                    name='title'
                    value={task.title}
                    placeholder='Başlık'
                    onChange={detectChange}
                />
                <textarea name="content"
                    className='form-control todoText mb-3'
                    rows={3}
                    placeholder='İşinizi Yazınız'
                    value={task.content}
                    onChange={detectChange}
                ></textarea>
                <button onClick={submitTask} className='btn btn-primary w-100'>Ekle</button>
            </form>
        </div>
    )
}
