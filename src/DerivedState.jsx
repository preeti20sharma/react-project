import { useState } from "react"

const DerivedState = () => {
    const [users, setusers] = useState([]);
    const [user, setuser] = useState('');


    const handleAddusers = () => {
        setusers([...users, user])
    }
    console.log(users);
    const totalUsers = users.length;
    const lastUser = users[users.length - 1]

    return (
        <div>
            <hr />
            <h1>Derives state in react js</h1>
            <h1>total users:{totalUsers}</h1>
            <h1>Last user:{lastUser}</h1>
            <input type="text" onChange={(event) => setuser(event.target.value)} placeholder="enter user name" />
            <button onClick={handleAddusers}>Add User</button>
            {
                users.map((item, index) => {
                    return (
                        <>
                            <h1 key={index}>{item}</h1>
                        </>
                    )
                })
            }
        </div>
    )
}

export default DerivedState
