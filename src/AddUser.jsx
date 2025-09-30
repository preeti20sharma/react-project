import React from 'react'

const AddUser = ({ setUser }) => {
    return (
        <div>
            <input type="text" onChange={(event) => setUser(event.target.value)} placeholder='enter user' />
            {/* <button>Add user</button> */}
        </div>
    )
}

export default AddUser
