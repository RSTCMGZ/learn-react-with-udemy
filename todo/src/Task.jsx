import React from 'react'
import './App.css';

export default function Task(props) {

    const deleteClick = () => {
        props.delete(props.id)
    }
    return (
        <div className='col-md-4 mb-4'>
            <div className='contentDiv'>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button className='btn btn-danger w-100'
                    onClick={deleteClick}
                >Sil</button>
            </div>
        </div>
    )
}
