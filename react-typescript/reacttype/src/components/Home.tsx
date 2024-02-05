import React from 'react'
import { DateComing } from "../components/propstypes"


function Home(props: DateComing) {
    return (
        <div> İsim: {props.name} Yaş: {props.age} Kurs Sayısı: {props.courseNumber}
            {props.isBest ? <p>en iyi react Eğitimi </p> : <p>en iyi react Eğitimi  bu değil</p>}
        </div>
    )
}

export default Home