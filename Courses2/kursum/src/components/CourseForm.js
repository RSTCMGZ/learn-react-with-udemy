import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeDescription, changeCost } from '../store/slices/FormSlice'
import { addCourse } from '../store/slices/CourseSlice'

function CourseForm() {
    const dispatch = useDispatch()
    const { name, description, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            description: state.form.description,
            cost: state.form.cost
        }
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCourse({ name, description, cost }))

    }
    return (
        <div className='courseForm panel'>
            <h4 className='subtitle is-3'>Kurs Ekle</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className='label'>Ad</label>
                        <input onChange={(event) => { dispatch(changeName(event.target.value)) }} className='input is-expanded'
                            value={name}
                        />
                    </div>
                    <div className="field">
                        <label className='label'>Açıklama</label>
                        <textarea onChange={(event) => { dispatch(changeDescription(event.target.value)) }} className='input is-expanded'
                            value={description}

                        />
                    </div>
                    <div className="field">
                        <label className='label'>Fiyat</label>
                        <input onChange={(event) => { dispatch(changeCost(parseInt(event.target.value))) }} className='input is-expanded' type='number'
                            value={cost}

                        />
                    </div>

                </div>
                <div className="field">
                    <button className='button is-primary'>
                        Kaydet
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CourseForm