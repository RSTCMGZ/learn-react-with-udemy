import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Courses({ courses, removeCourse }) {
    const [index, setIndex] = useState(0)
    const { content, title, price } = courses[index]

    const checkIndex = (index) => {
        if (index < 0) {
            return courses.length - 1
        }
        if (index > courses.length - 1) {
            return 0
        }
        return index;
    }

    const prevCourse = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkIndex(newIndex);
        })
    }
    const nextCourse = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkIndex(newIndex);
        })
    }

    const getRandomCourse = () => {

        let randomNumber = Math.floor(Math.random() * courses.length)
        if (randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkIndex(randomNumber))
    }

    return (
        <div className="courseMainDiv">
            <div className='courseTitleBtn'>
                <h2>Kurslarım</h2>
                <button onClick={getRandomCourse} className='cardDeleteBtn'>Rastgele Kurs Ata!</button>

            </div>
            <div className="cardDiv">
                <button onClick={prevCourse} className="prevNextBtn">
                    <FaChevronLeft />
                </button>
                <div className="card">
                    <div className="cardTitlePrice">
                        <h2 className="cardTitle">{title}</h2>
                        <h4 className="cardPrice">{price}₺</h4>
                    </div>
                    <p>{content}</p>
                </div>
                <button onClick={nextCourse} className="prevNextBtn" >
                    <FaChevronRight />
                </button>
                {/* {
                     courses.map((course) => {
                    //     return (
                    //         <Course key={course.id} {...course} removeOneCourse={removeCourse} />
                    //         //course={course}
                    //     )
                     })
                } */}
            </div>
        </div>
    )
}

export default Courses