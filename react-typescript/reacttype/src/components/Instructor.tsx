import React from 'react'
import { instructorProps } from "../components/propstypes"



function Instructor(props: instructorProps) {
    return (
        <div>{props.instructorNameLastName.firstName} {props.instructorNameLastName.lastName}</div>
    )
}

export default Instructor