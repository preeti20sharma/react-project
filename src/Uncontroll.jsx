import { useRef } from "react";
const Uncontroll = () => {
    const handleevent = (event) => {
        event.preventDefault();
        const user = document.querySelector('#users').value;
        const password = document.querySelector('#password').value;
        console.log(user, password);


    }
    const userRef = useRef();
    const passwordRef = useRef();
    const handleForm = (event) => {
        event.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        console.log(user, password);

    }

    return (
        <div>
            <h1>Uncontrolled Components</h1>
            <form action={''} method='post' onSubmit={handleevent}>
                <input type='text' id='users' placeholder='enter user name' />
                <br /><br />
                <input type='password' id='password' placeholder='enter password name' />
                <button>submit</button>
            </form>
            <hr />
            <h1>Uncontrolled Components with useRef</h1>
            <form action={''} method='post' onSubmit={handleForm}>
                <input ref={userRef} type='text' placeholder='enter user name' />
                <br /><br />
                <input ref={passwordRef} type='password' placeholder='enter password name' />
                <button>submit</button>
            </form>

        </div>
    )
}

export default Uncontroll
