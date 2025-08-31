import React from 'react'

const Arraydata = () => {
    // const userName = ['sam', 'peter', 'tom'];
    const userData = [
        {
            name: 'sam',
            age: '24',
            email: 'sam@test.com',
            ID: 1,
        },
        {
            name: 'peter',
            age: '44',
            email: 'peter@test.com',
            ID: 2,
        },
        {
            name: 'tom',
            age: '34',
            email: 'tom@test.com',
            ID: 3,
        },
    ]
    return (
        <div>
            <h1>Loop in JSX with Map Function </h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.ID}>
                            <td>{user.ID}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Dummy data </h2>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>sam</td>
                        <td>24</td>
                        <td>sam@test.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>peter</td>
                        <td>44</td>
                        <td>peter@test.com</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>tom</td>
                        <td>34</td>
                        <td>tom@test.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Arraydata;
