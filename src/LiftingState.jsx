import React, { useState } from 'react'
import AddUser from './AddUser'
import DisplayUser from './DisplayUser'

const LiftingState = () => {
    const [user, setUser] = useState();
    return (
        <div>
            <h1>Sharing State Between Components</h1>
            <AddUser setUser={setUser} />
            <hr />
            <DisplayUser user={user} />
        </div>
    )
}

export default LiftingState
