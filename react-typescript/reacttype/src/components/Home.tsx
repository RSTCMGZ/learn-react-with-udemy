import React from 'react'

type DateComing = {
    name: string;
    age: number;
    courseNumber: number;
    isBest: boolean;
}

function Home(props: DateComing) {
    return (
        <div> İsim: {props.name} Yaş: {props.age} Kurs Sayısı: {props.courseNumber}
            {props.isBest ? <p>en iyi react Eğitimi </p> : <p>en iyi react Eğitimi  bu değil</p>}
        </div>
    )
}

export default Home