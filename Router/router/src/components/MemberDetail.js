import React from 'react'
import { useParams } from 'react-router-dom'

function MemberDetail() {
    const params = useParams()
    const memberID = params.memberId
    // const { memberID } = useParams()
    return (
        <div>MemberDetail  {memberID}</div>
    )
}

export default MemberDetail