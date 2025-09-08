import { useRef } from "react"
const Userefhook = () => {
    const inputRef = useRef(null);
    const h1Ref = useRef(null);
    const inputHandler = () => {
        inputRef.current.focus();
        inputRef.current.style.color = 'red';
        inputRef.current.placeholder = 'enter password';
        inputRef.current.value = "123"
    }
    const toggleholder = () => {
        if (inputRef.current.style.display != 'none') {
            inputRef.current.style.display = 'none'
        } else {
            inputRef.current.style.display = 'inline'
        }
    }
    const headingHandler = () => {
        h1Ref.current.style.color = 'green'
    }
    return (
        <div>
            <h1>UseRef hook</h1>
            <input ref={inputRef} type='text' placeholder='Enter User name' />
            <button onClick={inputHandler}>focus on input field</button>
            <button onClick={toggleholder}>Toggle</button>
            <h1 ref={h1Ref}>Useref hook manipulation</h1>
            <button onClick={headingHandler}>focus on heading</button>

        </div>
    )
}

export default Userefhook
